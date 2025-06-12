"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ElegantCardProps {
  children: React.ReactNode
  className?: string
}

export default function ElegantCard({ children, className }: ElegantCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-teal-50 before:to-transparent before:opacity-50",
        "hover:border-teal-100 hover:shadow-xl hover:shadow-teal-100/20 transition-all duration-300",
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
