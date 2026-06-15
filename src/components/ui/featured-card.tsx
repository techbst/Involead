"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import AnimatedNumber from "./animated-number";

export interface FeatureMetric {
    value: string;
    valuecomp: string;
    label: string;
}

export interface FeatureCard {
    title: string;
    description: string;
    metrics?: FeatureMetric[];

    /**
     * Bottom metric panel colors
     */
    metricBg?: string;
    metricTextColor?: string;
}

interface FeatureGridSectionProps {
    title: string;
    description?: string;
    items: FeatureCard[];
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};
const metricVariants = {
    rest: {
        backgroundColor: "#ECECEC",
        color: "#111111",
    },
    hover: {
        backgroundColor: "#111111",
        color: "#ffffff",
    },
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.96,
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.08,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};
export default function FeatureGridSection({
    title,
    description,
    items,
}: FeatureGridSectionProps) {
    return (
        <section className="relative">
            <div className="container">
                {(title || description) && (
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mx-auto mb-16 max-w-4xl text-center"
                    >
                        <h2 className="text-4xl font-semibold tracking-tight lg:text-6xl">
                            {title}
                        </h2>

                        {description && (
                            <p className="mt-5 text-lg text-neutral-600">
                                {description}
                            </p>
                        )}
                    </motion.div>
                )}

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.article
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 22,
                            }}
                            className="group relative overflow-hidden rounded-[20px] border p-5"
                        >
                            {/* Glow */}
                            <motion.div
                                className="absolute inset-0 opacity-0"
                                whileHover={{
                                    opacity: 1,
                                }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
                                <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
                            </motion.div>

                            {/* Animated Border */}
                            <motion.div
                                className="absolute inset-0 rounded-[28px]"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="absolute inset-0 rounded-[28px] border border-cyan-300/40" />
                            </motion.div>

                            {/* Shine */}
                            <motion.div
                                className="pointer-events-none absolute top-0 left-[-120%] h-full w-[40%] rotate-12 bg-white/30 blur-2xl"
                                whileHover={{
                                    left: "140%",
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                            />

                            <div className="relative z-10 flex h-full  flex-col ">
                                {/* Content */}
                                <div className="flex-1">
                                    <motion.h3
                                        className="mb-4 text-[22px] font-medium leading-tight text-[#171717]"
                                        whileHover={{
                                            color: "#0f766e",
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {item.title}
                                    </motion.h3>

                                    <div className="space-y-5 text-[17px] leading-[1.75] text-[#666666]">
                                        {item.description
                                            .split("\n\n")
                                            .map((paragraph, i) => (
                                                <motion.p
                                                    key={i}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 10,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: i * 0.05,
                                                    }}
                                                >
                                                    {paragraph}
                                                </motion.p>
                                            ))}
                                    </div>
                                </div>

                                {/* Metrics */}
                                {item.metrics && item.metrics.length > 0 && (
                                    <motion.div
                                        className="mt-8 rounded-[18px] p-4"
                                        style={{
                                            background: item.metricBg || "#ECECEC",
                                            color: item.metricTextColor || "#111",
                                        }}
                                        whileHover={{
                                            scale: 1.015,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >

                                        <div className="space-y-4">
                                            {[0, 2].map((startIndex) => (
                                                <div
                                                    key={startIndex}
                                                    className="grid grid-cols-2 gap-6"
                                                >
                                                    {item.metrics.slice(startIndex, startIndex + 2).map((metric, i) => (
                                                        <motion.div
                                                            key={startIndex + i}
                                                            initial={{ opacity: 0, y: 12 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                delay: (startIndex + i) * 0.08,
                                                                duration: 0.4,
                                                            }}
                                                            whileHover={{ x: 3 }}
                                                            className={i === 0 ? "text-left" : "text-right"}
                                                        >
                                                            <div
                                                                className={`flex items-center gap-1 font-semibold ${i === 1 ? "justify-end" : ""
                                                                    }`}
                                                            >
                                                                <motion.div whileHover={{ y: -3 }}>
                                                                    <ArrowUp size={16} strokeWidth={2.5} />
                                                                </motion.div>

                                                                <span className="text-[17px] font-semibold">
                                                                    <AnimatedNumber value={metric.value} />
                                                                </span>
                                                            </div>

                                                            <div className="mt-1 text-[12px] opacity-90">
                                                                {metric.label}
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            ))}

                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}