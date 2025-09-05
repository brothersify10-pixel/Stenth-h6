export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-cyan-500/30 border-l-cyan-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-pink-500 rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  )
}
