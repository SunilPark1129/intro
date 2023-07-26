import React, { useRef } from "react";
import "./styles/contact.css";
import useObserver from "../hooks/useObserver";
import pic_ready from "../assets/ready.svg";

export default function Contact() {
  const ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null);

  // set if current scroll position reached the targeted position
  const [isVisibleOne, isVisibleTwo, isVisibleThree] = [
    useObserver(ref1, { threshold: 0.5 }, false, false, "top"),
    useObserver(ref2, { threshold: 0.5 }, true),
    useObserver(ref3, { threshold: 0.5 }, true),
  ];

  return (
    <section className="section contact">
      <header
        style={{
          opacity: isVisibleOne < 0 ? "1" : "0",
        }}
      >
        <img
          src={pic_ready}
          alt="ready"
          style={{ opacity: isVisibleTwo || isVisibleThree ? "0" : "1" }}
        />
        <h3
          style={{
            transform:
              isVisibleTwo || isVisibleThree
                ? "translateY(-10rem)"
                : "translateY(0)",
          }}
        >
          {isVisibleTwo || isVisibleThree
            ? "My name is Sunil Park"
            : "Thank You!"}
        </h3>
      </header>
      <div
        className="section__text"
        style={{
          opacity: isVisibleTwo ? "1" : "0",
          pointerEvents: isVisibleTwo ? "auto" : "none",
        }}
      >
        <div>
          <p>If you are interested in working with me</p>
          <p>Contact me at my email</p>
          <a
            href="mailto: sunilpark1129@gamil.com"
            title="email to sunilpark@gmail.com"
          >
            sunilpark1129@gmail.com
          </a>
        </div>
        <div>
          <p>You can also check more about me through</p>
          <div>
            <a
              href="https://github.com/SunilPark1129"
              title="link to Github page"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/sunilpark1129/"
              title="link to LinkedIn page"
              target="__blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="block-100vh" ref={ref1}></div>
      <div className="block-100vh"></div>
      <div className="block-100vh" ref={ref2}></div>
    </section>
  );
}
