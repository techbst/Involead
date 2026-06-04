"use client"

import { motion } from 'framer-motion'

export default function AnimatedCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="w-full h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg" />
        </motion.div>
    )
}
