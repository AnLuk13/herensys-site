"use client";

import React from "react";
import { MoonLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <div className="loadingSpinner">
      <MoonLoader color="var(--secondary)" size={60} />
    </div>
  );
}

export default LoadingSpinner;
