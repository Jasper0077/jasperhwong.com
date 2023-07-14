import React from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  return [isLoading, setIsLoading];
};
