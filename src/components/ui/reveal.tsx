import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  style?: CSSProperties;
}

export function Reveal({ children, className, delay = 0, direction = "up", style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTranslate = () => {
    switch (direction) {
      case "up": return "translateY(40px)";
      case "down": return "translateY(-40px)";
      case "left": return "translateX(40px)";
      case "right": return "translateX(-40px)";
      default: return "translate(0)";
    }
  };

  return (
    <div
      ref={ref}
      className={cn("will-change-transform will-change-opacity", className)}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : getTranslate(),
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
