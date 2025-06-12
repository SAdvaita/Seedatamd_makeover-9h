"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Sparkles, Star } from "lucide-react"

interface RadiantCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: "cyan" | "blue" | "teal"
}

export default function RadiantCard({ children, className, glowColor = "cyan" }: RadiantCardProps) {
  const glowClasses = {
    cyan: "shadow-cyan-500/30 hover:shadow-cyan-500/60 border-cyan-100/60 hover:border-cyan-200",
    blue: "shadow-blue-500/30 hover:shadow-blue-500/60 border-blue-100/60 hover:border-blue-200",
    teal: "shadow-teal-500/30 hover:shadow-teal-500/60 border-teal-100/60 hover:border-teal-200",
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm border-2 shadow-2xl transition-all duration-500 group",
        glowClasses[glowColor],
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-50/60 before:via-blue-50/40 before:to-teal-50/60 before:opacity-70",
        "hover:before:opacity-90",
        className,
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative z-10">{children}</div>

      {/* Enhanced radiant glow effect */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${glowColor}-500/8 via-${glowColor}-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Sparkly overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 right-4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Floating sparkle icons */}
      <Sparkles className="absolute top-2 right-2 h-3 w-3 text-cyan-400 opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
      <Star className="absolute bottom-2 left-2 h-2 w-2 text-blue-400 opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse delay-1000" />
    </motion.div>
  )
}
