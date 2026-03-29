"use client";

import { aboutLoaderLines } from "@/lib/siteConfig";
import { useEffect, useRef, useState } from "react";

export function Effects() {
  const [loading, setLoading] = useState(true);
  const [loaderLine, setLoaderLine] = useState(0);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loading) {
      return;
    }
    const id = window.setInterval(() => {
      setLoaderLine((i) => (i + 1) % aboutLoaderLines.length);
    }, 950);
    return () => window.clearInterval(id);
  }, [loading]);

  useEffect(() => {
    const done = () => setLoading(false);
    if (document.readyState === "complete") {
      const timer = window.setTimeout(done, 1200);
      return () => window.clearTimeout(timer);
    }

    window.addEventListener("load", done);
    return () => window.removeEventListener("load", done);
  }, []);

  useEffect(() => {
    const canUseCustomCursor =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canUseCustomCursor) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringScale = 1;
    let dotScale = 1;
    let raf = 0;

    const setTransform = (
      element: HTMLDivElement | null,
      x: number,
      y: number,
      scale: number
    ) => {
      if (!element) {
        return;
      }
      element.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    };

    const onMove = (event: MouseEvent | { clientX: number; clientY: number }) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const interactiveSelector =
      "a, button, .card--hover, .chip, .site-nav__link, [role='button'], summary, input, textarea";

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(interactiveSelector)) {
        ringScale = 1.55;
        dotScale = 1.2;
      }
    };

    const onOut = () => {
      ringScale = 1;
      dotScale = 1;
    };

    const animateCursor = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      setTransform(ringRef.current, ringX, ringY, ringScale);
      setTransform(dotRef.current, dotX, dotY, dotScale);
      setTransform(glowRef.current, mouseX, mouseY, 1);

      raf = window.requestAnimationFrame(animateCursor);
    };

    onMove({ clientX: mouseX, clientY: mouseY });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    window.addEventListener("mousemove", onMove);
    raf = window.requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className={`page-loader${loading ? "" : " page-loader--done"}`}>
        <div className="page-loader__inner">
          <span className="page-loader__logo">MT</span>
          <span className="page-loader__text">Loading portfolio</span>
          <p className="page-loader__hint" key={loaderLine}>
            {aboutLoaderLines[loaderLine]}
          </p>
        </div>
      </div>

      <div ref={glowRef} className="mouse-glow" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
