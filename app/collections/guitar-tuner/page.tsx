"use client";

import React from "react";
import BrowserAudio from "@/utils/browserAudio";
import {
  getAutocorrelatedValues,
  getFrequency,
  getNoteFromFrequency,
  DetectedNote
} from "@/utils/pitchDetector";
import { centsOffToPercentage, getColorsArray } from "@/utils/tuner";
import { Button } from "@/components/Button";
import GaugeChart from "react-gauge-chart";
import { RecordButton } from "@/components/RecordButton";
import { NoteIndicator } from "@/components/NoteIndicator";

type ITuner = { instrument: Instrument };

type Instrument = "guitar";

const initialTuner: ITuner = { instrument: "guitar" };

const browserAudio = new BrowserAudio(
  typeof window !== "undefined" ? window : undefined
);
const buffer = new Float32Array(browserAudio.getFftSize());

const audioContext = browserAudio.getAudioContext();
const analyser = browserAudio.getAnalyser();

function Tuner() {
  const [source, setSource] = React.useState<MediaStreamAudioSourceNode>();
  const [note, setNote] = React.useState<DetectedNote | undefined>();
  const [isListening, setListening] = React.useState(true);

  const startTuner = async () => {
    if (!audioContext) return;
    const microphone = await browserAudio.getMicStream();

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    setSource(audioContext.createMediaStreamSource(microphone));
    setListening(true);
  };

  const stopTuner = async () => {
    if (source && analyser) {
      source.disconnect(analyser);
    }
    setListening(false);
    setNote(undefined);
    setSource(undefined);
  };

  const getPitch = () => {
    if (!analyser || !audioContext) return;
    analyser.getFloatTimeDomainData(buffer);
    const correlatedValues = getAutocorrelatedValues(buffer);
    const frequency = getFrequency(correlatedValues, audioContext.sampleRate);

    if (frequency > -1) {
      const note = getNoteFromFrequency(frequency);
      setNote(note);
    }
  };

  React.useEffect(() => {
    let audioSample: NodeJS.Timeout;
    if (source != null && analyser) {
      source.connect(analyser);
      audioSample = setInterval(getPitch, 1);
    }
    return () => clearInterval(audioSample);
  }, [source]);

  // Return based on instrument type
  switch (initialTuner.instrument) {
    case "guitar":
      return (
        <div className="mx-auto w-[50%]">
          <GaugeChart
            id="accuracy"
            nrOfLevels={31}
            percent={centsOffToPercentage(note?.centsOff)}
            animate={false}
            marginInPercent={0.02}
            needleColor="#161719"
            needleBaseColor="#1f2428"
            colors={getColorsArray()}
            hideText
          />
          <NoteIndicator note={note} />
          <div className="flex flex-col items-center my-16">
            <RecordButton
              pressed={isListening}
              onClick={isListening ? stopTuner : startTuner}
            />
          </div>
        </div>
      );
    default:
      return <></>;
  }
}

export default Tuner;
