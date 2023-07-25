import { useState, useEffect, useMemo } from "react";

export default function useObserver(target, option, auto, bounding, ch) {
  // return if the current node is visible
  const [isVisible, setIsVisible] = useState(false);

  // check if the node is intersecting
  function cb(entries) {
    const [entry] = entries;

    if (ch) {
      setIsVisible({
        top: entry.boundingClientRect.top,
        height: entry.boundingClientRect.height,
      });
      // console.log(entry.boundingClientRect);
    } else if (bounding) {
      setIsVisible(entry.boundingClientRect.top);
    } else if (auto) {
      setIsVisible(entry.isIntersecting);
    } else {
      setIsVisible(entry.intersectionRatio);
    }
  }

  // prevent from unnecessary re-rendering
  const optionMemo = useMemo(() => {
    return option;
  }, [option]);

  useEffect(() => {
    const observer = new IntersectionObserver(cb, optionMemo);
    const currentTarget = target.current;

    // control current node
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [target, optionMemo]);

  return isVisible;
}
