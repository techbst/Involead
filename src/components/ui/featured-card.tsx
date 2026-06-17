"use client";

import { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { ArrowUp } from "lucide-react";

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
     * Bottom metric panel background/text color.
     * Ignored if `metricImage` is set.
     */
    metricBg?: string;
    metricTextColor?: string;

    /**
     * Optional HD photo used as the metric panel background instead of a
     * solid color. A dark gradient is layered on top automatically so the
     * numbers stay readable.
     */
    metricImage?: string;
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

// Brand gradient used when a card doesn't supply its own metricBg/metricImage.
// Pulled from the accent colors already used elsewhere in this file (the
// hover heading color and the glow blurs) so it reads as one system rather
// than a new color introduced just for this panel.
const DEFAULT_METRIC_GRADIENT = "linear-gradient(135deg, #0f766e 0%, #0e7490 100%)";

/**
 * Splits a metric string like "85%", "$2.4M", "1,240+", "3.5x" into the
 * leading symbol, the numeric value, and the trailing unit, so the number
 * can be tweened on hover while the formatting around it stays intact.
 */
function parseMetricValue(raw: string) {
    const match = raw.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
    if (!match) {
        return { prefix: "", suffix: raw, number: null as number | null, decimals: 0 };
    }
    const [, prefix, numStr, suffix] = match;
    const clean = numStr.replace(/,/g, "");
    const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
    return { prefix, suffix, number: parseFloat(clean), decimals };
}

function formatAnimatedNumber(num: number, decimals: number) {
    return decimals > 0
        ? num.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        })
        : Math.round(num).toLocaleString();
}

/**
 * Renders a metric value and smoothly counts between `idleValue` and
 * `hoverValue` whenever `isHovered` changes, instead of just snapping.
 */
function AnimatedStat({
    idleValue,
    hoverValue,
    isHovered,
}: {
    idleValue: string;
    hoverValue: string;
    isHovered: boolean;
}) {
    const target = isHovered ? hoverValue : idleValue;
    const initialParsed = parseMetricValue(target);
    const motionValue = useMotionValue(initialParsed.number ?? 0);
    const [display, setDisplay] = useState(() =>
        initialParsed.number !== null
            ? formatAnimatedNumber(initialParsed.number, initialParsed.decimals)
            : target
    );

    useEffect(() => {
        const next = parseMetricValue(target);
        if (next.number === null) {
            setDisplay(target);
            return;
        }
        const controls = animate(motionValue, next.number, {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (latest) => setDisplay(formatAnimatedNumber(latest, next.decimals)),
        });
        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target]);

    if (initialParsed.number === null) return <>{target}</>;
    return (
        <>
            {initialParsed.prefix}
            {display}
            {initialParsed.suffix}
        </>
    );
}

function FeatureCardItem({ item, index }: { item: FeatureCard; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const hasMetrics = !!item.metrics && item.metrics.length > 0;
    const [expanded, setExpanded] = useState(false);
    return (
        <motion.article
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: 0, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-[20px] border p-5"
        >
            {/* Glow */}
            <motion.div
                className="absolute inset-0 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
            >
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
            </motion.div>

            {/* Animated Border */}
            <motion.div
                className="absolute inset-0 rounded-[20px]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="absolute inset-0 rounded-[20px] border border-cyan-300/40" />
            </motion.div>

            {/* Shine */}
            <motion.div
                className="pointer-events-none absolute top-0 left-[-120%] h-full w-[40%] rotate-12 bg-white/30 blur-2xl"
                whileHover={{ left: "140%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex h-full flex-col">
                {/* Content */}
                <div className="flex-1">
                    <motion.h3
                        className="mb-4 text-[22px] font-medium leading-tight text-[#171717]"
                        whileHover={{ color: "#0f766e" }}
                        transition={{ duration: 0.25 }}
                    >
                        {item.title}
                    </motion.h3>

                    <div className="text-[17px] leading-[1.75] text-[#666666]">
                        <motion.div
                            animate={{
                                height: expanded ? "auto" : 75,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                            className="overflow-hidden"
                        >
                            {item.description.split("\n\n").map((paragraph, i) => (
                                <p key={i} className="mb-0">
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>

                        {item.description.length > 120 && (
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="mt-0 text-sm font-medium text-teal-600 transition-colors hover:text-teal-700"
                            >
                                {expanded ? "Read Less" : "Read More"}
                            </button>
                        )}
                    </div>
                </div>

                {/* Metrics */}
                {hasMetrics && (
                    <motion.div
                        className="relative mt-3 overflow-hidden rounded-[18px] p-5 transition-all duration-300"
                        animate={{
                            background:
                                isHovered
                                    ? "linear-gradient(135deg, #0f766e 0%, #0e7490 100%)"
                                    : item.metricBg || DEFAULT_METRIC_GRADIENT,
                        }}
                        style={{
                            color: "#ffffff",
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                    >
                        {item.metricImage && (
                            <>
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item.metricImage})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/10" />
                            </>
                        )}

                        <div className="relative space-y-4">
                            {[0, 2].map((startIndex) => (
                                <div key={startIndex} className="grid grid-cols-2 gap-2">
                                    {item.metrics
                                        ?.slice(startIndex, startIndex + 2)
                                        .map((metric, i) => (
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
                                                    <motion.div
                                                        animate={{ y: isHovered ? -3 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ArrowUp size={16} strokeWidth={2.5} />
                                                    </motion.div>

                                                    <span className=" text-[18px] font-semibold tabular-nums">
                                                        <AnimatedStat
                                                            idleValue={metric.valuecomp || metric.value}
                                                            hoverValue={metric.value}
                                                            isHovered={isHovered}
                                                        />
                                                    </span>
                                                </div>

                                                <div className="mt-1 text-[12px] opacity-90 whitespace-nowrap">
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
    );
}

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
                            <p className="mt-5 text-lg text-neutral-600">{description}</p>
                        )}
                    </motion.div>
                )}

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item, index) => (
                        <FeatureCardItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}