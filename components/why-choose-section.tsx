"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-20 bg-gradient-to-b from-accent/30 to-background relative overflow-hidden">
      {/* Japanese pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d03e6c' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Japanese elements */}
      <motion.div
        animate={{
          rotate: [0, 5, 0, -5, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-1/4 w-32 h-32 text-primary"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="currentColor" fillOpacity="0.2" />
          <text x="50" y="60" textAnchor="middle" fontSize="40" fill="currentColor" fillOpacity="0.6">
            空
          </text>
        </svg>
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -5, 0, 5, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute right-0 bottom-1/4 w-40 h-40 text-highlight"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="60" height="60" fill="currentColor" fillOpacity="0.2" />
          <text x="50" y="60" textAnchor="middle" fontSize="40" fill="currentColor" fillOpacity="0.6">
            道
          </text>
        </svg>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute left-1/3 bottom-0 w-24 h-24 text-navy"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" fillOpacity="0.2" />
          <text x="50" y="60" textAnchor="middle" fontSize="30" fill="currentColor" fillOpacity="0.6">
            武
          </text>
        </svg>
      </motion.div>

      {/* Karate Lady Image */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-auto opacity-80 hidden lg:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/karate_lady-D54TyizfhiZMxvJFNH2T3b5KoKGbc7.png"
          alt="Karate Lady"
          width={300}
          height={400}
          className="object-contain"
        />
      </motion.div>

      {/* Yoga Lady Image */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-auto opacity-80 hidden lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yoga_lady-g2EpyQK4tTfcFaF4zwiT76mDk94fIu.png"
          alt="Yoga Lady"
          width={300}
          height={400}
          className="object-contain"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
          )}
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-3xl md:text-4xl font-bold text-primary mb-2 font-poppins inline-flex items-center"
            >
              <span className="mr-3 text-highlight">道場</span> Why Choose Dum Dum Karate & Yoga Academy?
            </motion.h2>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
              }}
              className="w-20 h-1 bg-highlight mx-auto mb-6"
            ></motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-card p-8 rounded-lg shadow-lg relative overflow-hidden"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.02, 1, 1.02, 1],
                  x: [0, 5, 0, -5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 10,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -left-10 w-40 h-40 bg-highlight/10 rounded-full animate-pulse-glow"
              ></motion.div>
              <motion.div
                animate={{
                  rotate: [0, -5, 0, 5, 0],
                  scale: [1, 1.02, 1, 1.02, 1],
                  x: [0, -5, 0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 10,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-highlight/10 rounded-full animate-pulse-glow"
              ></motion.div>
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
                }}
                className="text-lg italic text-muted-foreground leading-relaxed relative z-10"
              >
                "We are the risers. The ones who know that if we want it, we have to go out and get it. We give blood,
                sweat, and sometimes tears. We are sculpted by adversity. We are made from desire and a dream, but we
                leave nothing up to fate. We have the skill, and we have the will. And we will not let ourselves be
                ignored."
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  number: 1,
                  title: "Expert Instruction",
                  description:
                    "Learn from certified black belt instructors with decades of experience in martial arts.",
                  symbol: "師",
                },
                {
                  number: 2,
                  title: "Traditional Values",
                  description: "We emphasize discipline, respect, and perseverance in all our training programs.",
                  symbol: "道",
                },
                {
                  number: 3,
                  title: "Proven Results",
                  description:
                    "Our students consistently excel in competitions and achieve personal growth milestones.",
                  symbol: "勝",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.number}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.3 + i * 0.1,
                      },
                    },
                  }}
                  className="bg-blue/5 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      delay: i * 0.5,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-highlight/10 z-0"
                  />

                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" className="text-highlight" />
                    </svg>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto relative z-10 shadow-lg"
                  >
                    {item.number}
                  </motion.div>

                  <h3 className="font-bold text-primary text-lg mb-2 relative z-10">{item.title}</h3>
                  <p className="text-muted-foreground relative z-10">{item.description}</p>

                  {/* Japanese character with animation */}
                  <motion.div
                    initial={{ opacity: 0.1, scale: 1 }}
                    whileHover={{ opacity: 0.3, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-2 right-2 text-3xl text-primary"
                  >
                    {item.symbol}
                  </motion.div>

                  {/* Animated border on hover */}
                  <motion.div
                    initial={{ opacity: 0, pathLength: 0 }}
                    whileHover={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        width="100%"
                        height="100%"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="text-highlight"
                        strokeDasharray="300"
                        strokeDashoffset="300"
                        style={{
                          strokeDashoffset: "0",
                          transition: "stroke-dashoffset 0.8s ease-in-out",
                        }}
                        rx="8"
                        fill="none"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

