// src/components/Animated.jsx
import React, { useEffect, useRef, useState } from "react";

export default function Animated({ children, animation, delay = "0s", threshold = 0.2 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target); // Trigger only once
      }
    }, { threshold });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ animationDelay: delay }}
      className={`${isInView ? `animate-${animation}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
