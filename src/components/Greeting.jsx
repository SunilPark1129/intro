import React, { useRef } from "react";
import useObserver from "../hooks/useObserver";
import "./styles/greeting.css";

export default function Greeting() {
  const ref1 = useRef(null),
    ref2 = useRef(null);

  // set if current scroll position reached the targeted position
  const [isVisibleOne, isVisibleTwo] = [
    useObserver(ref1, { threshold: 0.5 }, true),
    useObserver(ref2, { threshold: 0.5 }, true),
  ];

  return (
    <section className="section greeting">
      <header
        style={{
          opacity: isVisibleOne ? "1" : "0",
          pointerEvents: isVisibleOne ? "auto" : "none",
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
          opacity: isVisibleTwo ? "1" : "0",
          pointerEvents: isVisibleTwo ? "auto" : "none",
        }}
      >
        <p>
          I am a <span>front-end</span> web developer.
        </p>
        <p>
          Please, let me <span>introduce</span> myself.
        </p>
      </div>
      <div
        className="greeting__scroll"
        style={{
          opacity: isVisibleOne ? "1" : "0",
        }}
      >
        <p>scroll down</p>
        <div></div>
      </div>
      <div className="block-100vh" ref={ref1}></div>
      <div className="block-100vh" ref={ref2}></div>
    </section>
  );
}
