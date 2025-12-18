import React from "react";
import { MoonLoader } from "react-spinners";

function HeroLoadingSpinner() {
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        marginRight: "4vw",
        marginBottom: "3vw",
      }}
    >
      <MoonLoader color="var(--primary)" size={46} />
    </div>
  );
}

export default HeroLoadingSpinner;
