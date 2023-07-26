import React, { useRef } from "react";
import "./styles/hobby.css";
import useObserver from "../hooks/useObserver";

// set intersection observer scroll option
function thresholdOption(amount) {
  const threshold = [];
  const steps = amount;
  for (let i = 1; i <= steps; i++) {
    threshold.push(i / steps);
  }
  return threshold;
}

// Child components
// Each of them has ref and observer
function ChildComp({ items }) {
  const compRef = useRef(null);

  const isVisible = useObserver(compRef, { threshold: 0.5 }, true);
  return (
    <article>
      <div className="block-100vh" ref={compRef}></div>
      <div
        className="section__text"
        style={{
          opacity: isVisible ? "1" : "0",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        {items.map((item) => (
          <p
            key={item}
            style={{
              animation: isVisible ? "0.6s text-shake forwards" : "none",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}

export default function Hobby() {
  const ref1 = useRef(null),
    ref2 = useRef(null);

  // set if current scroll position reached the targeted position
  const [isVisibleOne, isVisibleTwo] = [
    useObserver(ref1, { threshold: thresholdOption(100) }, false, true),
    useObserver(ref2, { threshold: 0 }, true),
  ];

  return (
    <section className="section hobby">
      <header
        style={{
          opacity: isVisibleTwo ? "1" : "0",
          transform: isVisibleTwo
            ? "translate(-50%, -6rem)"
            : "translate(-50%, 0rem)",
        }}
      >
        <div
          className="hobby__title-animation"
          style={{
            transform: `translateX(clamp(0%, ${-isVisibleOne / 4}%, 100%)`,
          }}
        ></div>
        <h3>
          I have lot of <span>hobbies</span>.
        </h3>
      </header>

      <div className="block-100vh" ref={ref1}></div>
      <div ref={ref2}>
        <div className="block-100vh"></div>
        <ChildComp items={["Desinging", "Painting"]} />
        <ChildComp items={["Editing videos", "Editing photos"]} />
        <ChildComp items={["Playing ping-pong", "Playing teenis"]} />
        <ChildComp items={["Playing video games", "Learning new things"]} />
        <ChildComp items={["Learning histories", "Learning cultures"]} />
        <ChildComp items={["Hiking", "Communicating"]} />
        <ChildComp items={["and Coding :)"]} />
      </div>
    </section>
  );
}
