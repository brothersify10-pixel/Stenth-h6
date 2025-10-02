"use client"

export default function BookingCalendar() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
      <div className="flex items-center gap-2 text-white mb-4">
        <div className="w-5 h-5 text-cyan-400">📅</div>
        <h3 className="text-xl font-semibold">Schedule Your Call</h3>
      </div>

      <div className="w-full h-[600px] rounded-lg overflow-hidden">
        <iframe
          src="https://cal.com/stenth/30min"
          width="100%"
          height="100%"
          frameBorder="0"
          className="rounded-lg"
          title="Schedule a call with STENTH"
          allow="camera; microphone; fullscreen; display-capture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
