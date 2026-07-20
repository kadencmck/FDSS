export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="FDSS LLC logo"
    >
      {/* Silos */}
      {/* Small left silo */}
      <ellipse cx="28" cy="32" rx="10" ry="4" fill="#2D2A26" />
      <rect x="18" y="32" width="20" height="38" fill="#2D2A26" />
      <ellipse cx="28" cy="70" rx="10" ry="3" fill="#2D2A26" />

      {/* Main center silo */}
      <ellipse cx="52" cy="18" rx="16" ry="6" fill="#B5623B" />
      <rect x="36" y="18" width="32" height="52" fill="#B5623B" />
      <rect x="36" y="42" width="32" height="5" fill="#C9A838" />
      <ellipse cx="52" cy="70" rx="16" ry="4" fill="#B5623B" />

      {/* Small right silo */}
      <ellipse cx="78" cy="28" rx="12" ry="5" fill="#2D2A26" />
      <rect x="66" y="28" width="24" height="42" fill="#2D2A26" />
      <ellipse cx="78" cy="70" rx="12" ry="3" fill="#2D2A26" />

      {/* Railroad tracks */}
      <rect x="5" y="74" width="100" height="3" rx="1" fill="#B5623B" />
      <rect x="5" y="80" width="100" height="3" rx="1" fill="#B5623B" />

      {/* Railroad ties */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <rect
          key={i}
          x={10 + i * 7}
          y="73"
          width="3"
          height="11"
          rx="0.5"
          fill="#8A8680"
        />
      ))}

      {/* Text: FDSS */}
      <text
        x="125"
        y="52"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="900"
        fontSize="46"
        fill="#2D2A26"
        letterSpacing="-1"
      >
        FDSS
      </text>

      {/* Text: LLC */}
      <text
        x="270"
        y="52"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#8A8680"
      >
        LLC
      </text>
    </svg>
  );
}
