"use client"

import { motion } from "framer-motion"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 32, fontSize: "text-lg" },
    md: { width: 160, height: 42, fontSize: "text-xl" },
    lg: { width: 200, height: 52, fontSize: "text-2xl" },
  }

  const currentSize = sizes[size]

  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Heart/Medical Icon */}
      <motion.svg
        width={currentSize.height}
        height={currentSize.height}
        viewBox="0 0 42 42"
        className="drop-shadow-lg"
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Heart Shape */}
        <motion.path
          d="M21 35c-1.5-1.5-15-10-15-20 0-5.5 4.5-10 10-10 3 0 5 1.5 5 1.5s2-1.5 5-1.5c5.5 0 10 4.5 10 10 0 10-13.5 18.5-15 20z"
          fill="url(#heartGradient)"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Pulse Line */}
        <motion.path
          d="M8 21 L12 21 L14 15 L16 27 L18 9 L20 30 L22 12 L24 24 L26 18 L28 21 L34 21"
          stroke="url(#pulseGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Sparkle Effects */}
        <motion.circle
          cx="32"
          cy="12"
          r="1.5"
          fill="#06b6d4"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.circle
          cx="10"
          cy="30"
          r="1"
          fill="#3b82f6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
        />
      </motion.svg>

      {/* Text Logo */}
      <motion.div
        className="flex flex-col leading-none"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span
          className={`font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent ${currentSize.fontSize}`}
        >
          SeeDataMD
        </span>
        <span className="text-xs text-cyan-500 font-medium tracking-wider">HEALTHCARE INNOVATION</span>
      </motion.div>
    </motion.div>
  )
}
