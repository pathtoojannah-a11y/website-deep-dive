interface WaveDividerProps {
  position: "top" | "bottom";
  fillColor?: string;
}

export default function WaveDivider({ position, fillColor = "hsl(220 14% 98%)" }: WaveDividerProps) {
  return (
    <div className={position === "top" ? "section-wave-top" : "section-wave-bottom"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,50 900,10 1200,40 L1200,60 L0,60 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
