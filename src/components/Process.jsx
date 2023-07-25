import React from "react";
import useObserver from "../hooks/useObserver";
import "./styles/process.css";

export default function Process({ mainRef }) {
  const option = {
    treshold: 0,
  };

  const isVisible = useObserver(mainRef, option, false, false, true);

  return (
    <div className="process">
      <div className="process__bar">
        <div
          className="process__pass"
          style={{
            left: `${Math.floor(
              ((Math.abs(isVisible.top) + window.innerHeight) /
                isVisible.height) *
                100
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
