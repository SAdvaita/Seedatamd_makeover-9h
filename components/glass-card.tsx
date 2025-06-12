"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-50",
        "hover:border-white/20 hover:shadow-cyan-500/10 transition-all duration-300",
        className,
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
