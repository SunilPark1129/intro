import React, { useEffect, useRef } from "react";
import "./styles/hobby.css";
import useObserver from "../hooks/useObserver";
import thresholdOption from "../fn/thresholdOption";

function ChildComp({ items }) {
  const compRef = useRef(null);
  const option = {
    threshold: 0.5,
  };

  const isVisible = useObserver(compRef, option, true);
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
  const titleRef = useRef(null),
    pageRef = useRef(null),
    childRef = useRef(null);

  const option = {
    threshold: 0.5,
  };

  const isVisible = [
    useObserver(titleRef, { threshold: 0.5 }, false, true),
    useObserver(pageRef, { threshold: 0.5 }, false, false, true),
    useObserver(childRef, { threshold: 0 }, true),
    useObserver(pageRef, { threshold: 0 }, true),
  ];

  useEffect(() => {
    console.log(isVisible[0]);
  }, [isVisible[0]]);

  return (
    <section className="section hobby" ref={pageRef}>
      <header
        style={{
          opacity: isVisible[3] ? "1" : "0",
          transform: isVisible[2]
            ? "translate(-50%, -6rem)"
            : "translate(-50%, 0rem)",
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

      <div className="block-100vh" ref={titleRef}></div>
      <div ref={childRef}>
        <div className="block-100vh"></div>
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
