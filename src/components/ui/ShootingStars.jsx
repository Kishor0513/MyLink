import React, { useEffect, useState } from "react";

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const id = Math.random();
      const top = Math.random() * 60; // Random starting vertical position (0-60%)
      const left = 50 + Math.random() * 50; // Random starting horizontal position (50-100% - from right side)
      const delay = 0; // No delay for immediate visibility
      const duration = 4 + Math.random() * 4; // Much slower: 4-8s

      setStars((prev) => [...prev, { id, top, left, delay, duration }]);

      // Remove star after animation finishes to keep DOM light
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id));
      }, (duration + delay) * 1000);
    };

    // Create stars immediately and then every 2000ms
    createStar();
    createStar();

    const interval = setInterval(() => {
      createStar();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 20 }}
    >

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: "140px",
            height: "2px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(167,139,250,0.6) 20%, transparent 100%)",
            animationName: "shoot",
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            boxShadow:
              "0 0 10px 1px rgba(167, 139, 250, 0.4)",
            opacity: 1,
            borderRadius: "999px",
            transformOrigin: "left center",
          }}
        />
      ))}
      <style>{`
        @keyframes shoot {
          0% {
            transform: translate(0, 0) rotate(-45deg) scale(1);
            opacity: 1;
          }
          10% {
            opacity: 1;
            transform: translate(-8vw, 8vh) rotate(-45deg) scale(1);
          }
          60% {
            opacity: 0.9;
            transform: translate(-40vw, 40vh) rotate(-45deg) scale(1.1);
          }
          100% {
            transform: translate(-70vw, 70vh) rotate(-45deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStars;
