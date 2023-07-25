import React, { useRef } from "react";
import useObserver from "../hooks/useObserver";
import "./styles/greeting.css";
import thresholdOption from "../fn/thresholdOption";

export default function Greeting() {
  const option = {
    threshold: 0.5,
  };
  const ref1 = useRef(null),
    ref2 = useRef(null);
  const isVisible = [
    useObserver(ref1, option, true),
    useObserver(ref2, option, true),
  ];

  return (
    <section className="section greeting">
      <header
        style={{
          opacity: isVisible[0] ? "1" : "0",
          pointerEvents: isVisible[0] ? "auto" : "none",
        }}
      >
        <h1>
          Hi, my name is <span>Sunil Park</span>.
        </h1>
        <p>
          Nice to meet <span>you</span>!
        </p>
      </header>
      <div
        className="section__text"
        style={{
          opacity: isVisible[1] ? "1" : "0",
          pointerEvents: isVisible[1] ? "auto" : "none",
        }}
      >
        <p>
          I am a <span>front-end</span> web developer.
        </p>
        <p>
          Please, let me <span>introduce</span> myself.
        </p>
      </div>
      <div className="block-100vh" ref={ref1}></div>
      <div className="block-100vh" ref={ref2}></div>
    </section>
  );
}
