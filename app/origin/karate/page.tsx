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

export default function KarateOriginPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background pattern - Japanese style waves */}
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
              <span className="mr-3 text-highlight">空手</span>
              The Origin of Karate
            </motion.h1>
            <motion.div variants={fadeIn} className="w-20 h-1 bg-highlight mx-auto mb-8"></motion.div>

            <motion.div variants={fadeIn} className="relative h-80 w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/origin/origink1.jpg?height=400&width=1000"
                alt="Ancient Karate masters training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <p className="text-white p-4 italic text-lg">
                  "In Karate, there is no first strike." - Traditional Karate principle
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
                <motion.div variants={fadeIn} className="my-8 bg-primary/5 p-6 rounded-lg border-l-4 border-highlight">
                  <p className="italic text-muted-foreground">
                    "The origins of Karate date back more than a thousand years. First practised by religious monks in
                    China, this Martial Art was introduced into Okinawa and blended with the indigenous fighting
                    techniques of the islands. This new Martial Art, due to its Chinese origin, was called Karate -
                    written in Chinese characters with the literal meaning "Chinese Hand". Sensei Konishi & Noel Turner
                    in Japan The characters were later changed by the Japanese to mean "Empty Hand", thus Karate became
                    a weaponless form of self-defence. Yet Karate is much more than a way of fighting. To the sincere
                    student, it is a form of combined physical and mental disciplines from which one can learn humility
                    and gentleness, gain self-confidence, and eventually attain a harmony of mind and body."
                  </p>
                </motion.div>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4">
                  What is Karate
                </motion.h2>
                <motion.p variants={fadeIn}>
                  Karate is a dynamic martial art that originated on the island of Okinawa. Developed as a system of
                  self-defense, it emphasizes striking and kicking techniques using nothing more than the body. Beyond
                  physical prowess, Karate cultivates mental discipline, respect for others, and strong character,
                  making it a lifelong pursuit for people of all ages and genders.
                </motion.p>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4 mt-8">
                  The Philosophy and Benefits
                </motion.h2>
                <motion.p variants={fadeIn}>
                  Karate training is much more than learning to fight—it is a journey of self-improvement. Practitioners
                  work hard to master techniques that combine strength, speed, coordination, and balance. This rigorous
                  practice not only prepares one for self-defense but also builds:
                </motion.p>
                <motion.ul variants={fadeIn} className="space-y-2 my-4">
                  <li className="flex items-center gap-3">
                    <span className="text-highlight font-bold">Character</span> through perseverance and dedication
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-highlight font-bold">Sincerity</span> by fostering honest interactions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-highlight font-bold">Effort</span> through relentless training
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-highlight font-bold">Etiquette</span> by respecting both peers and opponents
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-highlight font-bold">Self-Control</span> which is vital in everyday life
                  </li>
                </motion.ul>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4 mt-8">
                  Historical Roots and Evolution
                </motion.h2>
                <motion.p variants={fadeIn}>
                  Originally, Okinawan martial arts were known by various names. In the early 20th century, the art was
                  referred to as "Tode" in reference to its Chinese influences. However, as Okinawan masters sought to
                  define their unique identity, a significant meeting in 1936 led to a unanimous decision: the art would
                  be renamed "Karate," which literally means "empty hand." This change not only highlighted its
                  weaponless nature but also aligned it more closely with Zen principles.
                </motion.p>

                <motion.div variants={fadeIn} className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-accent/20 p-6 rounded-lg shadow-md relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-highlight/10 rounded-full"></div>
                    <h3 className="text-xl font-bold text-primary mb-2">Tode</h3>
                    <p className="text-muted-foreground">
                      Early form of Karate, influenced by Chinese Kung Fu techniques brought to Okinawa through trade.
                    </p>
                  </div>
                  <div className="bg-accent/20 p-6 rounded-lg shadow-md relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-highlight/10 rounded-full"></div>
                    <h3 className="text-xl font-bold text-primary mb-2">Shuri-te</h3>
                    <p className="text-muted-foreground">
                      Style developed in Shuri city, focused on quick, linear movements and powerful strikes.
                    </p>
                  </div>
                  <div className="bg-accent/20 p-6 rounded-lg shadow-md relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-highlight/10 rounded-full"></div>
                    <h3 className="text-xl font-bold text-primary mb-2">Naha-te</h3>
                    <p className="text-muted-foreground">
                      Style from Naha port city, characterized by circular movements and close-quarters techniques.
                    </p>
                  </div>
                </motion.div>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4">
                  From Ancient Traditions to Modern Sport
                </motion.h2>
                <motion.p variants={fadeIn}>
                  While Karate's origins are steeped in centuries of self-defense techniques, its modern form is the
                  result of systematic study and refinement. Today, Karate is practiced not only as a method of
                  self-protection but also as a competitive sport with well-defined rules and formats. Its comprehensive
                  approach offers excellent physical exercise, improved coordination, and heightened mental awareness.
                </motion.p>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4 mt-8">
                  Modern Development
                </motion.h2>
                <motion.p variants={fadeIn}>
                  In the early 20th century, Karate master Gichin Funakoshi introduced the art to mainland Japan,
                  modifying some aspects to gain acceptance. He is often credited as the "Father of Modern Karate."
                </motion.p>

                <motion.div variants={fadeIn} className="my-8 relative">
                  <div className="border-l-4 border-highlight pl-6 py-2 relative">
                    <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-highlight"></div>
                    <h4 className="text-lg font-bold">1922</h4>
                    <p>First public demonstration of Karate in Tokyo</p>
                  </div>
                  <div className="border-l-4 border-highlight pl-6 py-2 relative">
                    <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-highlight"></div>
                    <h4 className="text-lg font-bold">1930s</h4>
                    <p>Establishment of major Karate styles: Shotokan, Goju-Ryu, Shito-Ryu, and Wado-Ryu</p>
                  </div>
                  <div className="border-l-4 border-highlight pl-6 py-2 relative">
                    <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-highlight"></div>
                    <h4 className="text-lg font-bold">1964</h4>
                    <p>Formation of the Japan Karate Federation</p>
                  </div>
                  <div className="border-l-4 border-highlight pl-6 py-2 relative">
                    <div className="absolute bottom-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-highlight"></div>
                    <h4 className="text-lg font-bold">2020</h4>
                    <p>Karate debuts as an Olympic sport in Tokyo</p>
                  </div>
                </motion.div>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4">
                  Philosophy
                </motion.h2>
                <motion.p variants={fadeIn}>
                  Karate is more than just a fighting system; it's a way of life that emphasizes discipline, respect,
                  and personal development. The true aim of Karate is not victory or defeat, but the perfection of
                  character.
                </motion.p>

                <motion.div variants={fadeIn} className="my-8 bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">The Five Principles of Karate</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">礼</span>
                      <span>
                        <strong>Rei (Respect)</strong> - Show respect and courtesy to all
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">誠</span>
                      <span>
                        <strong>Makoto (Sincerity)</strong> - Be truthful and sincere in your actions
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">忍</span>
                      <span>
                        <strong>Nin (Perseverance)</strong> - Continue despite difficulties
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">自制</span>
                      <span>
                        <strong>Jisei (Self-control)</strong> - Control your emotions and actions
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl text-highlight">勇</span>
                      <span>
                        <strong>Yu (Courage)</strong> - Face challenges with bravery
                      </span>
                    </li>
                  </ul>
                </motion.div>

                <motion.h2 variants={fadeIn} className="text-2xl font-bold text-primary mb-4">
                  Karate Today
                </motion.h2>
                <motion.p variants={fadeIn}>
                  Today, Karate is practiced by millions of people worldwide, from children to seniors, for
                  self-defense, sport, fitness, and personal growth. While it has evolved over time, the core principles
                  and techniques remain rooted in its rich heritage.
                </motion.p>
                <motion.p variants={fadeIn}>
                  At Dum Dum Karate & Yoga Academy, we honor these traditions while providing modern, effective training
                  that develops both physical skills and mental discipline, continuing the legacy of this ancient
                  martial art.
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

