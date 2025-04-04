"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function YogaOriginPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background pattern - Lotus mandala pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{ backgroundImage: "url('/placeholder.svg?height=200&width=200')", backgroundSize: "200px" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins flex items-center justify-center"
            >
              <span className="mr-3 text-highlight">योग</span>
              The Origin of Yoga
            </motion.h1>
            <motion.div variants={fadeIn} className="w-20 h-1 bg-highlight mx-auto mb-8"></motion.div>

            <motion.div variants={fadeIn} className="relative h-80 w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=1000"
                alt="Ancient yoga practitioners in meditation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <p className="text-white p-4 italic text-lg">
                  "Yoga is the journey of the self, through the self, to the self." - The Bhagavad Gita
                </p>
              </div>
            </motion.div>

            <div ref={ref} className="prose prose-lg max-w-none">
              <motion.div
                animate={controls}
                initial="hidden"
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
                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4">
                  Ancient Beginnings
                </motion.h2>
                <motion.p variants={fadeIn}>
                  Yoga is an ancient practice that originated in India over 5,000 years ago. The word "yoga" comes from
                  the Sanskrit root "yuj," meaning to join or unite, symbolizing the union of body, mind, and spirit.
                </motion.p>

                <motion.div variants={fadeIn} className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-accent/20 p-6 rounded-lg shadow-md relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-highlight/10 rounded-full"></div>
                    <h3 className="text-xl font-bold text-primary mb-2">Pre-Classical Yoga</h3>
                    <p className="text-muted-foreground">
                      Began over 5,000 years ago in Northern India, first mentioned in ancient sacred texts called the
                      Rig Veda.
                    </p>
                  </div>
                  <div className="bg-accent/20 p-6 rounded-lg shadow-md relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-highlight/10 rounded-full"></div>
                    <h3 className="text-xl font-bold text-primary mb-2">Classical Yoga</h3>
                    <p className="text-muted-foreground">
                      Defined by Patanjali's Yoga Sutras (200 CE), outlining the eight-limbed path of yoga.
                    </p>
                  </div>
                  <div className="bg-accent/20 p-6 rounded-lg shadow-md relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-highlight/10 rounded-full"></div>
                    <h3 className="text-xl font-bold text-primary mb-2">Post-Classical Yoga</h3>
                    <p className="text-muted-foreground">
                      Developed several centuries after Patanjali, focusing on the physical body as a path to
                      enlightenment.
                    </p>
                  </div>
                </motion.div>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4">
                  Evolution Through History
                </motion.h2>
                <motion.p variants={fadeIn}>
                  Yoga has evolved significantly over thousands of years, adapting to different cultures and
                  philosophies while maintaining its core essence of unifying body, mind, and spirit.
                </motion.p>

                <motion.div variants={fadeIn} className="my-8 relative">
                  <div className="border-l-4 border-highlight pl-6 py-2 relative">
                    <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-highlight"></div>
                    <h4 className="text-lg font-bold">3000 BCE</h4>
                    <p>Early yoga practices depicted in stone carvings in the Indus Valley</p>
                  </div>
                  <div className="border-l-4 border-highlight pl-6 py-2 relative">
                    <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-highlight"></div>
                    <h4 className="text-lg font-bold">500 BCE</h4>
                    <p>Emergence of Upanishads and the concept of karma yoga and jnana yoga</p>
                  </div>
                  <div className="border-l-4 border-highlight pl-6 py-2 relative">
                    <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-highlight"></div>
                    <h4 className="text-lg font-bold">200 CE</h4>
                    <p>Patanjali composes the Yoga Sutras, systematizing classical yoga</p>
                  </div>
                  <div className="border-l-4 border-highlight pl-6 py-2 relative">
                    <div className="absolute bottom-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-highlight"></div>
                    <h4 className="text-lg font-bold">1900s</h4>
                    <p>Yoga spreads to the Western world and evolves into various modern styles</p>
                  </div>
                </motion.div>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4">
                  Philosophy and Purpose
                </motion.h2>
                <motion.p variants={fadeIn}>
                  Yoga is not merely a physical exercise but a comprehensive system for overall wellbeing and spiritual
                  growth. It encompasses physical postures (asanas), breath control (pranayama), meditation, ethical
                  principles, and philosophy, all aimed at achieving harmony between mind, body, and spirit.
                </motion.p>

                <motion.div variants={fadeIn} className="my-8 bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">The Eight Limbs of Yoga (Ashtanga)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">यम</span>
                      <span>
                        <strong>Yama (Restraints)</strong> - Ethical disciplines of non-violence, truthfulness,
                        non-stealing, continence, and non-greed
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">नियम</span>
                      <span>
                        <strong>Niyama (Observances)</strong> - Self-discipline including purity, contentment,
                        austerity, self-study, and devotion
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">आसन</span>
                      <span>
                        <strong>Asana (Posture)</strong> - Physical practices to develop the body as a vessel for
                        spiritual growth
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">प्राणायाम</span>
                      <span>
                        <strong>Pranayama (Breath Control)</strong> - Techniques to control the breath and vital energy
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">प्रत्याहार</span>
                      <span>
                        <strong>Pratyahara (Withdrawal)</strong> - Withdrawal of the senses from external objects
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">धारणा</span>
                      <span>
                        <strong>Dharana (Concentration)</strong> - Focused concentration on a single object
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">ध्यान</span>
                      <span>
                        <strong>Dhyana (Meditation)</strong> - Uninterrupted meditation without an object
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">समाधि</span>
                      <span>
                        <strong>Samadhi (Absorption)</strong> - Complete absorption in the object of meditation,
                        transcending the self
                      </span>
                    </li>
                  </ul>
                </motion.div>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4">
                  Yoga Today
                </motion.h2>
                <motion.p variants={fadeIn}>
                  In the modern world, yoga has gained immense popularity as a practice for physical fitness, stress
                  reduction, and overall wellbeing. However, at Dum Dum Karate & Yoga Academy, we honor the ancient
                  roots and deeper dimensions of yoga, offering not just physical training but a holistic approach to
                  health and self-discovery.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Whether you seek physical flexibility, mental clarity, stress relief, or spiritual growth, our yoga
                  classes provide a supportive environment to explore this ancient practice in a way that respects its
                  rich heritage while making it accessible and relevant to contemporary life.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

