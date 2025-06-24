import Link from "next/link"
import { Dumbbell } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/dashboard" className="flex items-center space-x-2">
        <Dumbbell className="h-6 w-6 text-purple-500" />
        <span className="font-bold inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          FitManager
        </span>
      </Link>
    </div>
  )
}
