import { ReactNode } from "react";
import { useTilt } from "@/hooks/useTilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 5,
  scale = 1.02,
}: TiltCardProps) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(maxTilt, scale);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ ...style, transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
