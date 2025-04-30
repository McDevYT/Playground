import React, { useRef, useState, useEffect } from "react";

const DraggableBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [mouseMoved, setMouseMoved] = useState(false);

  const getCenter = () => ({
    x: window.innerWidth / 2 - 50,
    y: window.innerHeight / 2 - 50,
  });

  const glideToCenter = () => {
    const target = getCenter();
    const steps = 20;
    let step = 0;

    let current = { ...position };
    const dx = (target.x - current.x) / steps;
    const dy = (target.y - current.y) / steps;

    const interval = setInterval(() => {
      step++;
      current.x += dx;
      current.y += dy;
      setPosition({ ...current });
      if (step >= steps) clearInterval(interval);
    }, 16);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseMoved(false);

    const box = boxRef.current;
    if (box) {
      const rect = box.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
      if (!mouseMoved) setMouseMoved(true);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    glideToCenter(); // Always glide back
  };

  useEffect(() => {
    glideToCenter(); // Initial center
  }, []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  useEffect(() => {
    const handleResize = () => {
      if (!dragging) {
        setPosition(getCenter());
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dragging]);

  return (
    <div
      ref={boxRef}
      onMouseDown={handleMouseDown}
      onClick={() => {
        if (!mouseMoved) {
          alert("Box clicked!");
        }
      }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#3498db",
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "grab",
        userSelect: "none",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        transition: dragging ? "none" : "left 0.1s linear, top 0.1s linear",
      }}
    >
      Drag me!
    </div>
  );
};

export default DraggableBox;
