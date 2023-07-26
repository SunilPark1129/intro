import React, { useRef } from "react";
import "./styles/school.css";
import rutgers from "../assets/rutgers.png";
import useObserver from "../hooks/useObserver";

export default function School() {
  const ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null);

  // set if current scroll position reached the targeted position
  const [isVisibleOne, isVisibleTwo, isVisibleThree] = [
    useObserver(ref1, { threshold: 0.5 }, true),
    useObserver(ref2, { threshold: 0.5 }, true),
    useObserver(ref3, { threshold: 0.5 }, true),
  ];

  return (
    <section className="section school">
      <img
        src={rutgers}
        alt="rutgers logo"
        style={{
          opacity: isVisibleOne || isVisibleTwo || isVisibleThree ? "1" : "0",
          transform:
            isVisibleTwo || isVisibleThree
              ? "translate(-120%,-50%)"
              : "translate(-50%,-50%)",
        }}
      />
      <header
        style={{
          opacity: `${isVisibleTwo || isVisibleThree ? 1 : 0}`,
          pointerEvents: isVisibleTwo || isVisibleThree ? "auto" : "none",
        }}
      >
        <h3
          style={{
            transform: isVisibleThree
              ? "translate(6em, -2em)"
              : "translate(6em, 0)",
            transitionDelay: !isVisibleThree ? "1s" : "0s",
          }}
        >
          I graduated from <span>Rutgers</span> at New-Brunswick
        </h3>
      </header>
      <div
        className="section__text"
        style={{
          opacity: `${isVisibleThree ? 1 : 0}`,
          pointerEvents: isVisibleThree ? "auto" : "none",
        }}
      >
        <div
          style={{
            transform: isVisibleThree
              ? "translate(6em, 2em)"
              : "translate(6em, 0)",
            transitionDelay: !isVisibleThree ? "1s" : "0s",
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
      <div className="block-100vh" ref={ref2}></div>
      <div className="block-100vh" ref={ref3}></div>
    </section>
  );
}
