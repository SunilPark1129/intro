import React, { useRef } from "react";
import "./styles/contact.css";
import useObserver from "../hooks/useObserver";
import pic_ready from "../assets/ready.svg";

export default function Contact() {
  const ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null);

  const option = {
    rootMatin: "300px 0px 300px 0px",
    treshold: 1,
  };

  const isVisible = [
    useObserver(ref1, option, false, false, true),
    useObserver(ref2, option, true),
    useObserver(ref3, option, true),
  ];

  return (
    <section className="section contact">
      <header
        style={{
          opacity: isVisible[0].top < 0 ? "1" : "0",
        }}
      >
        <img
          src={pic_ready}
          alt="ready"
          style={{ opacity: isVisible[1] || isVisible[2] ? "0" : "1" }}
        />
        <h3
          style={{
            transform:
              isVisible[1] || isVisible[2]
                ? "translateY(-10rem)"
                : "translateY(0)",
          }}
        >
          My name is <span>Sunil Park</span>
        </h3>
      </header>
      <div
        className="section__text"
        style={{
          opacity: isVisible[2] ? "1" : "0",
          pointerEvents: isVisible[2] ? "auto" : "none",
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
      <div className="block-40rem" ref={ref1}></div>
      <div className="block-40rem"></div>
      <div className="block-30rem"></div>
      <div className="block-40rem" ref={ref2}></div>
      <div className="block-40rem" ref={ref3}></div>
    </section>
  );
}
