import { cn } from "@/lib/utils";

interface CornerShapeProps {
  className?: string;
  color?: string;
  flip?: boolean;
}

export default function CornerShape({
  className,
  color = "#fff",
  flip = false,
}: CornerShapeProps) {
  return (
    <svg
        className="block w-full h-[72px]"
        viewBox="0 0 220 72"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
      <path
          d="
            M20 0
            H221
            V65
            H185
            C170 65 162 58 154 48
            C146 38 138 28 125 24
            C118 22 110 20 100 20
            H20
            C9 20 0 11 0 0
            Z
          "
        fill={color}
      />
    </svg>
  );
}