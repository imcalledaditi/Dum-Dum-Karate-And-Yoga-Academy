"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, ChevronRight, ChevronLeft, Calendar } from "lucide-react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function FindDojoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const [startIndex, setStartIndex] = useState(0)

  const dojoLocations = [
    {
      name: "Matkal Dojo",
      address: "192, Vivekananda Road, Kolkata - 700065",
      phone: "+91 9830355608",
      hours: "Sunday & Thursday: 4PM-6PM & 6PM-8PM",
      classes: ["Karate"],
    },
    {
      name: "Kamalapur Sporting & Literally Club",
      address: "45 Kamalapur, Kolkata",
      phone: "+91 9830355603",
      hours: "Tuesday & Friday: 7PM-8:30PM",
      classes: ["Karate"],
    },
    {
      name: "Adarsha Sangha Club",
      address: "78 Adarsha Nagar, Kolkata",
      phone: "+91 9830355604",
      hours: "Monday & Wednesday: 6:30PM-8PM",
      classes: ["Karate"],
    },
    {
      name: "Deshbondhu Sporting Club",
      address: "23 Deshbondhu Road, Kolkata",
      phone: "+91 9830355605",
      hours: "Monday & Wednesday: 6:30PM-8PM",
      classes: ["Karate"],
      instructor: "Susmita Mondal",
    },
    {
      name: "Nobokalol Club",
      address: "56 Nobokalol Street, Kolkata",
      phone: "+91 9830355606",
      hours: "Tuesday & Thursday: 5PM-8PM",
      classes: ["Karate"],
      instructor: "Moni Sarkar Paul",
    },
  ]

  const visibleCount = 3 // Number of cards visible at once

  const nextSlide = () => {
    if (focusedIndex === null) {
      // First click: focus on first card
      setFocusedIndex(startIndex)
    } else if (focusedIndex < startIndex + visibleCount - 1) {
      // Focus next card within visible range
      setFocusedIndex(focusedIndex + 1)
    } else if (startIndex + visibleCount < dojoLocations.length) {
      // Shift cards left and focus on the new card
      setStartIndex(startIndex + 1)
      setFocusedIndex(startIndex + visibleCount)
    }
  }

  const prevSlide = () => {
    if (focusedIndex === null) {
      // If nothing is focused, focus on the last visible card
      setFocusedIndex(Math.min(startIndex + visibleCount - 1, dojoLocations.length - 1))
    } else if (focusedIndex > startIndex) {
      // Focus previous card within visible range
      setFocusedIndex(focusedIndex - 1)
    } else if (startIndex > 0) {
      // Shift cards right and focus on the new card
      setStartIndex(startIndex - 1)
      setFocusedIndex(startIndex - 1)
    }
  }

  // Get visible dojos
  const visibleDojos = dojoLocations.slice(startIndex, startIndex + visibleCount)

  return (
    <section className="py-20 bg-pink/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-red/10"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-orange/10"
        />

        {/* Animated Japanese patterns */}
        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-80 h-80"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-red">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M30,30 L70,30 L70,70 L30,70 Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M40,40 L60,40 L60,60 L40,60 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, -3, 0, 3, 0],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/5 w-60 h-60"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-orange">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" fill="none" />
          </svg>
        </motion.div>

        {/* Floating Japanese characters */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 6,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 text-6xl font-bold text-red/10"
        >
          道
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 7,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-1/4 right-1/3 text-6xl font-bold text-orange/10"
        >
          場
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-5xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 font-poppins flex items-center justify-center">
            <span className="mr-3 text-orange">道場</span> Find a Dojo Near You
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We have multiple training locations across Kolkata to make your martial arts journey convenient. Find the
            nearest dojo and start your training today.
          </p>

          {/* Creative Schedule Note - Moved to the right */}
          <motion.div
            className="absolute top-0 right-0 max-w-xs transform rotate-6 z-20 hidden md:block"
            initial={{ opacity: 0, y: -50, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            style={{ right: "40px", top: "-70px", maxWidth: "250px" }}
          >
            <div className="bg-yellow p-5 rounded-lg shadow-lg relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange/20 rounded-full -translate-x-5 -translate-y-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-red/20 rounded-full translate-x-2 translate-y-5"></div>

              <div className="relative">
                <div className="flex items-start gap-3 mb-3">
                  <Calendar className="h-7 w-7 text-red shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">Psst! Looking for class times?</h3>
                    <p className="text-navy/80 text-sm mb-3">
                      Find the perfect training slot that fits your schedule! 🥋⏰
                    </p>
                    <Link href="/schedule">
                      <Button className="bg-red hover:bg-red/90 text-white group w-full text-sm py-1.5 h-auto">
                        Check Schedule
                        <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Tape effect */}
                <div className="absolute -top-2 -right-2 w-16 h-4 bg-yellow/80 shadow-sm transform rotate-45"></div>
              </div>
            </div>
          </motion.div>

          {/* Carousel Navigation */}
          <div className="relative px-16 mt-8">
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-0 left-0">
              <motion.button
                onClick={prevSlide}
                className="bg-red/80 hover:bg-red text-white rounded-full p-4 shadow-lg -ml-6"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous dojo</span>
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="bg-red/80 hover:bg-red text-white rounded-full p-4 shadow-lg -mr-6"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next dojo</span>
              </motion.button>
            </div>

            {/* Dojo Cards Carousel */}
            <div className="overflow-hidden mx-auto max-w-5xl">
              <div className="flex gap-6 justify-center">
                <AnimatePresence>
                  {visibleDojos.map((dojo, index) => {
                    const isCurrentIndex = startIndex + index === focusedIndex
                    return (
                      <motion.div
                        key={`${dojo.name}-${startIndex + index}`}
                        className={cn(
                          "bg-card rounded-lg shadow-lg overflow-hidden transition-all duration-500 w-full max-w-md",
                          isCurrentIndex ? "shadow-xl" : "hover:shadow-xl hover:-translate-y-2",
                        )}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: isCurrentIndex ? 1.05 : 1,
                          transition: {
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.95,
                          transition: { duration: 0.3 },
                        }}
                        layout
                      >
                        <div className="p-6">
                          <div
                            className={cn(
                              "w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-300",
                              isCurrentIndex ? "bg-orange/20 scale-110" : "bg-orange/10 group-hover:animate-pulse-glow",
                            )}
                          >
                            <MapPin
                              className={cn(
                                "h-6 w-6 transition-all duration-300",
                                isCurrentIndex ? "text-red" : "text-orange",
                              )}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-2 text-center">{dojo.name}</h3>

                          <div className="space-y-3 mt-4">
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                              <p className="text-sm text-muted-foreground">{dojo.address}</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <Phone className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                              <p className="text-sm text-muted-foreground">{dojo.phone}</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <Clock className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                              <p className="text-sm text-muted-foreground">{dojo.hours}</p>
                            </div>
                            {dojo.instructor && (
                              <div className="flex items-start gap-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-5 w-5 text-orange shrink-0 mt-0.5"
                                >
                                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <p className="text-sm text-muted-foreground">Instructor: {dojo.instructor}</p>
                              </div>
                            )}
                          </div>

                          <div className="mt-4 pt-4 border-t border-border">
                            <h4 className="font-medium text-primary mb-2 text-sm">Classes Offered:</h4>
                            <div className="flex flex-wrap gap-2">
                              {dojo.classes.map((className) => (
                                <span key={className} className="text-xs bg-yellow/30 text-navy px-2 py-1 rounded-full">
                                  {className}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="bg-primary/5 p-4 border-t border-border">
                          <Link href="/contact">
                            <Button variant="ghost" size="sm" className="w-full group">
                              Schedule a Visit
                              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {dojoLocations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  // Calculate the appropriate start index to make this card visible
                  const newStartIndex = Math.max(0, Math.min(index, dojoLocations.length - visibleCount))
                  setStartIndex(newStartIndex)
                  setFocusedIndex(index)
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  focusedIndex === index
                    ? "bg-red scale-125"
                    : index >= startIndex && index < startIndex + visibleCount
                      ? "bg-red/60"
                      : "bg-red/30 hover:bg-red/50",
                )}
                aria-label={`Go to dojo ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-8">
            <Link href="/dojo">
              <Button size="lg" className="bg-orange text-white hover:bg-orange/90 transition-all duration-300 group">
                View All Locations
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

