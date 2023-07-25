import React, { useEffect, useRef } from "react";
import "./styles/school.css";
import rutgers from "../assets/rutgers.png";
import useObserver from "../hooks/useObserver";
import thresholdOption from "../fn/thresholdOption";

export default function School() {
  const ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null),
    ref4 = useRef(null);

  const option = {
    root: null,
    rootMargin: "0px",
    threshold: thresholdOption(100),
  };

  const isVisible = [
    useObserver(ref1, option, false, true),
    useObserver(ref2, option, true),
    useObserver(ref3, option, true),
    useObserver(ref4, option, true),
  ];

  return (
    <section className="section school" ref={ref4}>
      <img
        src={rutgers}
        alt="rutgers logo"
        style={{
          opacity: isVisible[3] ? "1" : "0",
          transform: `translate(${`clamp(-120%, ${
            isVisible[0] / 10
          }%, -50%)`}, -50%)`,
        }}
      />
      <header
        style={{
          opacity: `${isVisible[1] || isVisible[2] ? 1 : 0}`,
          pointerEvents: isVisible[1] || isVisible[2] ? "auto" : "none",
        }}
      >
        <h3
          style={{
            transform: isVisible[2]
              ? "translate(6em, -2em)"
              : "translate(6em, 0)",
            transitionDelay: !isVisible[2] ? "1s" : "0s",
          }}
        >
          I graduated from <span>Rutgers</span> at New-Brunswick
        </h3>
      </header>
      <div
        className="section__text"
        style={{
          opacity: `${isVisible[2] ? 1 : 0}`,
          pointerEvents: isVisible[2] ? "auto" : "none",
        }}
      >
        <div
          style={{
            transform: isVisible[2]
              ? "translate(6em, 2em)"
              : "translate(6em, 0)",
            transitionDelay: !isVisible[2] ? "1s" : "0s",
          }}
        >
          <p>
            Majored <span>IT</span>
          </p>
          <p>
            Minored <span>Japanese</span>
          </p>
        </div>
      </div>
      <div className="block-100vh" ref={ref1}></div>
      <div className="block-100vh"></div>
      <div className="block-100vh" ref={ref2}></div>
      <div className="block-100vh" ref={ref3}></div>
    </section>
  );
}
