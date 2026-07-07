import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  animation = "up",
  delay = 0,
  duration = 1000,
  threshold = 0.2,
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, once]);

  const animations = {
    up: "translate-y-12 opacity-0",
    down: "-translate-y-12 opacity-0",
    left: "translate-x-12 opacity-0",
    right: "-translate-x-12 opacity-0",
    scale: "scale-90 opacity-0",
    fade: "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out
        ${isVisible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : animations[animation]}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}