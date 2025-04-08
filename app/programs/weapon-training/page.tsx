"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sword, Shield, Target, Award } from "lucide-react"
import Link from "next/link"

export default function WeaponTrainingProgram() {
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
              Advanced Training
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-poppins"
            >
              Weapons <span className="text-primary">Training</span> Program
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Master traditional martial arts weapons under expert guidance in our comprehensive weapons training
              program designed for serious students.
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
                    Our Weapons Training Program is designed for serious students, ages 6 to adult, who have the talent, desire, and commitment to train at a higher level. This advanced program builds upon the foundation of empty-hand Karate techniques, adding depth and versatility to martial arts practice. Each weapon offers its own set of techniques, challenges, and history, helping students develop greater focus, coordination, and discipline.
                    </p>

                    <p className="text-muted-foreground mb-6">
                    While Karate is best known for its empty-handed combat, certain styles—especially those with Okinawan roots—also include Kobudo, the traditional art of weapons training. Kobudo introduces classical tools such as the Bo, Nunchaku, Sai, Eku/Hanbo, Tonfa and Kama, each with unique historical significance and tactical application. Incorporating these weapons not only preserves ancient martial traditions but also broadens the student’s skill set, offering a more complete and culturally rich martial arts education.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Sword className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Traditional Weapons</h3>
                          <p className="text-sm text-muted-foreground">Six different weapons to master</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Advanced Techniques</h3>
                          <p className="text-sm text-muted-foreground">Beyond empty-hand training</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Specialized Training</h3>
                          <p className="text-sm text-muted-foreground">Weekly dedicated sessions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Expert Instruction</h3>
                          <p className="text-sm text-muted-foreground">Taught by weapons specialists</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-white group">
                        Enroll in Weapons Training
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-lg"></div>
                    <div className="absolute inset-0 bg-highlight/10 transform -rotate-3 rounded-lg"></div>
                    <div className="relative rounded-lg overflow-hidden z-10">
                      <Image
                        src="/program/weapon/weapon1.jpg?height=600&width=800"
                        alt="Weapons training demonstration"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Weapons Categories */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Our Weapons Program</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Short Weapons",
                      description: "Short-range weapons that require close combat techniques and precise movements.",
                      weapons: ["Sai", "Kama", "Tonfa"],
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      title: "Medium Weapons",
                      description: "Versatile weapons that can be used at various distances with different techniques.",
                      weapons: ["Nunchaku", "Eku/Hanbo"],
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      title: "Long Weapons",
                      description:
                        "Long-range weapons that provide reach advantage and require full-body coordination.",
                      weapons: ["Bo"],
                      image: "/placeholder.svg?height=300&width=400",
                    },
                  ].map((category, index) => (
                    <motion.div
                      key={category.title}
                      variants={fadeIn}
                      custom={index}
                      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="relative h-48">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <h3 className="text-xl font-bold text-white p-4">{category.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground mb-4">{category.description}</p>
                        <h4 className="font-medium text-primary mb-2">Weapons Include:</h4>
                        <ul className="mb-4">
                          {category.weapons.map((weapon) => (
                            <li key={weapon} className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                              <span className="w-1.5 h-1.5 bg-highlight rounded-full"></span>
                              {weapon}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Individual Weapons */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Weapons Training Options</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Bo",
                      description: "A six-foot staff that develops full-body coordination and power generation.",
                      origin: "Okinawa, Japan",
                      difficulty: "Intermediate",
                      image: "/program/weapon/Bobg.png?height=300&width=400",
                    },
                    {
                      name: "Eku/Hanbo",
                      description: "The Eku, a traditional boat oar, and the Hanbo, a three-foot staff, both enhance striking, sweeping, and blocking techniques.",
                      origin: "Okinawa, Japan",
                      difficulty: "Intermediate",               
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      name: "Kama",
                      description: "Sickle-shaped weapons used in pairs, combining cutting and hooking techniques.",
                      origin: "Okinawa, Japan",
                      difficulty: "Advanced",
                      image: "/program/weapon/kama-removebg-preview.png?height=300&width=400",
                    },
                    {
                      name: "Nunchaku",
                      description: "Two sticks connected by a chain or rope, requiring dexterity and coordination.",
                      origin: "Okinawa, Japan",
                      difficulty: "Advanced",
                      image: "/program/weapon/nanchaks-removebg-preview.png?height=300&width=400",
                    },
                    {
                      name: "Sai",
                      description: "Three-pronged metal weapons used for blocking, trapping, and stabbing techniques.",
                      origin: "Okinawa, Japan",
                      difficulty: "Intermediate"
                    },
                  
                    {
                      name: "Tonfa",
                      description: "L-shaped wooden weapons used in pairs, originally derived from mill handles.",
                      origin: "Okinawa, Japan",
                      difficulty: "Intermediate",
                      image: "/program/weapon/tonfa-removebg-preview.png?height=300&width=400",
                    },
                   
                    
                    
                  ].map((weapon, index) => (
                    <motion.div
                      key={weapon.name}
                      variants={fadeIn}
                      custom={index}
                      className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                    >
                      <div className="relative h-40">
                        <Image
                          src={weapon.image || "/placeholder.svg"}
                          alt={weapon.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <h3 className="text-xl font-bold text-white p-4">{weapon.name}</h3>
                        </div>
                      </div>
                      <div className="p-4 flex-grow">
                        <p className="text-muted-foreground mb-4">{weapon.description}</p>
                        <div className="flex justify-between text-sm">
                          <div>
                            <span className="text-primary font-medium">Origin:</span>
                            <span className="text-muted-foreground ml-2">{weapon.origin}</span>
                          </div>
                          <div>
                            <span className="text-primary font-medium">Difficulty:</span>
                            <span className="text-muted-foreground ml-2">{weapon.difficulty}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Program Requirements</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">Eligibility Criteria</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                            <span className="text-sm font-bold">1</span>
                          </div>
                          <p className="text-muted-foreground">
                            Minimum age of 8 years old (exceptions may be made based on individual assessment)
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                            <span className="text-sm font-bold">2</span>
                          </div>
                          <p className="text-muted-foreground">
                            At least 6 months of prior martial arts training (preferably at our academy)
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                            <span className="text-sm font-bold">3</span>
                          </div>
                          <p className="text-muted-foreground">
                            Demonstrated discipline, focus, and commitment to training
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                            <span className="text-sm font-bold">4</span>
                          </div>
                          <p className="text-muted-foreground">
                            Instructor recommendation or successful completion of an assessment
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">Training Commitment</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                            <span className="text-sm font-bold">1</span>
                          </div>
                          <p className="text-muted-foreground">
                            Weekly specialized weapons training sessions (in addition to regular martial arts classes)
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                            <span className="text-sm font-bold">2</span>
                          </div>
                          <p className="text-muted-foreground">
                            Regular practice outside of class to develop proficiency
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                            <span className="text-sm font-bold">3</span>
                          </div>
                          <p className="text-muted-foreground">
                            Participation in weapons demonstrations and exhibitions
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                            <span className="text-sm font-bold">4</span>
                          </div>
                          <p className="text-muted-foreground">Adherence to strict safety protocols and guidelines</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 bg-highlight/10 p-4 rounded-lg">
                    <p className="text-muted-foreground italic">
                      <strong>Note:</strong> All weapons used in training are practice versions designed for safety.
                      Students must demonstrate proper respect and handling of all training equipment. Real weapons are
                      never used in regular training sessions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-primary/5 p-8 rounded-lg border border-primary/10 max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-primary mb-4">Take Your Training to the Next Level</h2>
                  <p className="text-muted-foreground mb-6">
                    Ready to expand your martial arts journey into weapons training? Contact us to schedule an
                    assessment and learn more about our Premier Weapons Club.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                        Schedule an Assessment
                      </Button>
                    </Link>
                    <Link href="/programs">
                      <Button size="lg" variant="outline">
                        Explore Other Programs
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

