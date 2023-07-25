import React, { useState, useEffect } from "react";
import useObserver from "../hooks/useObserver";
import "./styles/process.css";

export default function Process() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // 스크롤 이벤트를 등록하여 스크롤 위치를 업데이트합니다.
  const handleScroll = () => {
    const currentPosition = window.scrollY;
    const maxHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    setScrollPosition(currentPosition);
    setMaxScroll(maxHeight);
  };

  useEffect(() => {
    // 스크롤 이벤트를 추가합니다.
    window.addEventListener("scroll", handleScroll);
    return () => {
      // 컴포넌트가 언마운트 될 때 스크롤 이벤트를 제거합니다.
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 스크롤 위치에 따라 프로그레스 바를 계산합니다.
  const progress = (scrollPosition / maxScroll) * 100;

  return (
    <div className="process">
      <div className="process__bar">
        <div
          className="process__pass"
          style={{
            left: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
