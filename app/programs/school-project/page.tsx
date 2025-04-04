"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, School, Clock, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function SchoolProjectProgram() {
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
              For Educational Institutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-poppins"
            >
              School <span className="text-primary">Partnership</span> Program
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Bringing the benefits of martial arts and yoga to educational institutions across Kolkata, enhancing
              physical education and promoting holistic student development.
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
                      Our School Partnership Program brings the discipline and benefits of martial arts and yoga
                      directly to educational institutions. We work closely with schools to integrate these practices
                      into their physical education curriculum, providing students with valuable skills that extend
                      beyond physical fitness.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      We are proud to be associated with multiple prestigious schools across Kolkata, where our
                      certified instructors conduct regular classes tailored to different age groups and educational
                      requirements.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <School className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Curriculum Integration</h3>
                          <p className="text-sm text-muted-foreground">Customized to school requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Holistic Development</h3>
                          <p className="text-sm text-muted-foreground">Physical, mental, and emotional growth</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Flexible Scheduling</h3>
                          <p className="text-sm text-muted-foreground">During or after school hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Certified Instructors</h3>
                          <p className="text-sm text-muted-foreground">Experienced with teaching children</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-white group">
                        Partner With Us
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
                        alt="School karate class"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Partner Schools */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Our Partner Schools</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      name: "Vivekananda School",
                      location: "Salt Lake, Kolkata",
                      programs: ["Karate", "Yoga"],
                      students: "250+ students",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      name: "St. Xavier's Institution",
                      location: "Park Street, Kolkata",
                      programs: ["Karate", "Self-Defense"],
                      students: "300+ students",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      name: "Modern High School",
                      location: "Ballygunge, Kolkata",
                      programs: ["Karate", "Yoga", "Self-Defense"],
                      students: "200+ students",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                    {
                      name: "Ramakrishna Mission",
                      location: "Narendrapur, Kolkata",
                      programs: ["Karate", "Yoga"],
                      students: "350+ students",
                      image: "/placeholder.svg?height=300&width=400",
                    },
                  ].map((school, index) => (
                    <motion.div
                      key={school.name}
                      variants={fadeIn}
                      custom={index}
                      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="relative h-48">
                        <Image
                          src={school.image || "/placeholder.svg"}
                          alt={school.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <h3 className="text-xl font-bold text-white p-4">{school.name}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-highlight"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>{school.location}</span>
                        </div>

                        <h4 className="font-medium text-primary mb-2">Programs Offered:</h4>
                        <ul className="mb-4">
                          {school.programs.map((program) => (
                            <li key={program} className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                              <span className="w-1.5 h-1.5 bg-highlight rounded-full"></span>
                              {program}
                            </li>
                          ))}
                        </ul>

                        <div className="bg-secondary/20 px-3 py-2 rounded-md inline-block">
                          <p className="text-sm font-medium">{school.students}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Program Benefits */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Program Benefits</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-primary mb-4">For Schools</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                          <span className="text-sm font-bold">1</span>
                        </div>
                        <p className="text-muted-foreground">
                          Enhanced physical education curriculum with structured martial arts and yoga programs
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                          <span className="text-sm font-bold">2</span>
                        </div>
                        <p className="text-muted-foreground">
                          Improved student discipline, focus, and classroom behavior
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                          <span className="text-sm font-bold">3</span>
                        </div>
                        <p className="text-muted-foreground">
                          Reduced bullying incidents and improved conflict resolution skills
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                          <span className="text-sm font-bold">4</span>
                        </div>
                        <p className="text-muted-foreground">
                          Unique offering that distinguishes the school's physical education program
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-primary mb-4">For Students</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                          <span className="text-sm font-bold">1</span>
                        </div>
                        <p className="text-muted-foreground">
                          Development of physical fitness, coordination, and body awareness
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                          <span className="text-sm font-bold">2</span>
                        </div>
                        <p className="text-muted-foreground">Improved concentration, focus, and academic performance</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                          <span className="text-sm font-bold">3</span>
                        </div>
                        <p className="text-muted-foreground">Enhanced self-confidence, respect, and social skills</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                          <span className="text-sm font-bold">4</span>
                        </div>
                        <p className="text-muted-foreground">
                          Practical self-defense skills and stress management techniques
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Testimonials */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">What Educators Say</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      quote:
                        "Integrating Dum Dum Academy's karate program into our physical education curriculum has had a remarkable impact on our students. We've seen improvements in discipline, focus, and even academic performance.",
                      name: "Dr. Rajesh Sharma",
                      role: "Principal, Vivekananda School",
                    },
                    {
                      quote:
                        "The instructors from Dum Dum Academy are not just skilled martial artists but excellent educators who understand how to work with children. Their approach to teaching combines fun with discipline in the perfect balance.",
                      name: "Mrs. Priya Banerjee",
                      role: "Physical Education Director, St. Xavier's Institution",
                    },
                    {
                      quote:
                        "The yoga program has been particularly beneficial for our students, helping them manage academic stress and develop mindfulness. Parents have reported positive changes in their children's behavior at home as well.",
                      name: "Mr. Anand Mehta",
                      role: "Vice Principal, Modern High School",
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
                  <h2 className="text-2xl font-bold text-primary mb-4">Bring Martial Arts to Your School</h2>
                  <p className="text-muted-foreground mb-6">
                    Interested in bringing our martial arts or yoga programs to your educational institution? Contact us
                    to discuss how we can create a customized program that meets your school's specific needs and
                    objectives.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                        Schedule a Consultation
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

