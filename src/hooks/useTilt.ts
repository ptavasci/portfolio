import { useRef, useState, useCallback, MouseEvent } from "react";

export function useTilt(maxTilt: number = 10, scale: number = 1.02) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      const rotateX = yPct * maxTilt * -1;
      const rotateY = xPct * maxTilt;

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: "transform 0.1s ease-out",
      });
    },
    [maxTilt, scale],
  );

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.5s ease-out",
    });
  }, []);

  return { ref, style, onMouseMove, onMouseLeave };
}
