"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function KarateProgram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

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
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent"></div>
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
              className="inline-block bg-secondary/30 px-4 py-1 rounded-full text-sm font-medium text-navy mb-4"
            >
              For All Ages
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-poppins"
            >
              Karate <span className="text-primary">Training</span> Program
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Discover the ancient martial art that develops body, mind, and spirit through disciplined practice and
              traditional values.
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
                    <h2 className="text-3xl font-bold text-primary mb-4">Program Overview</h2>
                    <div className="w-20 h-1 bg-highlight mb-6"></div>

                    <p className="text-muted-foreground mb-6">
                      Our Karate program welcomes students of all ages and skill levels, from children as young as 4
                      years old to adults of any age. Whether you're looking to learn self-defense, improve fitness, or
                      develop discipline and focus, our comprehensive curriculum provides a structured path to mastery.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      We practice traditional Shotokan Karate, one of the most widely practiced styles in the world,
                      known for its powerful linear techniques and emphasis on proper form. Our training integrates
                      kihon (basics), kata (forms), and kumite (sparring) to develop well-rounded martial artists.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Certified Instructors</h3>
                          <p className="text-sm text-muted-foreground">Learn from black belt masters</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Self-Defense Focus</h3>
                          <p className="text-sm text-muted-foreground">Practical techniques for real situations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Flexible Schedule</h3>
                          <p className="text-sm text-muted-foreground">Morning, evening & weekend classes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">All Age Groups</h3>
                          <p className="text-sm text-muted-foreground">Specialized classes by age & level</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-white group">
                        Start Your Journey Today
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-lg"></div>
                    <div className="absolute inset-0 bg-highlight/10 transform -rotate-3 rounded-lg"></div>
                    <div className="relative rounded-lg overflow-hidden z-10">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Karate training session"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Age-Specific Programs */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Age-Specific Programs</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Little Dragons (Ages 4-7)",
                      description:
                        "Our Little Dragons program introduces young children to martial arts through fun, engaging activities that develop coordination, focus, and basic karate techniques. Classes emphasize respect, listening skills, and positive social interaction.",
                      image: "/placeholder.svg?height=300&width=400",
                      features: [
                        "30-45 minute classes",
                        "Parent participation welcome",
                        "Focus on motor skills",
                        "Fun games and activities",
                      ],
                    },
                    {
                      title: "Youth Program (Ages 8-12)",
                      description:
                        "The Youth Program builds on fundamental skills while introducing more advanced techniques and kata. Students develop greater discipline, confidence, and physical fitness while learning effective self-defense in a safe, supportive environment.",
                      image: "/placeholder.svg?height=300&width=400",
                      features: [
                        "45-60 minute classes",
                        "Belt progression system",
                        "Light controlled sparring",
                        "Character development",
                      ],
                    },
                    {
                      title: "Teen & Adult Program (13+)",
                      description:
                        "Our Teen & Adult Program offers comprehensive training in traditional Shotokan Karate, including advanced kata, kumite, and self-defense applications. Classes provide an excellent workout while developing mental focus and stress reduction.",
                      image: "/placeholder.svg?height=300&width=400",
                      features: [
                        "60-90 minute classes",
                        "Competition opportunities",
                        "Advanced techniques",
                        "Physical conditioning",
                      ],
                    },
                  ].map((program, index) => (
                    <motion.div
                      key={program.title}
                      variants={fadeIn}
                      custom={index}
                      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="relative h-48">
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                        <p className="text-muted-foreground mb-4">{program.description}</p>
                        <h4 className="font-medium text-primary mb-2">Features:</h4>
                        <ul className="mb-4">
                          {program.features.map((feature, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                              <span className="w-1.5 h-1.5 bg-highlight rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Belt System */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Belt Progression System</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                    Our academy follows the traditional Shotokan Karate belt system, which marks a student's progress
                    through consistent training and skill development. Each belt represents not just technical
                    proficiency, but also growth in character and understanding of karate principles.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      {
                        color: "bg-white border border-gray-200",
                        name: "White Belt",
                        rank: "10th Kyu",
                        level: "Beginner",
                      },
                      { color: "bg-yellow-300", name: "Yellow Belt", rank: "9th Kyu", level: "" },
                      { color: "bg-orange-400", name: "Orange Belt", rank: "8th Kyu", level: "" },
                      { color: "bg-green-500", name: "Green Belt", rank: "7th Kyu", level: "" },
                      { color: "bg-blue-500", name: "Blue Belt", rank: "6th Kyu", level: "" },
                      { color: "bg-purple-500", name: "Purple Belt", rank: "5th Kyu", level: "" },
                      { color: "bg-amber-700", name: "Brown Belt", rank: "4th-1st Kyu", level: "" },
                      { color: "bg-black", name: "Black Belt", rank: "1st Dan and above", level: "Advanced" },
                    ].map((belt, i) => (
                      <motion.div
                        key={belt.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center"
                      >
                        <div className={cn("w-full h-4 rounded mb-3", belt.color)}></div>
                        <h4 className="font-bold text-primary text-sm">{belt.name}</h4>
                        <p className="text-xs text-muted-foreground">{belt.rank}</p>
                        {belt.level && <span className="text-xs text-highlight mt-1">{belt.level}</span>}
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-center">
                    Advancement through the ranks is based on regular attendance, technical proficiency, knowledge of
                    kata, sparring ability, and demonstration of karate etiquette and values.
                  </p>
                </div>
              </motion.div>

              {/* Testimonials */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">What Our Students Say</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      quote:
                        "My 6-year-old son has been in the Little Dragons program for a year now, and the transformation is amazing. He's more focused, respectful, and confident. The instructors make learning fun while instilling important values.",
                      name: "Priya Sharma",
                      role: "Parent of Little Dragon",
                    },
                    {
                      quote:
                        "I joined the adult program at 45 years old with no prior martial arts experience. The instructors are patient and supportive, adapting techniques to my abilities while still challenging me to improve. It's never too late to start!",
                      name: "Rajesh Kumar",
                      role: "Adult Student",
                    },
                    {
                      quote:
                        "As a teenager dealing with anxiety, karate has been transformative. Beyond the physical benefits, I've gained mental discipline and stress management skills that help me in school and life. The dojo feels like a second family.",
                      name: "Ananya Das",
                      role: "Teen Student",
                    },
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      custom={index}
                      className="bg-card p-6 rounded-lg shadow-md relative"
                    >
                      <div className="absolute top-6 left-6 text-6xl text-highlight/10 font-serif">"</div>
                      <div className="relative z-10">
                        <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-primary">{testimonial.name}</h4>
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
                <div className="bg-primary/5 p-8 rounded-lg border border-primary/10 max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-primary mb-4">Ready to Begin Your Karate Journey?</h2>
                  <p className="text-muted-foreground mb-6">
                    Join students of all ages who are discovering the physical and mental benefits of traditional karate
                    training. Your first class is free!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                        Schedule a Free Trial Class
                      </Button>
                    </Link>
                    <Link href="/schedule">
                      <Button size="lg" variant="outline">
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

