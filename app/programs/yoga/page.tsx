"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Heart, Wind, Moon, Users, Clock } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function YogaProgram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-yellow/30 px-4 py-1 rounded-full text-sm font-medium text-navy mb-4"
            >
              For All Ages & Abilities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-poppins"
            >
              Yoga <span className="text-red">Practice</span> Program
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Discover the ancient practice that unites body, mind, and spirit through movement, breath, and meditation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div ref={ref} className="max-w-6xl mx-auto">
            <motion.div initial="hidden" animate={controls} variants={staggerContainer}>
              {/* Program Overview */}
              <motion.div variants={fadeIn} className="mb-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-red mb-4">Program Overview</h2>
                    <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>

                    <p className="text-muted-foreground mb-6">
                      Our Yoga program welcomes practitioners of all ages and abilities, from children as young as 4
                      years old to seniors and everyone in between. Whether you're seeking physical fitness, stress
                      reduction, flexibility, or spiritual growth, our diverse classes provide a supportive environment
                      for your practice.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      We offer a variety of yoga styles, including Hatha, Vinyasa, Yin, and Restorative, taught by
                      experienced instructors who adapt practices to meet individual needs. Our approach honors yoga's
                      ancient traditions while making them accessible and relevant to modern life.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-orange shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-red">Holistic Wellness</h3>
                          <p className="text-sm text-muted-foreground">Physical, mental & spiritual benefits</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Wind className="h-5 w-5 text-orange shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-red">Breath Awareness</h3>
                          <p className="text-sm text-muted-foreground">Pranayama techniques for vitality</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Moon className="h-5 w-5 text-orange shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-red">Stress Reduction</h3>
                          <p className="text-sm text-muted-foreground">Practices for calm & balance</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-orange shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-red">Supportive Community</h3>
                          <p className="text-sm text-muted-foreground">Practice in a welcoming environment</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-red hover:bg-red/90 text-white group">
                        Begin Your Yoga Journey
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-red/10 transform rotate-3 rounded-lg"></div>
                    <div className="absolute inset-0 bg-orange/10 transform -rotate-3 rounded-lg"></div>
                    <div className="relative rounded-lg overflow-hidden z-10">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Yoga class in session"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Yoga for Everyone */}
              <motion.div variants={fadeIn} className="mb-16 bg-blue/5 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-red mb-4 text-center">Yoga for Everyone</h2>
                <div className="w-20 h-1 bg-orange mx-auto mb-10"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red/10 transform rotate-3 rounded-lg"></div>
                    <div className="absolute inset-0 bg-orange/10 transform -rotate-3 rounded-lg"></div>
                    <div className="relative rounded-lg overflow-hidden z-10">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Diverse yoga practitioners"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-red mb-4">Inclusive Practice for All Ages</h3>
                    <p className="text-muted-foreground mb-6">
                      At Dum Dum Karate & Yoga Academy, we believe that yoga is for <strong>everyone</strong>,
                      regardless of age, body type, or fitness level. Our classes welcome:
                    </p>

                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-blue shrink-0 mt-0.5">
                          <span className="text-sm font-bold">4+</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-red">Children (ages 4-12)</h4>
                          <p className="text-sm text-muted-foreground">
                            Playful, age-appropriate yoga that builds body awareness, coordination, and focus through
                            stories, games, and simple poses.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-blue shrink-0 mt-0.5">
                          <span className="text-sm font-bold">13+</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-red">Teens & Young Adults</h4>
                          <p className="text-sm text-muted-foreground">
                            Classes that address the unique physical and emotional needs of adolescents, helping with
                            stress management, body confidence, and mindfulness.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-blue shrink-0 mt-0.5">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-red">Adults of All Ages</h4>
                          <p className="text-sm text-muted-foreground">
                            From beginners to advanced practitioners, our adult classes offer variations to accommodate
                            different levels of experience, flexibility, and strength.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-blue shrink-0 mt-0.5">
                          <span className="text-sm font-bold">60+</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-red">Seniors</h4>
                          <p className="text-sm text-muted-foreground">
                            Gentle, accessible practices that improve mobility, balance, and overall wellbeing, with
                            modifications for common age-related concerns.
                          </p>
                        </div>
                      </li>
                    </ul>

                    <div className="bg-yellow/20 p-4 rounded-lg border-l-4 border-orange">
                      <p className="text-muted-foreground italic">
                        "Yoga is not about touching your toes; it's about what you learn on the way down." — Judith
                        Hanson Lasater
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Yoga for Health */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-red mb-4 text-center">Yoga for Health & Healing</h2>
                <div className="w-20 h-1 bg-orange mx-auto mb-10"></div>

                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                    Yoga is increasingly recognized by medical professionals as a complementary approach for managing
                    various health conditions. Our specialized classes and private sessions can be tailored to address
                    specific health concerns.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        condition: "Stress & Anxiety",
                        description:
                          "Gentle poses, breathing techniques, and meditation practices that activate the relaxation response and calm the nervous system.",
                        icon: "🧠",
                        color: "bg-pink/20",
                      },
                      {
                        condition: "Back Pain",
                        description:
                          "Targeted poses that strengthen core muscles, improve posture, and increase spinal flexibility to reduce discomfort.",
                        icon: "🦴",
                        color: "bg-blue/20",
                      },
                      {
                        condition: "Joint Issues",
                        description:
                          "Modified practices that improve joint mobility and strength without strain, suitable for arthritis and similar conditions.",
                        icon: "🦵",
                        color: "bg-yellow/20",
                      },
                      {
                        condition: "Heart Health",
                        description:
                          "Practices that improve circulation, lower blood pressure, and reduce stress—all factors in cardiovascular health.",
                        icon: "❤️",
                        color: "bg-red/20",
                      },
                      {
                        condition: "Respiratory Conditions",
                        description:
                          "Breathing exercises that improve lung capacity, oxygen uptake, and respiratory muscle strength.",
                        icon: "🫁",
                        color: "bg-blue/20",
                      },
                      {
                        condition: "Sleep Issues",
                        description:
                          "Relaxing evening practices that prepare the body and mind for restful sleep without medication.",
                        icon: "😴",
                        color: "bg-navy/20",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.condition}
                        variants={fadeIn}
                        custom={index}
                        className={cn("p-5 rounded-lg", item.color)}
                      >
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h3 className="text-lg font-bold text-red mb-2">{item.condition}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-orange/10 p-6 rounded-lg border-l-4 border-orange">
                    <h3 className="text-xl font-bold text-red mb-3">Long-Term Health Benefits</h3>
                    <p className="text-muted-foreground mb-4">
                      Regular yoga practice offers numerous long-term health benefits that can help manage or prevent
                      chronic conditions:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-muted-foreground">Reduced inflammation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-muted-foreground">Improved immune function</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-muted-foreground">Better hormone regulation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-muted-foreground">Enhanced cognitive function</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-muted-foreground">Increased bone density</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-muted-foreground">Better digestion and metabolism</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-muted-foreground">Reduced chronic pain</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-muted-foreground">Improved balance and coordination</span>
                      </li>
                    </ul>
                    <div className="mt-4 text-sm text-muted-foreground italic">
                      <strong>Note:</strong> While yoga can be beneficial for many health conditions, it should be
                      considered a complementary approach to medical treatment. Always consult with your healthcare
                      provider before beginning any new exercise program, especially if you have existing health
                      concerns.
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Special Programs */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-red mb-4 text-center">Special Programs</h2>
                <div className="w-20 h-1 bg-orange mx-auto mb-10"></div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Prenatal & Postnatal Yoga",
                      description:
                        "Safe, nurturing practices designed specifically for expectant and new mothers. These classes support the changing body during pregnancy, prepare for childbirth, and help with postpartum recovery.",
                      image: "/placeholder.svg?height=300&width=500",
                      schedule: "Tuesdays & Thursdays, 10:00 AM",
                      color: "bg-pink/10",
                    },
                    {
                      title: "Yoga for Seniors",
                      description:
                        "Gentle classes that focus on improving mobility, balance, and overall wellbeing. These sessions include chair yoga options and modifications for common age-related concerns.",
                      image: "/placeholder.svg?height=300&width=500",
                      schedule: "Mondays & Wednesdays, 11:00 AM",
                      color: "bg-blue/10",
                    },
                    {
                      title: "Therapeutic Yoga",
                      description:
                        "Specialized sessions for individuals with specific health conditions or recovering from injury. Our therapeutic approach combines gentle movement, breath awareness, and relaxation techniques.",
                      image: "/placeholder.svg?height=300&width=500",
                      schedule: "By appointment",
                      color: "bg-yellow/10",
                    },
                    {
                      title: "Family Yoga",
                      description:
                        "Fun, interactive classes where parents and children practice together. These sessions strengthen family bonds while introducing yoga principles in an accessible, playful way.",
                      image: "/placeholder.svg?height=300&width=500",
                      schedule: "Saturdays, 11:30 AM",
                      color: "bg-orange/10",
                    },
                  ].map((program, index) => (
                    <motion.div
                      key={program.title}
                      variants={fadeIn}
                      custom={index}
                      className={cn(
                        "rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2",
                        program.color,
                      )}
                    >
                      <div className="relative h-48">
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <h3 className="text-xl font-bold text-white p-4">{program.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground mb-4">{program.description}</p>
                        <div className="flex items-center gap-2 text-sm font-medium text-red">
                          <Clock className="h-4 w-4" />
                          <span>{program.schedule}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonials */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-red mb-4 text-center">What Our Students Say</h2>
                <div className="w-20 h-1 bg-orange mx-auto mb-10"></div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      quote:
                        "After years of chronic back pain and trying various treatments, yoga has been the most effective solution. The instructors are knowledgeable about modifications for my condition, and I've regained mobility I thought was lost forever.",
                      name: "Amit Patel, 58",
                      role: "Practicing for 2 years",
                      image: "/placeholder.svg?height=100&width=100",
                    },
                    {
                      quote:
                        "As a busy executive, yoga has become my sanctuary from stress. The combination of movement and mindfulness has improved my focus, sleep quality, and overall wellbeing. I'm more productive and balanced in all areas of life.",
                      name: "Meera Sharma, 42",
                      role: "Practicing for 1 year",
                      image: "/placeholder.svg?height=100&width=100",
                    },
                    {
                      quote:
                        "I started bringing my 8-year-old daughter to kids' yoga to help with her anxiety, and the transformation has been remarkable. She's more confident, has better coping skills, and actually looks forward to practice. Now our whole family attends!",
                      name: "Ravi Krishnan, 37",
                      role: "Family of yoga practitioners",
                      image: "/placeholder.svg?height=100&width=100",
                    },
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      custom={index}
                      className="bg-card p-6 rounded-lg shadow-md relative"
                    >
                      <div className="absolute top-6 left-6 text-6xl text-orange/10 font-serif">"</div>
                      <div className="relative z-10">
                        <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-red">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-pink/10 p-8 rounded-lg border border-red/10 max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-red mb-4">Ready to Begin Your Yoga Journey?</h2>
                  <p className="text-muted-foreground mb-6">
                    Join practitioners of all ages and abilities who are discovering the transformative benefits of
                    yoga. Your first class is free!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="bg-red hover:bg-red/90 text-white">
                        Schedule a Free Trial Class
                      </Button>
                    </Link>
                    <Link href="/schedule">
                      <Button size="lg" variant="outline" className="border-red text-red hover:bg-red/10">
                        View Class Schedule
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

