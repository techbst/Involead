import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    image: string;
    icon: LucideIcon;
    bgColor?: string;
    imageAlt?: string;
    reverse?: boolean;
}

export default function FeatureCard({
    title,
    description,
    image,
    icon: Icon,
    bgColor = "#4AA3BE",
    imageAlt = "feature-image",
    reverse = false,
}: FeatureCardProps) {
    return (
        <div
            className="group w-full rounded-[28px] p-6 md:p-4 bg-[#46a4b9]  hover:bg-white"
        >
            <div
                className={`grid gap-3 justify-between md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""
                    }`}
            >
                {/* Content */}
                <div className="flex h-full flex-col justify-between">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5fb0c2]">
                        <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white group-hover:text-secondary">{title}</h4>

                        <p className="mt-2 max-w-md text-lg leading-8 text-white/90  group-hover:!text-primary">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="overflow-hidden rounded-2xl">
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={500}
                        height={500}
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}