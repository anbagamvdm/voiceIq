"use client";
import { useEffect, useRef } from "react";

export const GlobeAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Globe parameters
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.3;
    let rotation = 0;

    // Grid lines
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(100, 100, 100, 0.3)";
      ctx.lineWidth = 1;

      // Longitude lines
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6 + rotation;
        ctx.beginPath();
        
        for (let j = 0; j <= 100; j++) {
          const lat = (j / 100) * Math.PI - Math.PI / 2;
          const x = centerX + radius * Math.cos(lat) * Math.sin(angle);
          const y = centerY + radius * Math.sin(lat);
          const z = radius * Math.cos(lat) * Math.cos(angle);
          
          if (z > 0) {
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Latitude lines
      for (let i = 0; i < 9; i++) {
        const lat = (i / 8) * Math.PI - Math.PI / 2;
        ctx.beginPath();
        
        for (let j = 0; j <= 100; j++) {
          const lon = (j / 100) * 2 * Math.PI + rotation;
          const x = centerX + radius * Math.cos(lat) * Math.sin(lon);
          const y = centerY + radius * Math.sin(lat);
          const z = radius * Math.cos(lat) * Math.cos(lon);
          
          if (z > 0) {
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    // Dots/particles
    const drawDots = () => {
      ctx.fillStyle = "rgba(150, 150, 150, 0.6)";
      
      for (let i = 0; i < 200; i++) {
        const lat = Math.asin(2 * Math.random() - 1);
        const lon = 2 * Math.PI * Math.random() + rotation;
        
        const x = centerX + radius * Math.cos(lat) * Math.sin(lon);
        const y = centerY + radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.cos(lon);
        
        if (z > 0) {
          const size = Math.max(0.5, 2 * (z / radius));
          ctx.beginPath();
          ctx.arc(x, y, size, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGrid();
      drawDots();
      
      rotation += 0.005;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none opacity-40"
      style={{ background: "transparent" }}
    />
  );
};