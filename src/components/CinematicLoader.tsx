import { useEffect, useState } from "react";
import Logo from "./Logo";

interface CinematicLoaderProps {
  onFinish?: () => void;
}

export default function CinematicLoader({ onFinish }: CinematicLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Artificial delay to make it feel intentional and "premium"
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for the fade-out animation to finish
      const exitTimer = setTimeout(() => {
        setShouldRender(false);
        onFinish?.();
      }, 700);
      return () => clearTimeout(exitTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Background Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-primary/20 rounded-full blur-[60px] animate-pulse"></div>

        {/* Centered Logo */}
        <div
          className={`relative transition-all duration-1000 transform ${isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        >
          <Logo
            size={80}
            className="shadow-2xl shadow-brand-primary/40 rounded-[18px]"
          />
        </div>

        {/* Minimalist Progress Indicator */}
        <div className="mt-8 w-12 h-[2px] bg-zinc-800 overflow-hidden rounded-full">
          <div className="h-full bg-brand-primary animate-loader-progress"></div>
        </div>
      </div>
    </div>
  );
}
