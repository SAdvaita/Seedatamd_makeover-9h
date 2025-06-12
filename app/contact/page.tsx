"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-sky-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-teal-800">Contact Us</h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to answer your questions and help you get started with SeeDataMD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900">Get in Touch</h2>
                <p className="text-gray-600">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              {formSubmitted ? (
                <div className="rounded-lg bg-teal-50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Thank You!</h3>
                  <p className="mt-2 text-gray-600">Your message has been received. We'll get back to you shortly.</p>
                  <Button className="mt-4 bg-teal-600 hover:bg-teal-700" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john.doe@example.com" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="(123) 456-7890" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Your Hospital or Practice" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                    <Select>
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="connect">SeeDataMD Connect</SelectItem>
                        <SelectItem value="analytics">SeeDataMD Analytics</SelectItem>
                        <SelectItem value="learn">SeeDataMD Learn</SelectItem>
                        <SelectItem value="all">All Products</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your needs and how we can help"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-900">Contact Information</h2>
                <p className="text-gray-600">Reach out to us directly using the information below.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-teal-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@seedatamd.com</p>
                    <p className="text-gray-600">support@seedatamd.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-teal-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Office</h3>
                    <p className="text-gray-600">123 Healthcare Avenue</p>
                    <p className="text-gray-600">Suite 200</p>
                    <p className="text-gray-600">Boston, MA 02110</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border overflow-hidden">
                <iframe
                  title="SeeDataMD Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8442639328655!2d-71.06080492346147!3d42.35042747121624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3709c0bdda1d3%3A0x9ae7e4f798bc9e3!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1686612345678!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-teal-50 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about SeeDataMD.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "How secure is SeeDataMD for healthcare data?",
                answer:
                  "SeeDataMD is built with security as a top priority. We are fully HIPAA compliant and use industry-leading encryption standards to protect all data. Our platform undergoes regular security audits and penetration testing to ensure the highest level of protection for sensitive healthcare information.",
              },
              {
                question: "Can SeeDataMD integrate with our existing EHR system?",
                answer:
                  "Yes, SeeDataMD is designed to integrate seamlessly with most major EHR systems. Our team will work with you to ensure a smooth integration process, minimizing disruption to your existing workflows while maximizing the benefits of our collaboration tools.",
              },
              {
                question: "What kind of training and support do you provide?",
                answer:
                  "We offer comprehensive training for all users, including live sessions, on-demand videos, and detailed documentation. Our support team is available 24/7 to assist with any questions or issues that may arise. We also provide dedicated account managers for enterprise clients to ensure ongoing success.",
              },
              {
                question: "How long does implementation typically take?",
                answer:
                  "Implementation timelines vary based on the size of your organization and the specific products you're implementing. Typically, basic setup can be completed in 2-4 weeks, with full implementation and training taking 4-8 weeks. Our team works closely with you to create a customized implementation plan that meets your specific needs and timeline.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border bg-white p-6">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
