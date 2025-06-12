"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import RadiantCard from "@/components/radiant-card"
import { ArrowRight, CheckCircle, Users, BarChart2, MessageSquare, Sparkles, Star, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 text-white overflow-hidden relative">
      <Navbar />

      {/* Enhanced Sparkly Background - No 3D */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Multiple Glowing Overlays for Maximum Sparkle */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/3 right-1/6 w-56 h-56 bg-indigo-500/6 rounded-full blur-3xl animate-pulse delay-4000"></div>

        {/* Floating sparkles */}
        <div className="absolute top-20 left-20 animate-bounce delay-1000">
          <Sparkles className="h-6 w-6 text-cyan-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-2000">
          <Star className="h-4 w-4 text-blue-400 opacity-70" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce delay-500">
          <Zap className="h-5 w-5 text-teal-400 opacity-50" />
        </div>
        <div className="absolute top-60 left-1/2 animate-bounce delay-3000">
          <Sparkles className="h-3 w-3 text-purple-400 opacity-80" />
        </div>
        <div className="absolute bottom-40 right-1/3 animate-bounce delay-1500">
          <Star className="h-5 w-5 text-indigo-400 opacity-60" />
        </div>
        <div className="absolute top-80 right-20 animate-bounce delay-2500">
          <Zap className="h-4 w-4 text-pink-400 opacity-70" />
        </div>

        {/* Additional sparkly dots */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000 opacity-70"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-2000 opacity-80"></div>
        <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500 opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-1500 opacity-60"></div>
        <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-3000 opacity-70"></div>
        <div className="absolute bottom-1/6 left-1/5 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-2500 opacity-50"></div>
      </div>

      {/* Hero Section - No 3D Animation, More Spacing */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16">
        {/* Enhanced sparkly background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-1500"></div>
        </div>

        <div className="container px-4 md:px-6 z-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center space-y-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="space-y-10"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tight relative">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl relative">
                  The Future of
                  {/* Sparkles around text */}
                  <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-cyan-400 animate-pulse opacity-70" />
                </span>
                <br />
                <span className="font-light bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl relative">
                  Healthcare
                  <Star className="absolute -top-6 left-1/2 h-6 w-6 text-blue-400 animate-pulse delay-1000 opacity-60" />
                </span>
                <br />
                <span className="font-extralight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl relative">
                  Collaboration
                  <Zap className="absolute -bottom-4 -left-4 h-7 w-7 text-purple-400 animate-pulse delay-2000 opacity-80" />
                </span>
              </h1>

              <p className="max-w-3xl mx-auto text-2xl text-slate-200 font-light leading-relaxed drop-shadow-lg">
                Unlock seamless teamwork with innovative project management tools designed specifically for healthcare
                professionals. Experience the next generation of medical collaboration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 hover:from-cyan-400 hover:via-blue-400 hover:to-teal-400 text-white border-0 px-10 py-5 text-xl font-medium rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-cyan-500/60 hover:shadow-cyan-400/80 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Experience the Future
                  <ArrowRight className="ml-3 h-6 w-6" />
                </span>
                {/* Sparkly overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Sparkles className="absolute top-2 right-2 h-4 w-4 text-white/80 animate-pulse" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400/60 text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-white backdrop-blur-md px-10 py-5 text-xl font-medium rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 relative group"
              >
                <span className="relative z-10">Watch Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex items-center justify-center gap-12 text-lg text-slate-300 flex-wrap"
            >
              <div className="flex items-center gap-3 group">
                <CheckCircle className="h-6 w-6 text-cyan-400 drop-shadow-lg group-hover:text-cyan-300 transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">HIPAA Compliant</span>
                <Sparkles className="h-3 w-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center gap-3 group">
                <CheckCircle className="h-6 w-6 text-cyan-400 drop-shadow-lg group-hover:text-cyan-300 transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">Enterprise Security</span>
                <Star className="h-3 w-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center gap-3 group">
                <CheckCircle className="h-6 w-6 text-cyan-400 drop-shadow-lg group-hover:text-cyan-300 transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">24/7 Support</span>
                <Zap className="h-3 w-3 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase with Enhanced Sparkly Cards */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-white via-cyan-50 to-blue-50 text-slate-900 relative overflow-hidden">
        {/* Sparkly background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000 opacity-50"></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-2000 opacity-60"></div>
          <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500 opacity-70"></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-3000 opacity-50"></div>
          <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1500 opacity-60"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-100 via-blue-100 to-teal-100 border-2 border-cyan-200 mb-8 shadow-xl shadow-cyan-500/20 relative">
              <span className="text-lg font-medium text-cyan-700">Our Solutions</span>
              <Sparkles className="h-5 w-5 text-cyan-600 animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Streamline Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Healthcare Workflows
              </span>
            </h2>
            <p className="max-w-4xl mx-auto text-2xl text-slate-600 font-light leading-relaxed">
              Enhance communication, drive efficiency, and empower teams to work smarter, together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Users className="h-10 w-10" />,
                title: "Team Collaboration",
                description:
                  "Connect healthcare teams seamlessly across departments and locations for better patient outcomes.",
                color: "from-cyan-500 to-blue-600",
                glowColor: "cyan",
              },
              {
                icon: <BarChart2 className="h-10 w-10" />,
                title: "Data Analytics",
                description:
                  "Visualize healthcare metrics and gain actionable insights to improve operational efficiency.",
                color: "from-blue-500 to-indigo-600",
                glowColor: "blue",
              },
              {
                icon: <MessageSquare className="h-10 w-10" />,
                title: "Secure Communication",
                description:
                  "HIPAA-compliant messaging and file sharing designed specifically for healthcare professionals.",
                color: "from-teal-500 to-cyan-600",
                glowColor: "teal",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="perspective-1000"
              >
                <RadiantCard className="p-10 h-full relative group" glowColor={feature.glowColor}>
                  <div
                    className={`mb-8 rounded-2xl bg-gradient-to-r ${feature.color} p-5 w-20 h-20 flex items-center justify-center text-white shadow-2xl shadow-${feature.glowColor}-500/60 relative group-hover:shadow-${feature.glowColor}-500/80 transition-all duration-300`}
                  >
                    {feature.icon}
                    <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>

                  {/* Sparkly corner decorations */}
                  <Star className="absolute top-4 right-4 h-4 w-4 text-cyan-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
                  <Zap className="absolute bottom-4 left-4 h-3 w-3 text-blue-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse delay-500" />
                </RadiantCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Innovation Section - No 3D */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 relative overflow-hidden">
        {/* Enhanced Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-teal-500/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 shadow-lg">
                <span className="text-sm font-medium text-cyan-300">Innovation</span>
                <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
              </div>
              <h2 className="text-5xl font-thin tracking-tight">
                <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent drop-shadow-lg">
                  Transforming Healthcare
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                  Through Technology
                </span>
              </h2>
              <p className="text-xl text-slate-200 font-light leading-relaxed">
                At SeeDataMD, we're dedicated to revolutionizing how healthcare teams work together. Our mission is to
                provide intuitive tools that enhance patient care and streamline clinical workflows.
              </p>
              <div className="space-y-6">
                {[
                  "Improving patient outcomes through better team coordination",
                  "Reducing administrative burden on healthcare professionals",
                  "Enabling data-driven decision making in clinical settings",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300"></div>
                    <span className="text-slate-200 group-hover:text-white transition-colors duration-300">{item}</span>
                    <Sparkles className="h-3 w-3 text-cyan-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Large sparkly illustration placeholder */}
              <div className="relative h-[500px] w-full rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-teal-500/10 backdrop-blur-sm border border-cyan-400/20 shadow-2xl shadow-cyan-500/20 overflow-hidden">
                {/* Sparkly background pattern */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000 opacity-70"></div>
                  <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-2000 opacity-80"></div>
                  <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500 opacity-50"></div>
                  <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-3000 opacity-60"></div>
                  <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1500 opacity-70"></div>
                </div>

                {/* Central content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Healthcare Innovation</h3>
                    <p className="text-slate-300 max-w-xs">Connecting teams, improving outcomes, transforming care</p>
                  </div>
                </div>

                {/* Floating sparkle decorations */}
                <Sparkles className="absolute top-6 right-6 h-6 w-6 text-cyan-400 animate-pulse opacity-70" />
                <Star className="absolute bottom-6 left-6 h-5 w-5 text-blue-400 animate-pulse delay-1000 opacity-60" />
                <Zap className="absolute top-1/3 right-1/4 h-4 w-4 text-teal-400 animate-pulse delay-2000 opacity-80" />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials - Radiant Light Section */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 text-slate-900 relative overflow-hidden">
        {/* Sparkly background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000 opacity-40"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-2000 opacity-50"></div>
          <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500 opacity-60"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 mb-6 shadow-lg">
              <span className="text-sm font-medium text-cyan-700">Testimonials</span>
              <Sparkles className="h-4 w-4 text-cyan-600 animate-pulse" />
            </div>
            <h2 className="text-5xl font-thin tracking-tight mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Trusted by Healthcare
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Professionals
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "SeeDataMD has revolutionized how our hospital departments collaborate. Communication is seamless, and patient care has improved significantly.",
                author: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                rating: 5,
              },
              {
                quote:
                  "The analytics tools have given us insights we never had before. We've been able to optimize our workflows and reduce administrative time by 30%.",
                author: "Mark Williams",
                role: "Healthcare Administrator",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <RadiantCard className="p-8 h-full" glowColor="cyan">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-1 shadow-lg"
                      ></div>
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-cyan-500/50">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </RadiantCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section - No 3D */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950">
        {/* Enhanced Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-thin tracking-tight relative">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                Ready to Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
                Healthcare Collaboration?
              </span>
              <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-cyan-400 animate-pulse opacity-60" />
              <Star className="absolute -bottom-4 -left-4 h-6 w-6 text-blue-400 animate-pulse delay-1000 opacity-70" />
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-slate-200 font-light leading-relaxed">
              Join thousands of healthcare professionals who are already experiencing the benefits of SeeDataMD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/60 glow-cyan relative group"
              >
                <span className="relative z-10">Request a Demo</span>
                <Sparkles className="absolute top-1 right-1 h-3 w-3 text-white/80 animate-pulse" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-white backdrop-blur-md px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20 relative group"
              >
                <span className="relative z-10">Contact Sales</span>
                <Star className="absolute top-1 right-1 h-3 w-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
