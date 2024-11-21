"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

const ProgressBarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        options={{ showSpinner: false }}
        shallowRouting
        color="#facc16"
      />
    </>
  );
};

export default ProgressBarWrapper;
