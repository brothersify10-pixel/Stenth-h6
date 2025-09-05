"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")

  // Generate next 14 days
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split("T")[0],
          display: date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
        })
      }
    }
    return dates
  }

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      const calUrl = `https://cal.com/aakash-ansh-ai1qcw/30min?date=${selectedDate}&time=${selectedTime.replace(" ", "")}`
      window.open(calUrl, "_blank")
    }
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 space-y-6">
      <div className="flex items-center gap-2 text-white mb-4">
        <Calendar className="w-5 h-5 text-cyan-400" />
        <h3 className="text-xl font-semibold">Select Date & Time</h3>
      </div>

      {/* Date Selection */}
      <div>
        <label className="block text-white font-medium mb-3">Choose a Date</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {generateDates().map((dateObj) => (
            <button
              key={dateObj.date}
              onClick={() => setSelectedDate(dateObj.date)}
              className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                selectedDate === dateObj.date
                  ? "bg-cyan-500 border-cyan-400 text-white"
                  : "bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600/50"
              }`}
            >
              {dateObj.display}
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div>
          <label className="block text-white font-medium mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Choose a Time
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                  selectedTime === time
                    ? "bg-blue-500 border-blue-400 text-white"
                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600/50"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Book Button */}
      {selectedDate && selectedTime && (
        <div className="pt-4 border-t border-slate-600">
          <Button
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 text-lg font-semibold"
          >
            <User className="w-5 h-5 mr-2" />
            Book 30-min Session - {selectedTime} on {new Date(selectedDate).toLocaleDateString()}
          </Button>
          <p className="text-sm text-slate-400 text-center mt-2">You'll be redirected to complete your booking</p>
        </div>
      )}
    </div>
  )
}
