"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Users, Calendar } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0 bg-black/40"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      />

      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="max-w-3xl">
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-medium text-primary">
              Established 1978
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white font-poppins mb-4 text-shadow"
          >
            Master the Art of <span className="text-secondary">Discipline</span> and{" "}
            <span className="text-secondary">Self-Defense</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-shadow">
            Join Kolkata's premier martial arts academy offering world-class training in Karate, Yoga, and self-defense
            techniques for all ages and skill levels.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Begin Your Martial Arts Journey Today <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={containerVariants} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Expert Instructors", desc: "Learn from certified black belt masters" },
              { icon: Users, title: "All Age Groups", desc: "Classes for children, teens, and adults" },
              { icon: Calendar, title: "Flexible Schedule", desc: "Morning, evening & weekend classes" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              >
                <div className="bg-highlight rounded-full p-2">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

