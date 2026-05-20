import { useMemo } from "react";

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function StarField() {
  const stars = useMemo<Star[]>(() => {
    const items: Star[] = [];
    for (let i = 0; i < 120; i++) {
      items.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Nebula gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(201,160,220,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(201,168,76,0.04) 0%, transparent 50%), radial-gradient(ellipse at 50% 0%, rgba(33,21,82,0.8) 0%, transparent 60%)",
        }}
      />
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-blush"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite ${star.delay}s`,
          }}
        />
      ))}
      {/* A few larger glowing stars */}
      {[
        { left: "15%", top: "12%", color: "#C9A0DC" },
        { left: "78%", top: "8%", color: "#C9A84C" },
        { left: "90%", top: "35%", color: "#C9A0DC" },
        { left: "5%", top: "60%", color: "#C9A84C" },
        { left: "60%", top: "85%", color: "#C9A0DC" },
      ].map((gstar, i) => (
        <div
          key={`gstar-${i}`}
          className="absolute rounded-full"
          style={{
            left: gstar.left,
            top: gstar.top,
            width: "3px",
            height: "3px",
            backgroundColor: gstar.color,
            boxShadow: `0 0 6px 2px ${gstar.color}`,
            animation: `twinkle ${3 + i}s ease-in-out infinite ${i * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}
