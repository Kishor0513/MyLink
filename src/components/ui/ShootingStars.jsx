import React, { useEffect, useState } from "react";

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const id = Math.random();

      // Spawn mostly from top or upper segments of sides
      const edge = Math.random();
      let top, left;

      if (edge < 0.6) { // 60% from top
        top = -5;
        left = Math.random() * 100;
      } else if (edge < 0.8) { // 20% from left side (top half)
        top = Math.random() * 50;
        left = -5;
      } else { // 20% from right side (top half)
        top = Math.random() * 50;
        left = 105;
      }

      // Random properties for organic feel
      const size = 50 + Math.random() * 400; // 50px to 450px
      const thickness = 1 + Math.random() * 3; // 1px to 4px
      const angle = 20 + Math.random() * 140; // 20deg to 160deg (downward)
      const duration = 8 + Math.random() * 15; // 8-23s
      const delay = Math.random() * 2;
      const endScale = 0.3 + Math.random() * 0.7; // 0.3 to 1.0

      setStars((prev) => [
        ...prev,
        { id, top, left, delay, duration, angle, size, thickness, endScale },
      ]);

      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id));
      }, (duration + delay) * 1000);
    };

    // Initial burst
    for (let i = 0; i < 15; i++) createStar();

    const interval = setInterval(() => {
      createStar();
    }, 400); // Higher density

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 50 }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            "--angle": `${star.angle}deg`,
            "--endScale": star.endScale,
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.thickness}px`,
            background: "linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.6) 70%, rgba(255,255,255,1) 100%)",
            boxShadow: `0 0 15px ${star.thickness}px rgba(167, 139, 250, 0.4)`,
            borderRadius: "999px",
            transformOrigin: "left center",
            animation: `shoot ${star.duration}s linear ${star.delay}s forwards`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        @keyframes shoot {
          0% {
            transform: rotate(var(--angle)) translateX(0) scale(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
            transform: rotate(var(--angle)) translateX(0) scale(1);
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: rotate(var(--angle)) translateX(150vw) scale(var(--endScale));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStars;
