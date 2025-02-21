"use client";

import * as React from "react";

interface ProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

const Progress: React.FC<ProgressProps> = ({
  value,
  className,
  indicatorClassName,
}) => {
  return (
    <div className={`relative w-full bg-gray-200 ${className}`}>
      <div
        className={`absolute top-0 left-0 h-full ${indicatorClassName}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export { Progress };
