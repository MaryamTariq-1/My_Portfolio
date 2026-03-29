"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${value}%`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div ref={progressBarRef} className="scroll-progress__bar" />
    </div>
  );
}

