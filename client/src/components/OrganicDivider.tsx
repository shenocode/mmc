/**
 * Organic wave/blob divider between sections
 * Style: Fluid, organic curves that evoke body movement
 */
interface OrganicDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

export default function OrganicDivider({
  color = "#F5F0E8",
  flip = false,
  className = "",
}: OrganicDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        className={`w-full h-auto ${flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <path
          d="M0,40 C180,80 360,10 540,50 C720,90 900,20 1080,60 C1200,85 1350,40 1440,55 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
