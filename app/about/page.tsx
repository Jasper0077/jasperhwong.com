"use client";

import classNames from "classnames";
import Image from "next/image";
import React from "react";

import DownloadButton from "@/components/DownloadButton";
import Timeline from "@/components/Timeline";

const About = () => {
  const handleDownload = React.useCallback(async () => {
    const response = await fetch("/api/download");
    const blob = await response.blob();
    const fileURL = window.URL.createObjectURL(blob);
    let anchor = document.createElement("a");
    anchor.href = fileURL;
    anchor.download = "JASPER-RESUME-v1.pdf";
    anchor.click();
  }, []);

  return (
    <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col justify-center">
      <div className="invisible absolute right-[30%] top-48 flex flex-col gap-2 sm:visible">
        <div
          className={classNames("rounded-full bg-zinc-200", "dark:bg-gray-600")}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={
              "https://avatars.githubusercontent.com/u/48860446?s=400&u=8fff5d79830aa932769873b301fb2cabdaa3ffaa&v=4"
            }
            alt="@Jasper0077"
            height={128}
            width={128}
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="relative inset-2 top-[-2rem]"
          />
        </div>
        <DownloadButton title={"My resume"} handleDownload={handleDownload} />
      </div>
      <div className="prose mb-8 items-start leading-6 dark:prose-invert">
        <h2>Biography</h2>
        <h3>Job Title</h3>
        <p>Jasper Hwong - Software Developer</p>
        <h3>Work Experience</h3>
        <p>
          Hi, my name is Jasper Hwong, {"I'm"} currently a software developer at{" "}
          <a href="https://unotech.io">Uno Technologies</a> in Singapore.
        </p>
        <Timeline />
      </div>
    </div>
  );
};

export default About;
