import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarSrc: string
}

export default function TestimonialCard({ quote, author, role, avatarSrc }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-gray-600 italic">"{quote}"</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image src={avatarSrc || "/placeholder.svg"} alt={author} width={48} height={48} className="object-cover" />
          </div>
          <div>
            <p className="font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
