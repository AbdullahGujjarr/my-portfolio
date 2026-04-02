import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;

    const CYAN = "#15d1e9";
    const ORANGE = "#fb9718";

    const rings = [
      { rx: 130, ry: 50, angle: 0, speed: 0.012, color: CYAN, width: 2.5 },
      { rx: 155, ry: 60, angle: Math.PI / 3, speed: -0.008, color: ORANGE, width: 2 },
      { rx: 178, ry: 70, angle: Math.PI / 6, speed: 0.006, color: CYAN, width: 1.5 },
    ];

    const dots = Array.from({ length: 16 }, (_, i) => ({
      index: i,
      angle: (i / 16) * Math.PI * 2,
      orbitRx: 145,
      orbitRy: 55,
      speed: 0.008,
      color: i % 2 === 0 ? CYAN : ORANGE,
      r: 3.5,
    }));

    const sparkles = Array.from({ length: 30 }, () => ({
      x: (Math.random() - 0.5) * 380,
      y: (Math.random() - 0.5) * 380,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random(),
      fadeSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      color: Math.random() > 0.5 ? CYAN : ORANGE,
    }));

    const drawEllipse = (rx, ry, tilt, color, lineWidth, alpha = 0.7) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(tilt);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = 12;
      ctx.shadowColor = color;
      ctx.stroke();
      ctx.restore();
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.01;

      const pulseScale = 1 + Math.sin(t * 1.5) * 0.03;

      for (const r of rings) {
        r.angle += r.speed;
        drawEllipse(r.rx * pulseScale, r.ry * pulseScale, r.angle, r.color, r.width);
      }

      for (const d of dots) {
        d.angle += d.speed;
        const rx = d.orbitRx * pulseScale;
        const ry = d.orbitRy * pulseScale;
        const dx = Math.cos(d.angle) * rx;
        const dy = Math.sin(d.angle) * ry;

        ctx.save();
        ctx.translate(cx + dx, cy + dy);
        ctx.beginPath();
        ctx.arc(0, 0, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.globalAlpha = 0.9;
        ctx.shadowBlur = 10;
        ctx.shadowColor = d.color;
        ctx.fill();
        ctx.restore();
      }

      for (const s of sparkles) {
        s.opacity += s.fadeSpeed;
        if (s.opacity > 1 || s.opacity < 0) s.fadeSpeed *= -1;
        ctx.save();
        ctx.translate(cx + s.x, cy + s.y);
        ctx.beginPath();
        ctx.arc(0, 0, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, s.opacity)) * 0.6;
        ctx.shadowBlur = 6;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.restore();
      }

      const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 110);
      glowGrad.addColorStop(0, "rgba(21,209,233,0.05)");
      glowGrad.addColorStop(0.5, "rgba(251,151,24,0.03)");
      glowGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 110, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.globalAlpha = 1;
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={420}
      height={420}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
}
