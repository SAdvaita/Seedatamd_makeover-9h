"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { ArrowRight, Mail, Sparkles, Star, Zap } from "lucide-react"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col relative overflow-hidden bg-slate-950">
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/12 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
        />

        {/* Floating Sparkles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 z-10">
        <motion.div style={{ y, opacity }} className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="order-2 lg:order-1 perspective-1000"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-900/90 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-cyan-500/30 border border-cyan-400/20 backdrop-blur-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Dark Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl"></div>

                {/* Floating sparkles */}
                <Sparkles className="absolute top-4 right-4 h-6 w-6 text-cyan-300 animate-pulse opacity-70" />
                <Star className="absolute bottom-4 left-4 h-5 w-5 text-blue-300 animate-pulse delay-1000 opacity-60" />

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl"
                >
                  Pioneering the future of Collaboration, Healthcare Education and Productivity
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative z-10 text-lg md:text-xl leading-relaxed mb-8 text-slate-200"
                >
                  Unlock seamless teamwork with innovative project management and collaboration tools designed for
                  healthcare professionals. Streamline workflows, enhance communication, and drive efficiency—empowering
                  teams to work smarter, together.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="relative z-10"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 hover:from-cyan-400 hover:via-blue-400 hover:to-teal-400 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm border border-cyan-400/30 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="order-1 lg:order-2 perspective-1000"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: -5,
                  z: 30,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/40 border-4 border-cyan-400/20 backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 z-10"></div>
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent z-10"></div>
                <Image
                  src="/images/hero-healthcare-team-new.png"
                  alt="Healthcare professionals collaborating in hospital corridor"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover relative z-0"
                  priority
                />
                <Zap className="absolute top-4 right-4 h-6 w-6 text-cyan-400 animate-pulse opacity-80 z-20" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 z-10 border-y border-slate-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/30 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  z: 40,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/30 border-4 border-cyan-400/20 backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 z-10"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent z-10"></div>
                <Image
                  src="/images/mission-meeting-new.png"
                  alt="Healthcare professionals in collaborative meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <Star className="absolute top-4 left-4 h-5 w-5 text-cyan-400 animate-pulse opacity-70 z-20" />
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium shadow-lg border border-cyan-400/30 backdrop-blur-sm"
              >
                Our Mission
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl"
              >
                Empowering Healthcare Professionals Through Innovative Technology
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed"
              >
                Our mission is to drive innovation by creating intuitive digital solutions that enhance collaboration,
                efficiency, and workflow management across industries. Through cutting-edge technology, we empower
                professionals with tools that streamline operations, improve teamwork, and unlock new possibilities for
                growth and success.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 z-10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium shadow-lg border border-cyan-400/30 backdrop-blur-sm"
              >
                Our Vision
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl"
              >
                Transforming Healthcare Collaboration for a Smarter Future
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-slate-200 leading-relaxed"
              >
                Our vision is to be a global leader in developing innovative digital solutions that transform
                collaboration, streamline workflows, and enhance productivity across industries. We strive to create
                intuitive, scalable platforms that empower professionals to work smarter, drive efficiency, and shape
                the future of connected work.
              </motion.p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: -5,
                  z: 40,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/40 border-4 border-cyan-400/20 backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 z-10"></div>
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent z-10"></div>
                <Image
                  src="/images/vision-analytics-new.png"
                  alt="Healthcare professional using analytics on tablet"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <Sparkles className="absolute bottom-4 right-4 h-6 w-6 text-cyan-400 animate-pulse opacity-80 z-20" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOTZZA Product Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900/95 via-purple-950/90 to-slate-900/95 z-10 border-y border-slate-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/20 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* DOTZZA Logo */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  z: 30,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 rounded-3xl p-8 border-4 border-purple-400/20 shadow-2xl shadow-purple-500/20 backdrop-blur-sm relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>
                <div className="text-center relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-3 h-3 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                      />
                    </div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
                    DOTZZA
                  </h3>
                </div>
              </motion.div>

              <div className="text-center space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold text-slate-300 italic"
                >
                  AI-Powered Collaborative Project Management Platform for healthcare stakeholders
                </motion.p>

                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent"
                >
                  Experience the Power of Collaboration and Innovation
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg text-slate-300 leading-relaxed"
                >
                  Dotzza, our flagship product, integrates cutting-edge technology with user-centric design to deliver
                  unparalleled project management experiences tailored for healthcare education and professional use.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  z: 40,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30 border-4 border-purple-400/20 backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 z-10"></div>
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent z-10"></div>
                <Image
                  src="/images/dotzza-innovation-new.png"
                  alt="Future innovations in healthcare technology"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <Star className="absolute top-4 right-4 h-6 w-6 text-purple-400 animate-pulse opacity-80 z-20" />
              </motion.div>

              <div className="text-center space-y-4">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent"
                >
                  Future Innovations
                </motion.h4>

                <motion.h5
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-slate-300"
                >
                  Expanding Horizons in Healthcare Technology
                </motion.h5>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-lg text-slate-300 leading-relaxed"
                >
                  Stay tuned as we expand our product lineup, each designed to further our mission of enhancing
                  healthcare education and collaboration through innovative data solutions.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SeeDataMD Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-emerald-950/80 to-slate-950 z-10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  z: 40,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/40 border-4 border-emerald-400/20 backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 z-10"></div>
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent z-10"></div>
                <Image
                  src="/images/collaboration-puzzle-new.png"
                  alt="Hands assembling puzzle pieces representing collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <Zap className="absolute bottom-4 left-4 h-6 w-6 text-emerald-400 animate-pulse opacity-80 z-20" />
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl"
              >
                Why SeeDataMD?
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent"
              >
                Innovation, Integrity, and Impact
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-slate-200 leading-relaxed"
              >
                At SeeDataMD, we are driven by a commitment to innovation, upheld by the integrity of our data handling,
                and focused on the measurable impact of our products on healthcare education and practice.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:via-emerald-500 hover:to-green-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-emerald-400/30 backdrop-blur-sm relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Sparkles className="absolute top-1 right-1 h-4 w-4 text-white/80 animate-pulse" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
