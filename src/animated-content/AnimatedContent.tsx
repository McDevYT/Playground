import { ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AnimatedContent;
