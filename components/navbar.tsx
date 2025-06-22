"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("up")
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }

      setScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: scrollDirection === "down" ? -100 : 0,
        opacity: scrollDirection === "down" ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
          : "bg-slate-900/80 backdrop-blur-md"
      }`}
    >
      {/* Sparkly background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-teal-500/5 pointer-events-none">
        <div className="absolute top-2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500 opacity-80"></div>
        <div className="absolute bottom-3 left-2/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-1000 opacity-70"></div>
      </div>

      <div className="container flex h-24 items-center justify-between px-6 md:px-8 relative z-10">
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }} className="relative">
            <Image
              src="/images/seedatamd-logo.png"
              alt="SeeDataMD Logo"
              width={200}
              height={55}
              className="h-14 w-auto drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300"
            />
            {/* Glowing aura around logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            {/* Sparkles around logo */}
            <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-cyan-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </Link>

        <nav className="hidden gap-8 md:flex items-center">
          {[
            { name: "About", href: "/about" },
            { name: "Products", href: "/products" },
            { name: "Partners", href: "/partners" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-lg font-medium text-slate-200 hover:text-cyan-300 transition-all duration-300 relative group px-4 py-2 whitespace-nowrap"
              >
                {item.name}
                {/* Glowing underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 group-hover:w-full transition-all duration-500 shadow-lg shadow-cyan-500/50 rounded-full"></span>
                {/* Sparkly glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex gap-6">
          <Button
            variant="ghost"
            className="text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 px-6 py-2 rounded-full backdrop-blur-sm border border-transparent hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Log In
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 hover:from-cyan-400 hover:via-blue-400 hover:to-teal-400 text-white border-0 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 px-8 py-2 relative overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            {/* Sparkly overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Sparkles className="absolute top-1 right-1 h-3 w-3 text-white/80 animate-pulse" />
          </Button>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="block md:hidden text-white p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
          >
            <nav className="flex flex-col space-y-6 p-8">
              {[
                { name: "About", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Partners", href: "/partners" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-xl font-medium text-slate-200 hover:text-cyan-400 transition-colors duration-300 block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-4 pt-6">
                <Button
                  variant="ghost"
                  className="text-slate-200 hover:text-white hover:bg-cyan-500/10 w-full justify-start py-3"
                >
                  Log In
                </Button>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 rounded-full w-full shadow-lg shadow-cyan-500/50 py-3">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
