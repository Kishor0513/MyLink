import React, { useEffect, useState } from "react";

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const id = Math.random();
      const top = Math.random() * 100; // Random starting vertical position (0-100%)
      const left = Math.random() * 100; // Random starting horizontal position (0-100%)
      const delay = Math.random() * 2; // Random delay
      const duration = 2 + Math.random() * 3; // Random duration between 2-5s

      setStars((prev) => [...prev, { id, top, left, delay, duration }]);

      // Remove star after animation finishes to keep DOM light
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id));
      }, (duration + delay) * 1000);
    };

    // Create a new star every 500ms to 2000ms randomly
    const interval = setInterval(() => {
      if (Math.random() > 0.5) createStar();
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full opacity-0 shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: "3px",
            height: "3px",
            background:
              "linear-gradient(45deg, rgba(255,255,255,1), rgba(167,139,250,0.8))",
            animationName: "shoot",
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            animationTimingFunction: "ease-out",
            boxShadow:
              "0 0 15px 3px rgba(167, 139, 250, 0.6), 0 0 8px 1px rgba(255, 255, 255, 0.8)",
          }}
        />
      ))}
      <style>{`
        @keyframes shoot {
          0% {
            transform: translate(0, 0) rotate(45deg) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translate(-5vw, 5vh) rotate(45deg) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-35vw, 35vh) rotate(45deg) scale(1.2);
          }
          100% {
            transform: translate(-60vw, 60vh) rotate(45deg) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStars;
