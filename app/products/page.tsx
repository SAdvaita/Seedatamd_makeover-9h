import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-sky-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-teal-800">
                Our Products
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive solutions designed specifically for healthcare collaboration and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product 1 */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                Team Collaboration
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">SeeDataMD Connect</h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                Our flagship collaboration platform that brings healthcare teams together across departments and
                locations. Designed specifically for clinical workflows, SeeDataMD Connect streamlines communication and
                enhances coordination.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">HIPAA-compliant messaging and file sharing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Integrated task management for clinical teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Real-time updates and notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Seamless integration with EHR systems</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  Request Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="SeeDataMD Connect"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2 */}
      <section className="bg-teal-50 py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="SeeDataMD Analytics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Data Analytics</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">SeeDataMD Analytics</h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                Transform healthcare data into actionable insights with our powerful analytics platform. Visualize
                trends, identify opportunities for improvement, and make data-driven decisions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Customizable dashboards for different roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Predictive analytics for resource planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Performance metrics and benchmarking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Automated reporting and insights</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 3 */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                Healthcare Education
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">SeeDataMD Learn</h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                A comprehensive learning platform designed for healthcare professionals. Keep your team updated with the
                latest medical knowledge, compliance requirements, and best practices.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Personalized learning paths</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Interactive medical simulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Continuing education credit tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Compliance training and certification</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  Request Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="SeeDataMD Learn"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Ready to Transform Your Healthcare Workflow?
              </h2>
              <p className="max-w-[600px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact our team to discuss pricing options tailored to your organization's needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
                View Pricing
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-500">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
