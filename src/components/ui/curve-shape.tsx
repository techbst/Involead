"use client";

export default function SoftCurveShape() {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
      <svg
        className="h-full w-full"
        viewBox="0 0 455 300"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 0C0 45 22 72 64 72H255C292 72 313 90 333 122L365 173C382 196 401 200 455 200V300H0V0Z"
          fill="#edf8fb"
        />
      </svg>
    </div>
  );
}