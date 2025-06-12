"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Mail, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 border-t border-cyan-500/20">
      {/* Radiant glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/images/seedatamd-logo.png"
                  alt="SeeDataMD Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                />
              </motion.div>
            </Link>
            <p className="text-slate-300 leading-relaxed">
              Pioneering the future of healthcare collaboration, education, and productivity with radiant innovation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-cyan-500/10"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Company",
              links: [
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "News & Press", href: "/news" },
                { name: "Contact Us", href: "/contact" },
              ],
            },
            {
              title: "Products",
              links: [
                { name: "Team Collaboration", href: "/products/collaboration" },
                { name: "Data Analytics", href: "/products/analytics" },
                { name: "Secure Communication", href: "/products/communication" },
                { name: "Healthcare Education", href: "/products/education" },
              ],
            },
            {
              title: "Resources",
              links: [
                { name: "Blog", href: "/resources/blog" },
                { name: "Case Studies", href: "/resources/case-studies" },
                { name: "Webinars", href: "/resources/webinars" },
                { name: "Support", href: "/resources/support" },
              ],
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 shadow-lg shadow-cyan-500/50"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400">© {new Date().getFullYear()} SeeDataMD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
