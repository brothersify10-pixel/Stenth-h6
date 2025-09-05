import { redirect } from "next/navigation"

export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
  redirect("/")
}

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  return {
    title: "Page Not Found - STENTH",
    description: "The page you are looking for does not exist.",
  }
}
