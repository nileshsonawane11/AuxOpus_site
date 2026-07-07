import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  duration = 2000,
  className = "",
}) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const str = String(value);

  // Find the first decimal/integer number
  const match = str.match(/(\d+(\.\d+)?)/);

  const endValue = match ? parseFloat(match[0]) : 0;

  const prefix = match ? str.slice(0, match.index) : "";
  const suffix = match
    ? str.slice(match.index + match[0].length)
    : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);

      setCount(endValue * progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, endValue, duration]);

  // Preserve decimal places
  const decimals = match?.[0].includes(".")
    ? match[0].split(".")[1].length
    : 0;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}