import { Star } from 'lucide-react'

interface StarsProps {
  rate: number
}

export function Stars({ rate }: StarsProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rate }, (_, index) => index).map((index) => (
        <Star key={index} className="h-4 w-4 text-purple-100" fill="#8381D9" />
      ))}
      {Array.from({ length: 5 - rate }, (_, index) => index).map((index) => (
        <Star key={index} className="h-4 w-4 text-purple-100" />
      ))}
    </div>
  )
}
