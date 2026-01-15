import React, { useEffect, useState } from "react";

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const id = Math.random();
      const edge = Math.floor(Math.random() * 3); // 0=top, 1=right, 2=left

      let top, left, direction;
      switch (edge) {
        case 0: // From top
          top = -5;
          left = Math.random() * 100;
          direction = "top";
          break;
        case 1: // From right
          top = Math.random() * 100;
          left = 105;
          direction = "right";
          break;
        case 2: // From left
          top = Math.random() * 100;
          left = -5;
          direction = "left";
          break;
      }

      const delay = 0; // No delay for immediate visibility
      const duration = 16 + Math.random() * 12; // Slower: 16-28s

      setStars((prev) => [
        ...prev,
        { id, top, left, delay, duration, direction },
      ]);

      // Remove star after animation finishes to keep DOM light
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id));
      }, (duration + delay) * 1000);
    };

    // Create stars immediately and then every 2000ms
    createStar();
    createStar();
    createStar();

    const interval = setInterval(() => {
      createStar();
    }, 800);

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
          className="absolute shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: "140px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.6) 80%, rgba(255,255,255,1) 100%)",
            animationName: `shoot${
              star.direction.charAt(0).toUpperCase() + star.direction.slice(1)
            }`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            boxShadow: "0 0 10px 1px rgba(167, 139, 250, 0.4)",
            opacity: 1,
            borderRadius: "999px",
            transformOrigin: "left center",
          }}
        />
      ))}
      <style>{`
        @keyframes shootTop {
          0% {
            transform: translate(0, 0) rotate(45deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(120vw, 120vh) rotate(45deg) scale(0.8);
            opacity: 1;
          }
        }
        
        @keyframes shootRight {
          0% {
            transform: translate(0, 0) rotate(135deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-120vw, 120vh) rotate(135deg) scale(0.8);
            opacity: 1;
          }
        }
        
        @keyframes shootBottom {
          0% {
            transform: translate(0, 0) rotate(225deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-120vw, -120vh) rotate(225deg) scale(0.8);
            opacity: 1;
          }
        }
        
        @keyframes shootLeft {
          0% {
            transform: translate(0, 0) rotate(45deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(120vw, 120vh) rotate(45deg) scale(0.8);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStars;
