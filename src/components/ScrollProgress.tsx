"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });

    return () => ctxRef.current?.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-3px z-100 bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-linear-to-r from-primary via-highlight to-primary origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
