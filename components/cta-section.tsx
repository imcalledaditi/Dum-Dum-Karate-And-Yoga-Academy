"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/placeholder.svg?height=600&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Begin Your Martial Arts Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take the first step towards mastering the art of self-discipline, physical fitness, and mental strength.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-navy hover:bg-secondary/90">
                Schedule a Free Trial Class
              </Button>
            </Link>
            <Link href="/schedule">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Class Schedule
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="text-4xl font-bold text-secondary mb-2">01</div>
              <h3 className="text-xl font-bold text-white mb-2">Book a Trial</h3>
              <p className="text-white/80">
                Schedule your complimentary trial class to experience our training environment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="text-4xl font-bold text-secondary mb-2">02</div>
              <h3 className="text-xl font-bold text-white mb-2">Meet Instructors</h3>
              <p className="text-white/80">
                Get personalized guidance from our expert instructors to find the right program.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="text-4xl font-bold text-secondary mb-2">03</div>
              <h3 className="text-xl font-bold text-white mb-2">Begin Training</h3>
              <p className="text-white/80">
                Join our community and start your journey to mastery with a structured curriculum.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

