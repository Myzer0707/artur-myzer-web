import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface Props {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  particleColor?: string;
  lineColor?: string;
  mouseRadius?: number;
  speed?: number;
}

export default function ParticleNetwork({
  className = '',
  particleCount = 80,
  connectionDistance = 150,
  particleColor = '0, 105, 145',
  lineColor = '74, 219, 200',
  mouseRadius = 200,
  speed = 0.3,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    function resize() {
      width = canvas!.parentElement?.offsetWidth || window.innerWidth;
      height = canvas!.parentElement?.offsetHeight || window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
    }

    function initParticles() {
      particlesRef.current = [];
      const count = Math.min(particleCount, Math.floor((width * height) / 15000));
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction
        const dmx = mx - p.x;
        const dmy = my - p.y;
        const dm = Math.sqrt(dmx * dmx + dmy * dmy);
        if (dm < mouseRadius) {
          const force = (mouseRadius - dm) / mouseRadius * 0.02;
          p.vx += dmx * force;
          p.vy += dmy * force;
        }

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Mouse connection lines
        if (dm < mouseRadius * 0.8) {
          const alpha = (1 - dm / (mouseRadius * 0.8)) * 0.4;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    }

    resize();
    initParticles();
    animate();

    window.addEventListener('resize', () => { resize(); initParticles(); });
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [particleCount, connectionDistance, particleColor, lineColor, mouseRadius, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'auto' }}
    />
  );
}
