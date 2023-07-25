import React, { useEffect, useRef } from "react";
import "./styles/hobby.css";
import useObserver from "../hooks/useObserver";
import thresholdOption from "../fn/thresholdOption";

function ChildComp({ items }) {
  const compRef = useRef(null);
  const option = {
    root: null,
    rootMargin: "100px 0px 100px 0px",
    threshold: 0.5,
  };
  const isVisible = useObserver(compRef, option, true);
  return (
    <article>
      <div className="block-30rem"></div>
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
  const titleRef = useRef(null),
    pageRef = useRef(null),
    childRef = useRef(null);

  const option = {
    root: null,
    rootMargin: "0px",
    threshold: thresholdOption(100),
  };

  const isVisible = [
    useObserver(titleRef, option, false, true),
    useObserver(pageRef, option, false, false, true),
    useObserver(childRef, option, true),
    useObserver(pageRef, option, true),
  ];

  return (
    <section
      className="section hobby"
      ref={pageRef}
      style={{
        opacity: isVisible[3] ? "1" : "0",
      }}
    >
      <header
        style={{
          opacity: isVisible[1].top < -200 ? "1" : "0",
          transform: `translate(-50%, ${isVisible[2] ? "-6rem" : "0rem"})`,
          transition: ".6s transform ease-in-out",
        }}
      >
        <div
          className="hobby__title-animation"
          style={{
            transform: `translateX(${
              isVisible[0] / 10 >= 0 ? 0 : -isVisible[0] / 10
            }%)`,
          }}
        ></div>
        <h3>
          I have lot of <span>hobbies</span>.
        </h3>
      </header>

      <div className="block-100vh"></div>
      <div className="block-100vh" ref={titleRef}></div>
      <div className="block-100vh"></div>
      <div ref={childRef}>
        <ChildComp items={["Desinging", "Painting"]} />
        <ChildComp items={["Editing videos", "Editing photos"]} />
        <ChildComp items={["Playing ping-pong", "Playing teenis"]} />
        <ChildComp items={["Playing video games", "Learning new things"]} />
        <ChildComp items={["Learning histories", "Learning cultures"]} />
        <ChildComp items={["Hiking", "Communicating"]} />
        <ChildComp items={["and Coding :)"]} />
      </div>
      <div className="block-100vh"></div>
    </section>
  );
}
