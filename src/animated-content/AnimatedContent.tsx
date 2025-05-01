import React, { ReactNode, useEffect, useState } from "react";
import "./AnimatedContent.css";

interface AnimatedContentProps {
  children?: ReactNode;
  delay?: number;
  fade?: "fade-in" | "fade-out";
  style?: React.CSSProperties;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  delay = 0,
  fade = "fade-in",
  style,
}) => {
  const [visible, setVisible] = useState(fade === "fade-in" ? false : true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(fade === "fade-in");
    }, delay);

    return () => clearTimeout(timer);
  }, [fade, delay]);

  return (
    <div style={style} className={`fade ${visible ? "show" : ""}`}>
      {children}
    </div>
  );
};

export default AnimatedContent;
