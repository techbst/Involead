"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

export type ColorfulNumberCardItem = {
    value: string;
    label: string;
    body: string;
    icon?: LucideIcon;
    hoverable?: boolean;
};

type ColorfulNumberCardProps = {
    items: ColorfulNumberCardItem[];
    className?: string;
};

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
};

const cardColors = [
    "bg-[#e7f5f7] text-[#071a20]",
    "bg-[#eef0fb] text-[#16152e]",
    "bg-[#edf6e8] text-[#10200d]",
    "bg-[#f6efdf] text-[#241b0b]",
];

export default function ColorfulNumberCard({
    items,
    className,
}: ColorfulNumberCardProps) {
    const [flipped, setFlipped] = useState<number | null>(null);
    
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
                show: {
                    transition: {
                        staggerChildren: 0.08,
                    },
                },
            }}
            className={cn(
                "grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mt-12",
                className
            )}
        >
            {items.map((item, index) => {
                const Icon = item.icon;
                const isHoverable = item.hoverable !== false;
                return (

                    <motion.article
                        key={item.label}
                        variants={fadeUp}
                        className={cn(
                            "group relative overflow-hidden rounded-[1.75rem] border border-white/10 p-6 shadow-1xl",
                            cardColors[index % cardColors.length]
                        )}
                        >
                        {isHoverable ? (
                            <>
                                {/* Default Content */}
                                <div className="transition-all duration-300 group-hover:-translate-y-3 group-hover:opacity-0">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-3xl font-bold">{item.value}</h3>

                                    {Icon && (
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0e1a16] text-white">
                                        <Icon size={15} />
                                    </div>
                                    )}
                                </div>

                                <div className="my-5 h-px bg-current/10" />

                                <h4 className="mb-2 text-lg font-semibold">{item.label}</h4>

                                <p className="line-clamp-3">{item.body}</p>
                                </div>

                                {/* Hover Content */}
                                <div className="absolute inset-0 flex translate-y-full flex-col justify-center p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                <h4 className="mb-3 font-bold">{item.label}</h4>
                                <p className="leading-6">{item.body}</p>
                                </div>
                            </>
                            ) : (
                            <>
                                {/* Static card (no hover effect) */}
                                <div>
                                <div className="flex items-start justify-between">
                                    <h3 className="text-3xl font-bold">{item.value}</h3>

                                    {Icon && (
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0e1a16] text-white">
                                        <Icon size={15} />
                                    </div>
                                    )}
                                </div>

                                <div className="my-5 h-px bg-current/10" />

                                <h4 className="mb-2 text-lg font-semibold">{item.label}</h4>

                                <p className="line-clamp-3">{item.body}</p>
                                </div>
                            </>
                            )}
                        </motion.article>
                );
            })}
        </motion.div>
    );
}