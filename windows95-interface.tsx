"use client"

import { useState } from "react"
import { Window, Button, TaskBar, Desktop, Icon } from "@/components/ui/win95"
import { Calendar } from "@/components/ui/win95-calendar"
import Slideshow from "@/components/ui/win95-slideshow"

export default function Windows95Interface() {
  const [isWindowOpen, setIsWindowOpen] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false)

  const toggleWindow = () => setIsWindowOpen(!isWindowOpen)
  const toggleCalendar = () => setIsCalendarOpen(!isCalendarOpen)
  const toggleSlideshow = () => setIsSlideshowOpen(!isSlideshowOpen)

  return (
    <Desktop className="bg-teal-700 h-screen w-full relative overflow-hidden">
      <div className="grid grid-cols-3 gap-4 p-4">
        <Icon icon="computer" label="My Computer" />
        <Icon icon="file" label="My Documents" />
        <Icon icon="trash" label="Recycle Bin" />
        <div className="cursor-pointer flex flex-col items-center" onClick={toggleCalendar}>
          <Icon icon="calendar" label="Calendar" />
        </div>
        <div className="cursor-pointer flex flex-col items-center" onClick={toggleSlideshow}>
          <Icon icon="presentation" label="Presentation" />
        </div>
      </div>

      {isWindowOpen && (
        <Window title="Welcome" x={50} y={50} width={300} height={200} onClose={toggleWindow}>
          <div className="p-4">
            <p className="mb-4">Welcome to Windows 95!</p>
            <Button onClick={toggleWindow}>Close</Button>
          </div>
        </Window>
      )}

      {isCalendarOpen && (
        <Calendar
          onClose={() => setIsCalendarOpen(false)}
          onSelect={(date) => {
            alert(`Selected date: ${date.toLocaleDateString()}`)
            setIsCalendarOpen(false)
          }}
        />
      )}

      {isSlideshowOpen && <Slideshow />}

      <TaskBar className="absolute bottom-0 left-0 right-0">
        <Button onClick={toggleWindow} className="start-button">
          Start
        </Button>
      </TaskBar>
    </Desktop>
  )
}

