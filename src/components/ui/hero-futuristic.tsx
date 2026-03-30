import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated particle sphere — standard WebGL (works everywhere)
const ParticleSphere = () => {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { geometry, material } = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + (Math.random() - 0.5) * 0.8;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Teal-ish colors matching brand
      colors[i * 3] = 0.1 + Math.random() * 0.1;      // R
      colors[i * 3 + 1] = 0.35 + Math.random() * 0.25; // G
      colors[i * 3 + 2] = 0.4 + Math.random() * 0.2;   // B

      sizes[i] = Math.random() * 3 + 1;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    return { geometry: geo, material: mat };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    // Slow rotation + mouse follow
    meshRef.current.rotation.y = t * 0.15 + mouseRef.current.x * 0.3;
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.2 + mouseRef.current.y * 0.2;

    // Pulse scale
    const scale = 1 + Math.sin(t * 0.5) * 0.05;
    meshRef.current.scale.setScalar(scale);
  });

  return <points ref={meshRef} geometry={geometry} material={material} />;
};

// Orbital ring
const OrbitalRing = ({ radius, speed, color }: { radius: number; speed: number; color: string }) => {
  const ref = useRef<THREE.Line>(null);

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = Math.PI / 3 + Math.sin(t * speed * 0.5) * 0.1;
    ref.current.rotation.y = t * speed;
  });

  return (
    <line ref={ref as any} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.15} />
    </line>
  );
};

// Glow core
const GlowCore = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const scale = 0.8 + Math.sin(t * 0.8) * 0.1;
    ref.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color="#1B6B7D" transparent opacity={0.15} />
    </mesh>
  );
};

const Scene3D = () => (
  <>
    <ParticleSphere />
    <GlowCore />
    <OrbitalRing radius={2.8} speed={0.3} color="#1B6B7D" />
    <OrbitalRing radius={3.2} speed={-0.2} color="#2A8A9E" />
    <OrbitalRing radius={2.5} speed={0.4} color="#145566" />
  </>
);

export const HeroFuturistic = () => {
  const titleLetters = 'JARVIS'.split('');
  const subtitle = 'Artur Myzer Global AI Management System for Your Company';
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleLetters.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleLetters.length]);

  useEffect(() => {
    if (visibleLetters < titleLetters.length) {
      const timeout = setTimeout(() => setVisibleLetters(visibleLetters + 1), 200);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleLetters, titleLetters.length]);

  return (
    <div className="h-svh relative overflow-hidden bg-[#0A0A0F]">
      {/* 3D Canvas — behind text */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A0A0F]/60 via-transparent to-[#0A0A0F]/80 pointer-events-none" />

      {/* Text content */}
      <div className="h-svh uppercase items-center w-full absolute z-20 pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-6xl md:text-8xl xl:text-9xl 2xl:text-[10rem] font-extrabold tracking-[0.15em]">
          <div className="flex space-x-1 lg:space-x-4 overflow-hidden text-white">
            {titleLetters.map((letter, index) => (
              <div
                key={index}
                className={index < visibleLetters ? 'fade-in' : ''}
                style={{
                  animationDelay: `${index * 0.1 + (delays[index] || 0)}s`,
                  opacity: index < visibleLetters ? undefined : 0,
                  textShadow: '0 0 60px rgba(27,107,125,0.4), 0 0 120px rgba(27,107,125,0.2)',
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm md:text-xl xl:text-2xl 2xl:text-3xl mt-6 overflow-hidden text-white/60 font-medium tracking-widest">
          <div
            className={subtitleVisible ? 'fade-in-subtitle' : ''}
            style={{
              animationDelay: `${titleLetters.length * 0.1 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* Scroll button */}
      <a
        href="#protokoly"
        className="explore-btn z-30"
        style={{ animationDelay: '2.2s' }}
      >
        Przewiń w dół
        <span className="explore-arrow">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 12L11 17L16 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </a>
    </div>
  );
};

export default HeroFuturistic;
