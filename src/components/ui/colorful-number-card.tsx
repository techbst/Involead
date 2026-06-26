"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type ColorfulNumberCardItem = {
    value: string;
    label: string;
    body: string;
    icon?: LucideIcon;
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
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
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
                return (

                    <motion.article
                        key={item.label}
                        variants={fadeUp}
                        className={cn(
                            "rounded-[1.75rem] border border-white/10 p-6 shadow-1xl",
                            cardColors[index % cardColors.length]
                        )}
                    >
                        <div className="flex items-start justify-between gap-5">
                        <h3 className="text-3xl font-bold tracking-[-0.04em]">
                            {item.value}
                        </h3>

                        {Icon && (
                            <motion.div
                                whileHover={{ rotate: -35, scale: 1.08 }}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0e1a16] text-white shadow-lg"
                            >
                                <Icon size={15} />
                            </motion.div>
                        )}
                        </div>
                        <div className="my-5 h-px bg-current/10" />

                        <h4 className="mb-2 text-lg font-semibold">
                            {item.label}
                        </h4>

                        <p className="">
                            {item.body}
                        </p>
                    </motion.article>
                );
            })}
        </motion.div>
    );
}