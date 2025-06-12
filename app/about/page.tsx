import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-sky-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-teal-800">
                About SeeDataMD
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transforming healthcare collaboration through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Founded by Healthcare Professionals for Healthcare Professionals
              </h2>
              <p className="text-gray-600 md:text-lg/relaxed">
                SeeDataMD was founded by a team of physicians and healthcare IT specialists who experienced firsthand
                the challenges of collaboration in modern healthcare settings. Our founders recognized that existing
                tools weren't designed with the unique needs of healthcare teams in mind.
              </p>
              <p className="text-gray-600 md:text-lg/relaxed">
                Since our founding in 2018, we've been dedicated to creating solutions that address the specific
                challenges faced by healthcare professionals, with a focus on improving patient outcomes through better
                team coordination and data-driven insights.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="SeeDataMD team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-teal-50 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">What Drives Us</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values shape everything we do at SeeDataMD.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-teal-100 p-3 w-12 h-12 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Patient-Centered Innovation</h3>
              <p className="text-gray-600">
                We believe that all healthcare technology should ultimately serve to improve patient outcomes and
                experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-teal-100 p-3 w-12 h-12 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security & Privacy</h3>
              <p className="text-gray-600">
                We maintain the highest standards of data security and privacy protection in all our solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-teal-100 p-3 w-12 h-12 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
              <p className="text-gray-600">
                We constantly seek feedback and evolve our solutions to meet the changing needs of healthcare
                professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-teal-100 p-3 w-12 h-12 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We design our tools to be intuitive and accessible for all healthcare team members, regardless of
                technical expertise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-teal-100 p-3 w-12 h-12 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, both within our company and in the solutions we create for
                healthcare professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-teal-100 p-3 w-12 h-12 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                We empower healthcare teams with insights that lead to better clinical and operational decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Meet Our Leadership</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experienced professionals dedicated to transforming healthcare collaboration.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=160&width=160&text=Team+Member+${i}`}
                    alt={`Team Member ${i}`}
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Dr. Jane Smith</h3>
                <p className="text-teal-600">Chief Medical Officer</p>
                <p className="mt-2 text-sm text-gray-500">
                  Former Director of Medical Informatics with 15+ years of clinical experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
