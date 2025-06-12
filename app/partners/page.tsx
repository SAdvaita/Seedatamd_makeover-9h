"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { ArrowRight, Users, Globe, Award } from "lucide-react"
import { motion } from "framer-motion"
import RadiantCard from "@/components/radiant-card"

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-white via-cyan-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-white relative overflow-hidden">
        {/* Radiant background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200 shadow-lg shadow-cyan-500/20 mb-4">
              <span className="text-sm font-medium text-cyan-700">Partnership Program</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-thin tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Partner With
              </span>
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent ml-2 drop-shadow-lg">
                SeeDataMD
              </span>
            </h1>
            <p className="max-w-[700px] text-xl text-gray-600 font-light leading-relaxed">
              Join our network of partners to expand your reach and deliver innovative healthcare solutions with radiant
              impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/60 glow-cyan"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 mb-4 shadow-lg">
              <span className="text-sm font-medium text-cyan-700">Partnership Opportunities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                How We Can
              </span>
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent ml-2 drop-shadow-lg">
                Work Together
              </span>
            </h2>
            <p className="max-w-[700px] text-xl text-gray-600 font-light leading-relaxed">
              Explore the different ways to partner with SeeDataMD and grow your business with radiant innovation.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Reseller Partners",
                description:
                  "Expand your product portfolio by reselling SeeDataMD solutions to your healthcare clients. Benefit from competitive margins and comprehensive sales support.",
                color: "from-cyan-500 to-blue-600",
                glowColor: "cyan",
                link: "/partners/reseller",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Technology Partners",
                description:
                  "Integrate your technology with SeeDataMD to create powerful combined solutions. Our API-first approach makes integration seamless and valuable for mutual customers.",
                color: "from-blue-500 to-indigo-600",
                glowColor: "blue",
                link: "/partners/technology",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Referral Partners",
                description:
                  "Earn generous commissions by referring healthcare organizations to SeeDataMD. Our referral program rewards you for connecting us with qualified prospects.",
                color: "from-teal-500 to-cyan-600",
                glowColor: "teal",
                link: "/partners/referral",
              },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <RadiantCard className="p-8 h-full flex flex-col" glowColor={partner.glowColor}>
                  <div
                    className={`mb-6 rounded-2xl bg-gradient-to-r ${partner.color} p-4 w-16 h-16 flex items-center justify-center text-white shadow-2xl shadow-${partner.glowColor}-500/50`}
                  >
                    {partner.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{partner.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{partner.description}</p>
                  <Link
                    href={partner.link}
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </RadiantCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-white relative overflow-hidden">
        {/* Enhanced glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 shadow-lg">
                <span className="text-sm font-medium text-cyan-700">Partner Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-thin tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Why Partner With
                </span>
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent ml-2 drop-shadow-lg">
                  SeeDataMD
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Join our partner ecosystem and gain access to exclusive benefits designed to help you grow your business
                and deliver exceptional value to your clients.
              </p>

              <div className="space-y-6 mt-8">
                {[
                  {
                    title: "Competitive Compensation",
                    description:
                      "Earn industry-leading margins and commissions on all SeeDataMD products and services.",
                  },
                  {
                    title: "Sales and Marketing Support",
                    description:
                      "Access co-branded marketing materials, lead generation programs, and joint marketing opportunities.",
                  },
                  {
                    title: "Technical Resources",
                    description:
                      "Get priority access to our technical team, comprehensive documentation, and integration support.",
                  },
                  {
                    title: "Partner Portal",
                    description:
                      "Manage your partnership through our dedicated portal with deal registration, training resources, and performance tracking.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1 w-6 h-6 flex items-center justify-center text-white shadow-lg shadow-cyan-500/50 flex-shrink-0">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl transform rotate-3 blur-sm"></div>
              <RadiantCard className="p-8 relative z-10" glowColor="cyan">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Partner Success Stories</h3>

                <div className="space-y-8">
                  {[
                    {
                      quote:
                        "Partnering with SeeDataMD has allowed us to offer comprehensive healthcare collaboration solutions to our clients, increasing our average deal size by 40%.",
                      author: "Michael Chen",
                      role: "CEO, HealthTech Solutions",
                    },
                    {
                      quote:
                        "The SeeDataMD partner program provided us with all the resources we needed to successfully integrate their analytics platform with our existing healthcare solutions.",
                      author: "Sarah Johnson",
                      role: "CTO, MedConnect Systems",
                    },
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-cyan-500 pl-4 shadow-lg shadow-cyan-500/10"
                    >
                      <p className="text-gray-600 italic mb-3">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 px-6 py-2 font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/60">
                    Read More Success Stories
                  </Button>
                </div>
              </RadiantCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-50 via-blue-50 to-teal-50 relative overflow-hidden">
        {/* Radiant background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ready to Start Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
                Partnership Journey?
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 font-light leading-relaxed">
              Join our growing network of partners and unlock new opportunities in healthcare innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/50 hover:shadow-cyan-400/60 glow-cyan"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
