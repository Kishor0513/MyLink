import React, { useMemo } from "react";

const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: inherit; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
};

const NebulaClouds = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Nebula 1 - Purple/Pink */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 animate-pulse"
        style={{
          top: '10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.8) 0%, rgba(139, 92, 246, 0.4) 30%, transparent 70%)',
        }}
      />

      {/* Nebula 2 - Blue/Cyan */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-25"
        style={{
          top: '50%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, rgba(20, 184, 166, 0.3) 30%, transparent 70%)',
          animation: 'nebula-drift 20s ease-in-out infinite alternate',
        }}
      />

      {/* Nebula 3 - Pink/Rose */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
        style={{
          bottom: '10%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.5) 0%, rgba(217, 70, 239, 0.3) 30%, transparent 70%)',
          animation: 'nebula-drift 15s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Nebula 4 - Deep Purple */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[130px] opacity-20"
        style={{
          top: '30%',
          left: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(91, 33, 182, 0.3) 30%, transparent 70%)',
          animation: 'nebula-drift 25s ease-in-out infinite',
        }}
      />

      {/* Small floating nebula */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full blur-[80px] opacity-15"
        style={{
          top: '70%',
          right: '20%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%)',
          animation: 'nebula-float 18s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes nebula-drift {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, 20px) scale(1.1); }
        }
        @keyframes nebula-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
};

const SpaceBackground = () => {
  return (
    <>
      <StarField />
      <NebulaClouds />
    </>
  );
};

export default SpaceBackground;