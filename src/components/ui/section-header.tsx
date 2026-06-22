import { cn } from "@/lib/utils";

type SectionHeaderWidth = "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
type SectionHeaderTone = "dark" | "light" | "muted";

interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  maxWidth?: SectionHeaderWidth;
  descriptionWidth?: SectionHeaderWidth;
  tone?: SectionHeaderTone;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
  textColor?: string;
  descriptionmaxWidth?: SectionHeaderWidth;
}

const widthClasses: Record<SectionHeaderWidth, string> = {
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
};

const toneClasses: Record<SectionHeaderTone, { title: string; eyebrow: string; description: string }> = {
  dark: {
    title: "text-slate-950",
    eyebrow: "text-secondary",
    description: "text-slate-600",
  },
  light: {
    title: "text-white",
    eyebrow: "text-white/70",
    description: "text-white/75",
  },
  muted: {
    title: "text-slate-900",
    eyebrow: "text-slate-500",
    description: "text-slate-500",
  },
};

export function SectionHeader({
  title,
  eyebrow,
  description,
  align = "center",
  maxWidth = "3xl",
  descriptionWidth,
  tone = "dark",
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
  textColor,
  descriptionmaxWidth,
}: SectionHeaderProps) {
  const colors = toneClasses[tone];
  const resolvedDescriptionWidth = descriptionWidth ?? descriptionmaxWidth ?? "2xl";

  return (
    <div
      className={cn(
        "mb-0",
        widthClasses[maxWidth],
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-medium capitalize",
             textColor === "black" ? "!text-black" : textColor === "white" ? "!text-white" :colors.title,
            colors.eyebrow,
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-2 capitalize",
          textColor === "black" ? "text-black" : textColor === "white" ? "text-white" : colors.title,
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-3 text-[15px] leading-7 sm:text-lg",
            widthClasses[resolvedDescriptionWidth],
            align === "center" ? "mx-auto" : "",
            textColor === "black" ? "!text-slate-800" : textColor === "white" ? "!text-white/75" : colors.description,
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
