
import React from "react";

const LoadingDots: React.FC = () => {
  return (
    <div className="flex space-x-1.5 px-2 py-1">
      <div className="w-2 h-2 rounded-full bg-muted-foreground/70 animate-[pulse-slow_1.5s_infinite_0.0s]"></div>
      <div className="w-2 h-2 rounded-full bg-muted-foreground/70 animate-[pulse-slow_1.5s_infinite_0.2s]"></div>
      <div className="w-2 h-2 rounded-full bg-muted-foreground/70 animate-[pulse-slow_1.5s_infinite_0.4s]"></div>
    </div>
  );
};

export default LoadingDots;
