"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ContrastCardProps {
  children: React.ReactNode
  className?: string
}

export default function ContrastCard({ children, className }: ContrastCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative overflow-hidden rounded-2xl shadow-xl",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-50/50 before:to-transparent before:opacity-50",
        "hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300",
        "border border-slate-200/50",
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
