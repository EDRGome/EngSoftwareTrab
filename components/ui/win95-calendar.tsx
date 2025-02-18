"use client"

import { useState } from "react"

interface CalendarProps {
  onClose: () => void
  onSelect: (date: Date) => void
}

export function Calendar({ onClose, onSelect }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const years = Array.from({ length: 100 }, (_, i) => 1950 + i)

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-64 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-800 shadow-lg">
        {/* Title bar */}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between">
          <span>Date</span>
          <button onClick={onClose} className="px-2 hover:bg-red-600 focus:outline-none">
            ×
          </button>
        </div>

        {/* Month/Year selectors */}
        <div className="p-3 flex gap-2">
          <select
            value={currentDate.getMonth()}
            onChange={(e) => {
              const newDate = new Date(currentDate)
              newDate.setMonth(Number.parseInt(e.target.value))
              setCurrentDate(newDate)
            }}
            className="flex-1 px-2 py-1 bg-white border-2 border-gray-800 border-t-white border-l-white"
          >
            {months.map((month, i) => (
              <option key={month} value={i}>
                {month}
              </option>
            ))}
          </select>

          <select
            value={currentDate.getFullYear()}
            onChange={(e) => {
              const newDate = new Date(currentDate)
              newDate.setFullYear(Number.parseInt(e.target.value))
              setCurrentDate(newDate)
            }}
            className="w-20 px-2 py-1 bg-white border-2 border-gray-800 border-t-white border-l-white"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Calendar grid */}
        <div className="px-3">
          <div className="grid grid-cols-7 text-center text-sm mb-1">
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <div key={day} className="font-bold">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 mb-3">
            {blanks.map((i) => (
              <div key={`blank-${i}`} className="h-6" />
            ))}

            {days.map((day) => {
              const isSelected =
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === currentDate.getMonth() &&
                selectedDate.getFullYear() === currentDate.getFullYear()

              return (
                <button
                  key={day}
                  onClick={() => {
                    const newDate = new Date(currentDate)
                    newDate.setDate(day)
                    setSelectedDate(newDate)
                  }}
                  className={`h-6 text-sm flex items-center justify-center
                    ${isSelected ? "bg-[#000080] text-white" : "hover:bg-gray-200"}`}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>

        {/* Buttons */}
        <div className="p-3 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-1 bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 active:border-gray-800 active:border-r-white active:border-b-white"
          >
            Cancel
          </button>
          <button
            onClick={() => onSelect(selectedDate)}
            className="px-4 py-1 bg-[#c0c0c0] border-2 border-white border-r-gray-800 border-b-gray-800 active:border-gray-800 active:border-r-white active:border-b-white"
          >
            Celebrate!
          </button>
        </div>
      </div>
    </div>
  )
}

