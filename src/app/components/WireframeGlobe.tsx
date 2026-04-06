import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

export function WireframeGlobe({ size = 420 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const rotationRef = useRef({ x: 0.003, y: 0.005 });
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.4;

    // Generate points on sphere surface
    const numPoints = 120;
    const points: Point[] = [];
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      points.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        vx: 0,
        vy: 0,
        vz: 0,
      });
    }
    pointsRef.current = points;

    let rotX = 0;
    let rotY = 0;

    function project(
      x: number,
      y: number,
      z: number
    ): { px: number; py: number; scale: number } {
      // Rotate around Y axis
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;

      // Rotate around X axis
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y1 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const scale = (r + z2) / (2 * r);
      return {
        px: cx + x1,
        py: cy + y1,
        scale: scale,
      };
    }

    function draw() {
      ctx.clearRect(0, 0, size, size);

      // Draw outer glow ring
      const glowGrad = ctx.createRadialGradient(cx, cy, r * 0.7, cx, cy, r * 1.2);
      glowGrad.addColorStop(0, "rgba(255, 107, 0, 0.0)");
      glowGrad.addColorStop(0.7, "rgba(255, 107, 0, 0.04)");
      glowGrad.addColorStop(1, "rgba(255, 107, 0, 0.0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, size, size);

      const projected = pointsRef.current.map((p) => project(p.x, p.y, p.z));

      // Draw connections
      const connectionDist = r * 0.62;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const avgScale = (projected[i].scale + projected[j].scale) / 2;
            const alpha = (1 - dist / connectionDist) * avgScale * 0.55;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.strokeStyle = `rgba(255, 130, 30, ${alpha})`;
            ctx.lineWidth = 0.5 * avgScale;
            ctx.stroke();
          }
        }
      }

      // Draw points
      projected.forEach((p) => {
        const pointAlpha = p.scale * 0.9;
        const pointSize = p.scale * 2.2;

        // Glow
        const grad = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, pointSize * 3);
        grad.addColorStop(0, `rgba(255, 140, 40, ${pointAlpha * 0.6})`);
        grad.addColorStop(1, "rgba(255, 100, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.px, p.py, pointSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Point core
        ctx.beginPath();
        ctx.arc(p.px, p.py, pointSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 180, 80, ${pointAlpha})`;
        ctx.fill();
      });

      // Draw latitude lines
      const latLines = 8;
      for (let i = 1; i < latLines; i++) {
        const phi = (Math.PI * i) / latLines;
        const latR = r * Math.sin(phi);
        const latY = r * Math.cos(phi);
        const steps = 80;
        ctx.beginPath();
        let first = true;
        for (let s = 0; s <= steps; s++) {
          const theta = (2 * Math.PI * s) / steps;
          const px3 = latR * Math.cos(theta);
          const pz3 = latR * Math.sin(theta);
          const { px, py, scale } = project(px3, latY, pz3);
          if (scale < 0.3) { first = true; continue; }
          if (first) { ctx.moveTo(px, py); first = false; }
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = "rgba(255, 107, 0, 0.08)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Draw longitude lines
      const lonLines = 10;
      for (let i = 0; i < lonLines; i++) {
        const theta = (Math.PI * i) / lonLines;
        const steps = 80;
        ctx.beginPath();
        let first = true;
        for (let s = 0; s <= steps; s++) {
          const phi = (Math.PI * s) / steps;
          const px3 = r * Math.sin(phi) * Math.cos(theta);
          const py3 = r * Math.cos(phi);
          const pz3 = r * Math.sin(phi) * Math.sin(theta);
          const { px, py, scale } = project(px3, py3, pz3);
          if (scale < 0.3) { first = true; continue; }
          if (first) { ctx.moveTo(px, py); first = false; }
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = "rgba(255, 107, 0, 0.06)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      rotX += rotationRef.current.x;
      rotY += rotationRef.current.y;
    }

    function animate() {
      draw();
      animRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className="opacity-90"
    />
  );
}
