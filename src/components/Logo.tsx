interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-label="PTD Logo"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff5c00" />
          <stop offset="100%" stopColor="#ff8a3d" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#logo-gradient)" />
      <text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="38"
        fontWeight="800"
        fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
        fill="white"
        letterSpacing="-1"
      >
        PTD
      </text>
    </svg>
  );
}
