"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useInView, useAnimation } from "framer-motion"
import { Mail, Phone, Award, Sword, NotebookIcon as Lotus } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample instructor data
const instructors = {
  karate: [
    {
      id: 1,
      name: "TNK Sensei",
      role: "Founder & Chief Instructor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "With over 30 years of experience in traditional Karate, TNK Sensei has dedicated his life to mastering and teaching the art. As the founder of Dum Dum Karate & Yoga Academy, he has trained thousands of students, many of whom have gone on to become accomplished martial artists and instructors themselves.",
      qualifications: ["7th Dan Black Belt", "International Certified Instructor"],
      specialization: ["Traditional Shotokan Karate", "Kata", "Self-Defense"],
      contact: {
        email: "tnk@dumdum-karate.com",
        phone: "+91 9830355608",
      },
    },
    {
      id: 2,
      name: "Sujata Roy Sensei",
      role: "Senior Instructor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Sujata Roy Sensei is a highly accomplished instructor with over 20 years of experience in Karate. She has trained numerous students who have gone on to win national and international competitions. Her teaching approach emphasizes discipline, respect, and technical precision.",
      qualifications: ["5th Dan Black Belt", "National Champion"],
      specialization: ["Kumite", "Women's Self-Defense", "Youth Training"],
      contact: {
        email: "sujata@dumdum-karate.com",
        phone: "+91 9830355603",
      },
    },
    {
      id: 3,
      name: "Ananya Das",
      role: "Junior Instructor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Ananya Das began training at Dum Dum Academy at the age of 7 and has grown into one of our most promising instructors. With multiple regional championships under her belt, she specializes in teaching children and beginners, making complex techniques accessible and fun to learn.",
      qualifications: ["3rd Dan Black Belt", "Regional Champion"],
      specialization: ["Children's Training", "Beginner Techniques", "Competition Preparation"],
      contact: {
        email: "ananya@dumdum-karate.com",
        phone: "+91 9830355605",
      },
    },
  ],
  yoga: [
    {
      id: 4,
      name: "Rajiv Kumar",
      role: "Yoga Director",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Rajiv Kumar brings 15 years of yoga practice to Dum Dum Academy. Trained in traditional Hatha and Ashtanga yoga, he specializes in helping martial artists improve flexibility, balance, and mental focus through targeted yoga practices.",
      qualifications: ["Certified Yoga Instructor (RYT-500)", "Meditation Specialist"],
      specialization: ["Hatha Yoga", "Pranayama", "Meditation"],
      contact: {
        email: "rajiv@dumdum-karate.com",
        phone: "+91 9830355604",
      },
    },
    {
      id: 5,
      name: "Priya Sharma",
      role: "Senior Yoga Instructor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Priya Sharma has been practicing yoga for over 12 years and teaching for the past 8 years. With training in India and internationally, she brings a blend of traditional and modern approaches to her classes, focusing on alignment, mindfulness, and personal growth.",
      qualifications: ["RYT-200 Certified", "Therapeutic Yoga Specialist"],
      specialization: ["Vinyasa Flow", "Restorative Yoga", "Yoga for Athletes"],
      contact: {
        email: "priya@dumdum-karate.com",
        phone: "+91 9830355609",
      },
    },
    {
      id: 6,
      name: "Arun Datta",
      role: "Yoga Instructor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Arun Datta discovered yoga during his recovery from a sports injury and was transformed by its healing power. Now, he specializes in adaptive yoga practices that help students with injuries or limitations find their path to wellness through modified practices.",
      qualifications: ["RYT-200 Certified", "Adaptive Yoga Specialist"],
      specialization: ["Gentle Yoga", "Yoga Therapy", "Seniors' Classes"],
      contact: {
        email: "arun@dumdum-karate.com",
        phone: "+91 9830355610",
      },
    },
    {
      id: 7,
      name: "Meera Patel",
      role: "Kundalini Yoga Specialist",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Meera Patel has dedicated over a decade to the practice and teaching of Kundalini Yoga. Her transformative approach combines powerful breathwork, dynamic movements, and meditation to help students awaken their inner energy and achieve higher consciousness.",
      qualifications: ["Kundalini Research Institute Certified", "Sound Healing Practitioner"],
      specialization: ["Kundalini Yoga", "Breathwork", "Mantra Chanting"],
      contact: {
        email: "meera@dumdum-karate.com",
        phone: "+91 9830355611",
      },
    },
    {
      id: 8,
      name: "Vikram Malhotra",
      role: "Ashtanga & Power Yoga Instructor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Vikram Malhotra is a dynamic instructor with a background in competitive sports. His powerful teaching style challenges students to push their boundaries while maintaining proper alignment. He specializes in strength-building sequences that complement martial arts training.",
      qualifications: ["E-RYT 500", "Former National Athlete"],
      specialization: ["Ashtanga Yoga", "Power Yoga", "Athletic Performance"],
      contact: {
        email: "vikram@dumdum-karate.com",
        phone: "+91 9830355612",
      },
    },
    {
      id: 9,
      name: "Lakshmi Rao",
      role: "Iyengar Yoga Specialist",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Lakshmi Rao brings precision and therapeutic expertise to her teaching. With certification from the Iyengar Institute in Pune, she helps students achieve perfect alignment using props and careful instruction. Her classes are ideal for those recovering from injuries or seeking to deepen their practice.",
      qualifications: ["Certified Iyengar Yoga Teacher", "Yoga Therapy Diploma"],
      specialization: ["Iyengar Yoga", "Alignment", "Therapeutic Applications"],
      contact: {
        email: "lakshmi@dumdum-karate.com",
        phone: "+91 9830355613",
      },
    },
  ],
}

