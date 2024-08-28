import React from "react";

const useMounted = () => {
  const mounted = React.useRef(true);

  React.useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );

  return mounted;
};

export default useMounted;
