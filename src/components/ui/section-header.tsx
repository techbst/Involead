interface SectionHeaderProps {
  title: string;
  description?: string;
    textColor?: string;
    descriptionmaxWidth?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  description,
  align = "center",
    textColor,
    descriptionmaxWidth = "3xl",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2 className={`text-4xl font-semibold tracking-tight text-${textColor || "white"} md:text-5xl`}>
        {title}
      </h2>

      {description && (
        <p className={`mx-auto mt-4 max-w-${descriptionmaxWidth} text-lg text-neutral-400`}>
          {description}
        </p>
      )}
    </div>
  );
}