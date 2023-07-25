import React, { useEffect, useRef } from "react";
import "./styles/school.css";
import rutgers from "../assets/rutgers.png";
import useObserver from "../hooks/useObserver";
import thresholdOption from "../fn/thresholdOption";

export default function School() {
  const visible0 = useRef(null),
    visible2 = useRef(null),
    visible3 = useRef(null),
    visible4 = useRef(null);

  const option = {
    threshold: 0.5,
  };

  const isVisible = [
    useObserver(visible0, option, true),
    useObserver(visible2, option, true),
    useObserver(visible3, option, true),
    useObserver(visible4, option, true),
  ];

  useEffect(() => {
    console.log(isVisible[3]);
  }, [isVisible[3]]);

  return (
    <section className="section school" ref={visible4}>
      <img
        src={rutgers}
        alt="rutgers logo"
        style={{
          opacity: isVisible[0] || isVisible[1] || isVisible[2] ? "1" : "0",
          transform:
            isVisible[1] || isVisible[2]
              ? "translate(-120%,-50%)"
              : "translate(-50%,-50%)",
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
      <div className="block-100vh" ref={visible0}></div>
      <div className="block-100vh" ref={visible2}></div>
      <div className="block-100vh" ref={visible3}></div>
    </section>
  );
}
