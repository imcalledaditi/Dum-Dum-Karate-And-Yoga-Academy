"use client"

import { useState, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useInView } from "framer-motion"
import { MapPin, Clock, User } from "lucide-react"
import { cn } from "@/lib/utils"

// Schedule data
const scheduleData = {
  karate: {
    locations: [
      "All Locations",
      "Matkal Dojo",
      "Kamalapur Sporting & Literally Club",
      "Adarsha Sangha Club",
      "Deshbondhu Sporting Club",
      "Nobokalol Club",
    ],
    schedule: [
      {
        id: "matkal-sunday-1",
        day: "Sunday",
        className: "Karate Training",
        time: "4:00 PM - 6:00 PM",
        location: "Matkal Dojo",
        instructor: "TNK Sensei",
      },
      {
        id: "matkal-sunday-2",
        day: "Sunday",
        className: "Karate Training",
        time: "6:00 PM - 8:00 PM",
        location: "Matkal Dojo",
        instructor: "TNK Sensei",
      },
      {
        id: "matkal-thursday-1",
        day: "Thursday",
        className: "Karate Training",
        time: "4:00 PM - 6:00 PM",
        location: "Matkal Dojo",
        instructor: "TNK Sensei",
      },
      {
        id: "matkal-thursday-2",
        day: "Thursday",
        className: "Karate Training",
        time: "6:00 PM - 8:00 PM",
        location: "Matkal Dojo",
        instructor: "TNK Sensei",
      },
      {
        id: "kamalapur-tuesday",
        day: "Tuesday",
        className: "Karate Training",
        time: "7:00 PM - 8:30 PM",
        location: "Kamalapur Sporting & Literally Club",
        instructor: "Sujata Roy Sensei",
      },
      {
        id: "kamalapur-friday",
        day: "Friday",
        className: "Karate Training",
        time: "7:00 PM - 8:30 PM",
        location: "Kamalapur Sporting & Literally Club",
        instructor: "Sujata Roy Sensei",
      },
      {
        id: "adarsha-monday",
        day: "Monday",
        className: "Karate Training",
        time: "6:30 PM - 8:00 PM",
        location: "Adarsha Sangha Club",
        instructor: "TNK Sensei",
      },
      {
        id: "adarsha-wednesday",
        day: "Wednesday",
        className: "Karate Training",
        time: "6:30 PM - 8:00 PM",
        location: "Adarsha Sangha Club",
        instructor: "TNK Sensei",
      },
      {
        id: "deshbondhu-monday",
        day: "Monday",
        className: "Karate Training",
        time: "6:30 PM - 8:00 PM",
        location: "Deshbondhu Sporting Club",
        instructor: "Susmita Mondal",
      },
      {
        id: "deshbondhu-wednesday",
        day: "Wednesday",
        className: "Karate Training",
        time: "6:30 PM - 8:00 PM",
        location: "Deshbondhu Sporting Club",
        instructor: "Susmita Mondal",
      },
      {
        id: "nobokalol-tuesday",
        day: "Tuesday",
        className: "Karate Training",
        time: "5:00 PM - 8:00 PM",
        location: "Nobokalol Club",
        instructor: "Moni Sarkar Paul",
      },
      {
        id: "nobokalol-thursday",
        day: "Thursday",
        className: "Karate Training",
        time: "5:00 PM - 8:00 PM",
        location: "Nobokalol Club",
        instructor: "Moni Sarkar Paul",
      },
      {
        id: "matkal-monday",
        day: "Monday",
        className: "Karate Training",
        time: "4:30 PM - 6:00 PM",
        location: "Matkal Dojo",
        instructor: "TNK Sensei",
      },
      {
        id: "matkal-wednesday",
        day: "Wednesday",
        className: "Karate Training",
        time: "4:30 PM - 6:00 PM",
        location: "Matkal Dojo",
        instructor: "TNK Sensei",
      },
      {
        id: "matkal-friday",
        day: "Friday",
        className: "Karate Training",
        time: "4:30 PM - 6:00 PM",
        location: "Matkal Dojo",
        instructor: "TNK Sensei",
      },
      {
        id: "matkal-monday-yoga",
        day: "Monday",
        className: "Yoga",
        time: "4:30 PM - 6:00 PM",
        location: "Matkal Dojo",
        instructor: "Rajiv Kumar",
      },
      {
        id: "matkal-wednesday-yoga",
        day: "Wednesday",
        className: "Yoga",
        time: "4:30 PM - 6:00 PM",
        location: "Matkal Dojo",
        instructor: "Rajiv Kumar",
      },
      {
        id: "matkal-friday-yoga",
        day: "Friday",
        className: "Yoga",
        time: "4:30 PM - 6:00 PM",
        location: "Matkal Dojo",
        instructor: "Rajiv Kumar",
      },
    ],
  },
  yoga: {
    locations: ["Zen Yoga Studio"],
    schedule: [
      {
        id: "monday-morning-flow",
        day: "Monday",
        className: "Morning Flow",
        time: "7:00 AM - 8:00 AM",
        location: "Zen Yoga Studio",
        instructor: "Keiko",
        level: "All Levels",
      },
      {
        id: "monday-gentle-yoga",
        day: "Monday",
        className: "Gentle Yoga",
        time: "10:30 AM - 11:30 AM",
        location: "Zen Yoga Studio",
        instructor: "Hana",
        level: "Beginner",
      },
      {
        id: "monday-power-yoga",
        day: "Monday",
        className: "Power Yoga",
        time: "6:00 PM - 7:15 PM",
        location: "Zen Yoga Studio",
        instructor: "Akira",
        level: "Intermediate/Advanced",
      },
      {
        id: "tuesday-yin-yoga",
        day: "Tuesday",
        className: "Yin Yoga",
        time: "9:00 AM - 10:15 AM",
        location: "Zen Yoga Studio",
        instructor: "Hana",
        level: "All Levels",
      },
      {
        id: "tuesday-vinyasa-flow",
        day: "Tuesday",
        className: "Vinyasa Flow",
        time: "5:30 PM - 6:45 PM",
        location: "Zen Yoga Studio",
        instructor: "Keiko",
        level: "Intermediate",
      },
      {
        id: "wednesday-morning-meditation",
        day: "Wednesday",
        className: "Morning Meditation",
        time: "6:30 AM - 7:15 AM",
        location: "Zen Yoga Studio",
        instructor: "Akira",
        level: "All Levels",
      },
      {
        id: "wednesday-prenatal-yoga",
        day: "Wednesday",
        className: "Prenatal Yoga",
        time: "11:00 AM - 12:00 PM",
        location: "Zen Yoga Studio",
        instructor: "Hana",
        level: "All Levels",
      },
      {
        id: "wednesday-hatha-yoga",
        day: "Wednesday",
        className: "Hatha Yoga",
        time: "7:00 PM - 8:15 PM",
        location: "Zen Yoga Studio",
        instructor: "Keiko",
        level: "All Levels",
      },
      {
        id: "thursday-restorative-yoga",
        day: "Thursday",
        className: "Restorative Yoga",
        time: "10:00 AM - 11:15 AM",
        location: "Zen Yoga Studio",
        instructor: "Hana",
        level: "All Levels",
      },
      {
        id: "thursday-ashtanga-yoga",
        day: "Thursday",
        className: "Ashtanga Yoga",
        time: "6:00 PM - 7:30 PM",
        location: "Zen Yoga Studio",
        instructor: "Akira",
        level: "Advanced",
      },
      {
        id: "friday-gentle-flow",
        day: "Friday",
        className: "Gentle Flow",
        time: "9:30 AM - 10:30 AM",
        location: "Zen Yoga Studio",
        instructor: "Hana",
        level: "Beginner",
      },
      {
        id: "friday-happy-hour-yoga",
        day: "Friday",
        className: "Happy Hour Yoga",
        time: "5:30 PM - 6:30 PM",
        location: "Zen Yoga Studio",
        instructor: "Keiko",
        level: "All Levels",
      },
      {
        id: "saturday-weekend-vinyasa",
        day: "Saturday",
        className: "Weekend Vinyasa",
        time: "9:00 AM - 10:15 AM",
        location: "Zen Yoga Studio",
        instructor: "Akira",
        level: "Intermediate",
      },
      {
        id: "saturday-family-yoga",
        day: "Saturday",
        className: "Family Yoga",
        time: "11:30 AM - 12:30 PM",
        location: "Zen Yoga Studio",
        instructor: "Hana",
        level: "All Levels",
      },
      {
        id: "sunday-sunrise-flow",
        day: "Sunday",
        className: "Sunday Sunrise Flow",
        time: "8:00 AM - 9:15 AM",
        location: "Zen Yoga Studio",
        instructor: "Keiko",
        level: "All Levels",
      },
      {
        id: "sunday-deep-stretch",
        day: "Sunday",
        className: "Deep Stretch",
        time: "5:00 PM - 6:15 PM",
        location: "Zen Yoga Studio",
        instructor: "Akira",
        level: "All Levels",
      },
    ],
  },
}

