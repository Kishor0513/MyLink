import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleGlobe = () => {
  const pointsRef = useRef();
  const groupRef = useRef();

  // Generate particles in a complex pattern
  const particles = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Create multiple layered spherical distributions
      const layer = Math.floor(Math.random() * 3);
      const baseRadius = 1.8 + layer * 0.4;
      const spread = 0.3;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = baseRadius + (Math.random() - 0.5) * spread;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Dynamic color palette
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Primary lavender
        color.setHSL(0.72 + Math.random() * 0.05, 0.7, 0.65);
      } else if (colorChoice < 0.66) {
        // Secondary pink
        color.setHSL(0.9 + Math.random() * 0.05, 0.8, 0.7);
      } else {
        // Turquoise accent
        color.setHSL(0.45 + Math.random() * 0.05, 0.6, 0.6);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Varied particle sizes
      sizes[i] = 0.015 + Math.random() * 0.025;
    }
    return { positions, colors, sizes };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (pointsRef.current) {
      // Smooth rotation with slight wobble
      pointsRef.current.rotation.y = time * 0.08;
      pointsRef.current.rotation.x = Math.sin(time * 0.15) * 0.15;
      pointsRef.current.rotation.z = Math.cos(time * 0.1) * 0.05;
    }

    // Subtle pulsing effect
    if (groupRef.current) {
      const scale = 1 + Math.sin(time * 0.5) * 0.02;
      groupRef.current.scale.set(scale, scale, scale);
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
          size={0.025}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Inner glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 1.55, 64]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Outer subtle ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 2.82, 64]} />
        <meshBasicMaterial
          color="#ff9ce6"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div
      className="absolute inset-0 select-none pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <ParticleGlobe />
      </Canvas>
    </div>
  );
};

export default Hero3D;