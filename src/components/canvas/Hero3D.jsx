import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleGlobe = () => {
  const pointsRef = useRef();
  const groupRef = useRef();

  // Track click interaction for dynamic flaring
  const clickIntensityRef = useRef(0);

  useEffect(() => {
    const handleGlobalClick = () => {
      clickIntensityRef.current = 1.0;
    };
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  // Programmatically create a beautiful round glow particle texture in memory
  const glowTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.2, "rgba(230, 210, 255, 0.9)");
      gradient.addColorStop(0.5, "rgba(167, 139, 250, 0.3)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Generate particles in a complex pattern
  const particles = useMemo(() => {
    const count = 3500; // optimized slightly for buttery performance
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Create multiple layered spherical distributions
      const layer = Math.floor(Math.random() * 3);
      const baseRadius = 1.6 + layer * 0.45;
      const spread = 0.2;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = baseRadius + (Math.random() - 0.5) * spread;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Dynamic color palette tailored to matching high-end UI design
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // High-end Purple / Violet (Primary)
        color.setHSL(0.74 + Math.random() * 0.04, 0.85, 0.65);
      } else if (colorChoice < 0.75) {
        // Celestial Pink / Magenta (Secondary)
        color.setHSL(0.88 + Math.random() * 0.04, 0.9, 0.7);
      } else {
        // Deep Space Turquoise / Cyber Blue (Accent)
        color.setHSL(0.50 + Math.random() * 0.05, 0.8, 0.65);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Varied particle sizes
      sizes[i] = 0.02 + Math.random() * 0.04;
    }
    return { positions, colors, sizes };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Decay click flaring intensity smoothly over frames
    clickIntensityRef.current *= 0.93;

    // Buttery smooth mouse interactive tilt parallax
    const targetX = state.pointer.x * (0.35 + clickIntensityRef.current * 0.15);
    const targetY = state.pointer.y * (0.35 + clickIntensityRef.current * 0.15);

    if (groupRef.current) {
      // Smooth interpolation for inertia response
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }

    if (pointsRef.current) {
      // Constant slow self-rotation of the globe particles
      pointsRef.current.rotation.y = time * 0.04 + clickIntensityRef.current * 0.25;
      pointsRef.current.rotation.z = Math.sin(time * 0.02) * 0.05;
      
      // Dynamic mathematical wave deformation ("breathing globe")
      const breathingScale = 1.0 + Math.sin(time * 0.6) * 0.025;
      pointsRef.current.scale.set(breathingScale, breathingScale, breathingScale);
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          map={glowTexture}
        />
      </points>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div
      className="absolute inset-0 select-none pointer-events-none"
      style={{ zIndex: 2 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 48 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <ParticleGlobe />
      </Canvas>
    </div>
  );
};

export default Hero3D;