// Days of the week
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState("karate")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Filter schedule based on selected location
  const filteredSchedule =
    activeTab === "karate"
      ? scheduleData.karate.schedule.filter(
          (item) => selectedLocation === "All Locations" || item.location === selectedLocation,
        )
      : scheduleData.yoga.schedule

  // Group schedule by day
  const scheduleByDay = daysOfWeek.map((day) => ({
    day,
    classes: filteredSchedule.filter((item) => item.day === day),
  }))

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Japanese-style decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-0 w-48 h-48 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full text-red">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <div className="absolute bottom-32 right-0 w-64 h-64 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full text-orange">
              <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="40" y="40" width="20" height="20" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">Class Schedule</h1>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Find a class that fits your schedule and skill level. Our academy offers a variety of classes throughout
              the week at different locations.
            </p>
          </div>

          {/* Tabs for Karate and Yoga */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-secondary/20 rounded-full p-1">
              <button
                onClick={() => {
                  setActiveTab("karate")
                  setSelectedLocation("All Locations")
                }}
                className={cn(
                  "px-6 py-2 rounded-full text-lg transition-all duration-300",
                  activeTab === "karate" ? "bg-primary text-white shadow-md" : "text-primary hover:bg-secondary/50",
                )}
              >
                <span className="mr-2">空手</span>
                Karate
              </button>
              <button
                onClick={() => {
                  setActiveTab("yoga")
                  setSelectedLocation("Zen Yoga Studio")
                }}
                className={cn(
                  "px-6 py-2 rounded-full text-lg transition-all duration-300",
                  activeTab === "yoga" ? "bg-primary text-white shadow-md" : "text-primary hover:bg-secondary/50",
                )}
              >
                <span className="mr-2">ヨガ</span>
                Yoga
              </button>
            </div>
          </div>

          {/* Location filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {activeTab === "karate" ? (
              scheduleData.karate.locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                    selectedLocation === location ? "bg-primary text-white shadow-md" : "bg-card hover:bg-secondary/50",
                  )}
                >
                  <MapPin className="h-4 w-4" />
                  {location}
                </button>
              ))
            ) : (
              <div className="bg-card px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                <MapPin className="h-4 w-4 text-orange" />
                <span className="font-medium">Zen Yoga Studio</span>
                <span className="text-sm text-muted-foreground">123 Harmony Way, Peaceful Valley</span>
              </div>
            )}
          </div>

          {/* Level filter for Yoga */}
          {activeTab === "yoga" && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["Beginner", "All Levels", "Intermediate", "Intermediate/Advanced", "Advanced"].map((level) => (
                <span
                  key={level}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm",
                    level === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : level === "All Levels"
                        ? "bg-blue-100 text-blue-800"
                        : level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : level === "Intermediate/Advanced"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-red-100 text-red-800",
                  )}
                >
                  {level}
                </span>
              ))}
            </div>
          )}

          {/* Schedule table */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-7 bg-primary text-white">
              {daysOfWeek.map((day) => (
                <div key={day} className="p-4 text-center font-bold">
                  {day}
                </div>
              ))}
            </div>

            {/* Table body */}
            <div className="grid grid-cols-7">
              {scheduleByDay.map((dayData) => (
                <div key={dayData.day} className="border-r border-border last:border-r-0">
                  {dayData.classes.length > 0 ? (
                    dayData.classes.map((classItem) => (
                      <div
                        key={classItem.id}
                        className="p-4 border-b border-border hover:bg-secondary/10 transition-colors"
                      >
                        <h3 className="font-bold text-primary mb-1">{classItem.className}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                          <Clock className="h-3 w-3" />
                          <span>{classItem.time}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                          <MapPin className="h-3 w-3" />
                          <span>{classItem.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{classItem.instructor}</span>
                        </div>
                        {activeTab === "yoga" && classItem.level && (
                          <span
                            className={cn(
                              "inline-block mt-2 px-2 py-0.5 rounded text-xs",
                              classItem.level === "Beginner"
                                ? "bg-green-100 text-green-800"
                                : classItem.level === "All Levels"
                                  ? "bg-blue-100 text-blue-800"
                                  : classItem.level === "Intermediate"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : classItem.level === "Intermediate/Advanced"
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-red-100 text-red-800",
                            )}
                          >
                            {classItem.level}
                          </span>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="p-8 flex items-center justify-center text-muted-foreground italic">No classes</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-secondary/20 p-6 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-primary mb-3">Important Notes</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  •
                </span>
                <span>New students should arrive 15 minutes before class for registration and orientation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  •
                </span>
                <span>Please wear appropriate attire: Gi for Karate and comfortable clothing for Yoga.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  •
                </span>
                <span>
                  All levels classes are open to beginners, but some prior experience is recommended for intermediate
                  and advanced classes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  •
                </span>
                <span>
                  Schedule may change during holidays or special events. Please check our social media for updates.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

