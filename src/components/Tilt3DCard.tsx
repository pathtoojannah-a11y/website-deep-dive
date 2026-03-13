import { useRef, useCallback, ReactNode } from "react";

interface Tilt3DCardProps {
  children: ReactNode;
  className?: string;
}

export default function Tilt3DCard({ children, className = "" }: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const card = cardRef.current;
    const spotlight = spotlightRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

    if (spotlight) {
      spotlight.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(207, 126, 46, 0.1), transparent 60%)`;
      spotlight.style.opacity = "1";
    }
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const spotlight = spotlightRef.current;
    if (!card) return;

    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    if (spotlight) {
      spotlight.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out, box-shadow 0.4s ease",
      }}
    >
      <div
        ref={spotlightRef}
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      {children}
    </div>
  );
}
