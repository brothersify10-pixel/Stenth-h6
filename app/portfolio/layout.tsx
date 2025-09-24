import type React from "react"
import { Suspense } from "react"

export default function PortfolioLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
      {children}
      <Suspense fallback={<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="animate-spin w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"></div>
      </div>}>
        {modal}
      </Suspense>
    </>
  )
}
