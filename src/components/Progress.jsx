import React, { useState, useEffect } from "react";
import "./styles/progress.css";

export default function Progress() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // set the current position
  const handleScroll = () => {
    const currentPosition = window.scrollY;
    const maxHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // calculating current position
    setScrollPosition((currentPosition / maxHeight) * 100);
  };

  useEffect(() => {
    // add scroll event
    window.addEventListener("scroll", handleScroll);
    return () => {
      // when the component stops, remove current event
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="progress">
      <div className="progress__bar">
        <div
          className="progress__pass"
          style={{
            left: `${scrollPosition}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
