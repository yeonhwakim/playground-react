import React, { useEffect, useRef } from "react";

import "./index.css";

import useIntersectionObserver from "./useIntersectionObserver";
import { useState } from "react";

function InfiniteScroll() {
  const target = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCount(count + 1);
            console.log("api called" + count);
          }
        });
      },
      { threshold: 1 }
    );
    target && observer.unobserve(target.current);
    observer.observe(target.current);
    return () => {
      target && observer.unobserve(target.current);
    };
  }, [count]);

  return (
    <div className="scorllBox">
      <div className="box"> </div>
      <div ref={target} className="bottom"></div>
    </div>
  );
}

export default InfiniteScroll;
