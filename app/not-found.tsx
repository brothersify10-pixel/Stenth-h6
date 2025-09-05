import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-slate-300 mb-8 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-600">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
