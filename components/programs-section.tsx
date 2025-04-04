"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Update visible count on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    // Set initial value
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const programs = [
    {
      title: "Karate",
      description:
        "Traditional Shotokan Karate training focusing on kihon (basics), kata (forms), and kumite (sparring).",
      image: "/placeholder.svg?height=300&width=400",
      levels: ["Beginner", "Intermediate", "Advanced", "Black Belt"],
      link: "/programs/karate",
    },
    {
      title: "Yoga",
      description:
        "Holistic yoga practice combining asanas, pranayama, and meditation for physical and mental wellbeing.",
      image: "/placeholder.svg?height=300&width=400",
      levels: ["Beginner", "Intermediate", "Advanced", "Therapeutic"],
      link: "/programs/yoga",
    },
    {
      title: "Self-Defense",
      description: "Practical self-defense techniques for real-world situations, building confidence and awareness.",
      image: "/placeholder.svg?height=300&width=400",
      levels: ["Basic", "Intermediate", "Advanced", "Specialized"],
      link: "/programs/self-defense",
    },
    {
      title: "Gym",
      description:
        "Full fitness facility with strength training equipment, cardio machines, and functional training areas.",
      image: "/placeholder.svg?height=300&width=400",
      levels: ["Free for Members", "Personal Training", "Group Workouts", "Specialized Equipment"],
      link: "/programs/gym",
    },
    {
      title: "School Project",
      description: "We are associated with multiple schools to impart martial arts and yoga training to students.",
      image: "/placeholder.svg?height=300&width=400",
      levels: ["Vivekananda School", "St. Xavier's Institution", "Modern High School", "Ramakrishna Mission"],
      link: "/programs/school-project",
    },
    {
      title: "Weapon Training",
      description: "Comprehensive weapons training program for serious students who want to train at a higher level.",
      image: "/placeholder.svg?height=300&width=400",
      levels: ["Cane & Sai", "Bo & Tonfa", "Nunchaku & Kama", "Sword & Arnis"],
      link: "/programs/weapon-training",
    },
  ]

  const maxIndex = Math.ceil(programs.length / visibleCount) - 1

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // Get current visible programs
  const visiblePrograms = programs.slice(currentIndex * visibleCount, currentIndex * visibleCount + visibleCount)

  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 font-poppins">Our Training Programs</h2>
          <div className="w-20 h-1 bg-highlight mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Discover our comprehensive range of martial arts and wellness programs designed for all ages and skill
            levels. Each program is structured to promote physical fitness, mental discipline, and personal growth.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="bg-primary/80 hover:bg-primary text-white rounded-full shadow-lg"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous programs</span>
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="bg-primary/80 hover:bg-primary text-white rounded-full shadow-lg"
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next programs</span>
            </Button>
          </div>

          {/* Programs Cards */}
          <div ref={ref} className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePrograms.map((program, index) => (
                <motion.div
                  key={`${program.title}-${currentIndex}-${index}`}
                  className={cn(
                    "bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-500",
                    "hover:shadow-xl hover:-translate-y-2",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <h3 className="text-white font-bold text-xl p-4 font-poppins">{program.title}</h3>
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <h4 className="font-medium text-primary mb-2">
                        {program.title === "Gym"
                          ? "Offerings:"
                          : program.title === "School Project"
                            ? "Associated Schools:"
                            : program.title === "Weapon Training"
                              ? "Weapons Categories:"
                              : "Levels:"}
                      </h4>
                      <ul className="mb-4">
                        {program.levels.map((level) => (
                          <li key={level} className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 bg-highlight rounded-full"></span>
                            {level}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto">
                        <Link href={program.link}>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md group">
                            Learn More
                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentIndex === index ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

