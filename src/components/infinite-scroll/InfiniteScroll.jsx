import React, { useEffect, useRef } from "react";

import "./index.css";

import useIntersectionObserver from "./useIntersectionObserver";

function InfiniteScroll() {
  const target = useRef();
  const [observe, unobserve] = useIntersectionObserver(() => {
    console.log("api called");
  });

  useEffect(() => {
    observe(target.current);
    return () => {
      unobserve(target.current);
    };
  });

  return (
    <div className="scorllBox">
      <div className="box"> </div>
      <div ref={target} className="bottom"></div>
    </div>
  );
}

export default InfiniteScroll;
