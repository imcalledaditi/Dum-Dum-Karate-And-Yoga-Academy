"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Users, Clock, Target } from "lucide-react"
import Link from "next/link"

export default function SelfDefenseProgram() {
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
              Self-<span className="text-primary">Defense</span> Program
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Learn practical, effective techniques to protect yourself and your loved ones in real-world situations
              while building confidence and awareness.
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
                      Our Self-Defense program is designed for people of all ages, from children as young as 4 to adults
                      of any age. We focus on practical techniques that work regardless of size or strength, emphasizing
                      awareness, prevention, and effective responses to potential threats.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      Unlike sport-oriented martial arts, our self-defense curriculum is specifically designed for
                      real-world situations. We combine elements from various martial arts disciplines, including
                      Karate, Jiu-Jitsu, and Krav Maga, to create a comprehensive system that addresses modern safety
                      concerns.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Practical Techniques</h3>
                          <p className="text-sm text-muted-foreground">Effective in real situations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Situational Awareness</h3>
                          <p className="text-sm text-muted-foreground">Prevention and threat assessment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Quick Learning</h3>
                          <p className="text-sm text-muted-foreground">Effective techniques in less time</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Age-Appropriate</h3>
                          <p className="text-sm text-muted-foreground">Tailored for different age groups</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-white group">
                        Start Your Self-Defense Training
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
                        alt="Self-defense training session"
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
                      title: "Kids Self-Defense (Ages 4-12)",
                      description:
                        "Our children's program teaches age-appropriate safety skills through games, role-playing, and simple techniques. Children learn to recognize unsafe situations, set boundaries, and respond effectively to bullying or potential dangers.",
                      image: "/placeholder.svg?height=300&width=400",
                      features: [
                        "Stranger awareness",
                        "Bullying prevention",
                        "Simple escape techniques",
                        "Confidence building",
                      ],
                    },
                    {
                      title: "Teen Self-Defense (Ages 13-17)",
                      description:
                        "Teens face unique safety challenges. Our program addresses these with practical techniques, boundary setting, and scenario training specific to teenage situations, including school, social events, and online safety.",
                      image: "/placeholder.svg?height=300&width=400",
                      features: [
                        "Social situation safety",
                        "Effective verbal strategies",
                        "Physical techniques",
                        "Digital safety awareness",
                      ],
                    },
                    {
                      title: "Adult Self-Defense (18+)",
                      description:
                        "Our adult program provides comprehensive training in threat assessment, de-escalation, and physical defense techniques. We address workplace safety, travel security, and home protection in addition to personal defense.",
                      image: "/placeholder.svg?height=300&width=400",
                      features: [
                        "Scenario-based training",
                        "Stress inoculation",
                        "Weapon defense basics",
                        "Environmental awareness",
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
                        <h4 className="font-medium text-primary mb-2">Focus Areas:</h4>
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

              {/* Self-Defense Approach */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Our Approach to Self-Defense</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">The Self-Defense Pyramid</h3>
                      <p className="text-muted-foreground mb-4">
                        Our training follows a comprehensive approach that recognizes self-defense as more than just
                        physical techniques. We teach a complete system based on the Self-Defense Pyramid:
                      </p>

                      <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white font-bold shrink-0 mt-0.5">
                            1
                          </div>
                          <div>
                            <h4 className="font-bold text-primary">Awareness</h4>
                            <p className="text-sm text-muted-foreground">
                              The foundation of self-defense is recognizing potential threats before they develop. We
                              teach environmental scanning, threat assessment, and trusting your instincts.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white font-bold shrink-0 mt-0.5">
                            2
                          </div>
                          <div>
                            <h4 className="font-bold text-primary">Avoidance</h4>
                            <p className="text-sm text-muted-foreground">
                              The best self-defense is avoiding dangerous situations entirely. We teach planning, risk
                              reduction, and preventative measures.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white font-bold shrink-0 mt-0.5">
                            3
                          </div>
                          <div>
                            <h4 className="font-bold text-primary">De-escalation</h4>
                            <p className="text-sm text-muted-foreground">
                              When confrontation can't be avoided, verbal and psychological strategies can often prevent
                              physical violence. We teach boundary setting, verbal commands, and de-escalation
                              techniques.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white font-bold shrink-0 mt-0.5">
                            4
                          </div>
                          <div>
                            <h4 className="font-bold text-primary">Physical Defense</h4>
                            <p className="text-sm text-muted-foreground">
                              As a last resort, physical techniques may be necessary. We teach simple, effective
                              movements that work regardless of size or strength, focusing on vulnerable targets and
                              escape.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-lg"></div>
                      <div className="absolute inset-0 bg-highlight/10 transform -rotate-3 rounded-lg"></div>
                      <div className="relative rounded-lg overflow-hidden z-10">
                        <Image
                          src="/placeholder.svg?height=600&width=800"
                          alt="Self-defense training"
                          width={800}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-highlight/10 p-4 rounded-lg border-l-4 border-highlight">
                    <p className="text-muted-foreground italic">
                      <strong>Our Philosophy:</strong> We believe that true self-defense empowers individuals to live
                      confidently and safely. Our goal is not to create fighters, but to develop aware, prepared
                      individuals who can protect themselves and their loved ones if necessary. The best self-defense
                      situation is the one you never have to face because you recognized and avoided the danger.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Special Workshops */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Specialized Workshops</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Women's Self-Defense",
                      description:
                        "This workshop addresses the specific safety concerns women face, teaching practical techniques that don't rely on strength. Topics include boundary setting, recognizing red flags, escape strategies, and effective striking techniques.",
                      image: "/placeholder.svg?height=300&width=500",
                      duration: "3-hour workshop, offered monthly",
                    },
                    {
                      title: "Workplace Safety",
                      description:
                        "Designed for businesses and organizations, this workshop covers threat assessment, de-escalation techniques, and emergency response protocols for workplace environments, including dealing with difficult customers or potential violence.",
                      image: "/placeholder.svg?height=300&width=500",
                      duration: "4-hour workshop, available for corporate booking",
                    },
                    {
                      title: "Travel Safety",
                      description:
                        "Perfect for frequent travelers, this workshop covers hotel safety, transportation security, situational awareness in unfamiliar environments, and cultural considerations that impact personal safety abroad.",
                      image: "/placeholder.svg?height=300&width=500",
                      duration: "3-hour workshop, offered quarterly",
                    },
                    {
                      title: "Family Safety Planning",
                      description:
                        "This workshop helps families develop comprehensive safety plans, including home security, emergency communication, meeting points, and age-appropriate safety skills for children. Ideal for parents and caregivers.",
                      image: "/placeholder.svg?height=300&width=500",
                      duration: "4-hour workshop, offered bi-monthly",
                    },
                  ].map((workshop, index) => (
                    <motion.div
                      key={workshop.title}
                      variants={fadeIn}
                      custom={index}
                      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                    >
                      <div className="relative h-48">
                        <Image
                          src={workshop.image || "/placeholder.svg"}
                          alt={workshop.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <h3 className="text-xl font-bold text-white p-4">{workshop.title}</h3>
                        </div>
                      </div>
                      <div className="p-6 flex-grow">
                        <p className="text-muted-foreground mb-4">{workshop.description}</p>
                        <div className="bg-primary/5 px-3 py-2 rounded-md inline-block">
                          <p className="text-sm text-primary font-medium">{workshop.duration}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
                        "As a single mother, I wanted to ensure my children and I could protect ourselves. The family safety workshop gave us practical skills and a comprehensive safety plan that has brought us peace of mind.",
                      name: "Priya Sharma",
                      role: "Mother of two",
                    },
                    {
                      quote:
                        "After taking the women's self-defense workshop, I feel more confident walking alone. The techniques are simple to remember and don't require strength, which is perfect for someone my size.",
                      name: "Anjali Patel",
                      role: "College student",
                    },
                    {
                      quote:
                        "As a business owner, I wanted to ensure my employees' safety. The workplace safety training was comprehensive and practical. My team feels more prepared and confident handling difficult situations.",
                      name: "Rajiv Kumar",
                      role: "Small business owner",
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
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Ready to Learn Essential Self-Defense Skills?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Join our community of empowered individuals who have gained the knowledge and skills to protect
                    themselves and their loved ones. Your first class is free!
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

