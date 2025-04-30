import React, { useEffect, useRef } from "react";

const MouseFollower: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1;
      pos.current.y += (target.current.y - pos.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: "rgba(16, 132, 185, 0.8)",
        pointerEvents: "none",
        transform: "translate3d(0, 0, 0)",
        zIndex: 999,

        // 💫 Glow and blur effects
        boxShadow: "0 0 20px 10px rgba(16, 132, 185, 0.8)",
        backdropFilter: "blur(4px)", // works if your site has semi-transparent background
        WebkitBackdropFilter: "blur(4px)",

        // Optional smoothing
        transition: "background-color 0.3s ease, transform 0.1s ease-out",
      }}
    ></div>
  );
};

export default MouseFollower;
