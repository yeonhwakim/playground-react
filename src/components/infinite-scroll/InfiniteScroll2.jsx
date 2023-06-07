import React, { useEffect, useRef } from "react";

import "./index.css";

import { useState } from "react";

function InfiniteScroll() {
  const target = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            setCount(count + 1);
            console.log("api called" + count);
          }
        });
      },
      { threshold: 1 }
    );
    observer.observe(target.current);
    return () => {
      observer.disconnect();
    };
  }, [target, count]);

  return (
    <div className="scorllBox">
      <div className="box"> </div>
      <div ref={target} className="bottom"></div>
    </div>
  );
}

export default InfiniteScroll;
