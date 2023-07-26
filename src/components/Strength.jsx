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

// Strength child components property
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

// Child components
// Each of them has ref and observer
function ChildComp({ item }) {
  const { title, description, src } = item;
  const ref = useRef(null);
  const isVisible = useObserver(ref, { threshold: 0.5 }, true);

  return (
    <article>
      <div className="block-100vh" ref={ref}></div>
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
    ref2 = useRef(null);

  // set if current scroll position reached the targeted position
  const [isVisibleOne, isVisibleTwo] = [
    useObserver(ref1, { threshold: 0.5 }, true),
    useObserver(ref2, { threshold: 0.5 }, true),
  ];

  return (
    <section className="section strength">
      <div className="block-100vh"></div>
      <div className="block-100vh" ref={ref1}></div>
      <header
        style={{
          opacity: isVisibleOne && !isVisibleTwo ? "1" : "0",
        }}
      >
        <h3>Things I can do</h3>
      </header>
      <div ref={ref2}>
        {datas.map((item) => (
          <ChildComp item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