export default function InstructorPage() {
  const [activeTab, setActiveTab] = useState("karate")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />

      {/* Japanese-style decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-0 w-72 h-72 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10,10 L90,10 L90,90 L10,90 Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-highlight"
            />
            <path
              d="M30,30 L70,30 L70,70 L30,70 Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-highlight"
            />
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10,50 L50,10 L90,50 L50,90 Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-primary"
            />
          </svg>
        </div>
      </div>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">Our Instructors</h1>
            <div className="w-20 h-1 bg-highlight mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Meet our team of dedicated instructors who bring decades of experience and passion to every class.
            </p>
          </div>

          {/* Tabs for Karate and Yoga instructors */}
          <div className="flex justify-center mb-16">
            <div className="bg-secondary/30 p-1 rounded-full inline-flex">
              <button
                onClick={() => setActiveTab("karate")}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300",
                  activeTab === "karate" ? "bg-primary text-white shadow-lg" : "hover:bg-secondary",
                )}
              >
                <Sword
                  className={cn(
                    "h-5 w-5 transition-all duration-500",
                    activeTab === "karate" ? "text-white rotate-0" : "text-primary rotate-45",
                  )}
                />
                <span className="font-medium">Karate Instructors</span>
              </button>
              <button
                onClick={() => setActiveTab("yoga")}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300",
                  activeTab === "yoga" ? "bg-primary text-white shadow-lg" : "hover:bg-secondary",
                )}
              >
                <Lotus
                  className={cn(
                    "h-5 w-5 transition-all duration-500",
                    activeTab === "yoga" ? "text-white scale-110" : "text-primary scale-100",
                  )}
                />
                <span className="font-medium">Yoga Instructors</span>
              </button>
            </div>
          </div>

          <div ref={ref}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {instructors[activeTab].map((instructor, index) => (
                <motion.div
                  key={instructor.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="relative group h-full"
                >
                  <div
                    className={cn(
                      "bg-card rounded-lg shadow-lg overflow-hidden transition-all duration-500 h-full flex flex-col",
                      "hover:shadow-xl hover:-translate-y-1",
                      activeTab === "karate" ? "bg-blue/5" : "bg-pink/5",
                    )}
                  >
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={instructor.image || "/placeholder.svg"}
                        alt={instructor.name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h2 className="text-xl font-bold">{instructor.name}</h2>
                          <p className="text-white/90">{instructor.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-muted-foreground mb-4 line-clamp-3">{instructor.bio}</p>

                      <div className="mb-4 mt-auto">
                        <h3 className="font-medium text-primary flex items-center gap-2">
                          <Award className="h-4 w-4 text-highlight" /> Qualifications
                        </h3>
                        <ul className="mt-1 space-y-1">
                          {instructor.qualifications.map((qual, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-highlight rounded-full"></span> {qual}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h3 className="font-medium text-primary">Specialization</h3>
                        <ul className="mt-1 space-y-1">
                          {instructor.specialization.map((spec, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-highlight rounded-full"></span> {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border mt-auto">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4 text-highlight" />
                          <span>{instructor.contact.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Phone className="h-4 w-4 text-highlight" />
                          <span>{instructor.contact.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center bg-secondary/20 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Interested in Training with Us?</h2>
            <p className="text-muted-foreground mb-6">
              Our instructors are dedicated to helping you achieve your goals, whether you're looking to learn
              self-defense, improve your fitness, or find inner peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Schedule a Class
              </a>
              <a
                href="/schedule"
                className="bg-highlight hover:bg-highlight/90 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                View Class Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

