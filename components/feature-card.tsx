import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 rounded-full bg-teal-100 p-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}
