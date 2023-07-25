import React, { useRef } from "react";
import "./styles/strength.css";
import pic_learning from "../assets/learning.svg";
import pic_responsive from "../assets/userinterface.svg";
import pic_passionate from "../assets/passionate.svg";
import pic_solving from "../assets/problem-solving.svg";
import pic_userinterafce from "../assets/responsive.svg";
import pic_performance from "../assets/web-performance.svg";
import pic_communication from "../assets/communication.svg";

import useObserver from "../hooks/useObserver";

const datas = [
  {
    title: "Problem Solving",
    description: `I find the problem-solving process enjoyable, and I am not afraid of challenges when it comes to finding new solutions.`,
    src: pic_solving,
  },
  {
    title: "Passionated",
    description:
      "I don't get tired of repetitive tasks, and I approach everything with passion.",
    src: pic_passionate,
  },
  {
    title: "Laerning",
    description:
      "When learning something new, I strive to grasp algorithms as quickly as possible and am always ready to learn.",
    src: pic_learning,
  },
  {
    title: "Responsive Design",
    description:
      "When creating a project, I always pay attention to responsive design, making sure it works well on all devices.",
    src: pic_responsive,
  },
  {
    title: "User Interface",
    description:
      "Styling is something I find fun, and I place a lot of emphasis on understanding UI to improve the quality of websites.",
    src: pic_userinterafce,
  },
  {
    title: "Web Performance",
    description:
      "Optimizing JavaScript sizes for better website performance is a top priority for me.",
    src: pic_performance,
  },
  {
    title: "Communication",
    description:
      "I am the person who is very easy to talk with and can easily adapt to any group.",
    src: pic_communication,
  },
];

function ChildComp({ item }) {
  const { title, description, src } = item;
  const ref = useRef(null);
  const option = {
    root: null,
    rootMargin: "100px 0px 100px 0px",
    threshold: 0.5,
  };

  const isVisible = useObserver(ref, option, true);
  return (
    <article>
      <div className="block-30rem"></div>
      <div className="block-60rem" ref={ref}></div>
      <div
        className="section__text"
        style={{
          transform: isVisible ? "translate(-50%,-50%)" : "translate(-50%,0%)",
          opacity: isVisible ? "1" : "0",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <img src={src} alt={title} />
      </div>
    </article>
  );
}

export default function Strength() {
  const ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null);
  const option = {
    root: null,
    rootMargin: "-140px 0px -140px 0px",
    treshold: 1,
  };

  const isVisible = [
    useObserver(ref1, option, true),
    useObserver(ref2, option, true),
    useObserver(ref3, option, true),
  ];
  return (
    <section className="section strength" ref={ref1}>
      <div className="block-50rem"></div>
      <div className="block-40rem" ref={ref2}></div>
      <div className="block-50rem"></div>
      <header
        style={{
          opacity: isVisible[1] ? "1" : "0",
        }}
      >
        <h3>I'm good at</h3>
      </header>
      <div ref={ref3}>
        {datas.map((item) => (
          <ChildComp item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
