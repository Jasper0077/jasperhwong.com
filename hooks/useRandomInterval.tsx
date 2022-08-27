import React from "react";

// Utility helper for random number generation
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
const useRandomInterval = (
  callback: () => Promise<void> | void,
  minDelay: number,
  maxDelay: number
) => {
  const timeoutId = React.useRef<number | undefined>();
  const savedCallback = React.useRef<typeof callback>(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    let isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);
  return cancel;
};

export default useRandomInterval;
