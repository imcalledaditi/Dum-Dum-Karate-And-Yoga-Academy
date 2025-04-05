"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"


export default function GymProgram() {
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
              Open to All Members
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-poppins"
            >
              Gym <span className="text-primary">Facilities</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Complement your martial arts and yoga training with our fully-equipped gym facilities designed to enhance
              strength, endurance, and overall fitness.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div ref={ref} className="max-w-6xl mx-auto">
            <motion.div initial="hidden" animate={controls} variants={staggerContainer}>
              {/* Facility Overview */}
              <motion.div variants={fadeIn} className="mb-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Facility Overview</h2>
                    <div className="w-20 h-1 bg-highlight mb-6"></div>

                    <p className="text-muted-foreground mb-6">
                      Our gym facility is available to all members of Dum Dum Karate & Yoga Academy. Whether you're
                      looking to supplement your martial arts training, enhance your yoga practice, or simply improve
                      your overall fitness, our gym provides all the equipment and space you need.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      The gym features traditional training equipment alongside specialized apparatus designed
                      specifically for martial artists. With karate mats covering a portion of the floor, you can
                      seamlessly transition between strength training and technique practice.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Dumbbell className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Quality Equipment</h3>
                          <p className="text-sm text-muted-foreground">Modern machines & free weights</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Extended Hours</h3>
                          <p className="text-sm text-muted-foreground">Open early morning to late evening</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Inclusive Environment</h3>
                          <p className="text-sm text-muted-foreground">Welcoming to all fitness levels</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-highlight shrink-0 mt-1" />
                        <div>
                          <h3 className="font-medium text-primary">Specialized Training</h3>
                          <p className="text-sm text-muted-foreground">Equipment for martial artists</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-white group">
                        Start Your Fitness Journey
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
                        alt="Gym facility with equipment"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Equipment & Facilities */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Equipment & Facilities</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Strength Training Area",
                      description:
                        "Our strength training section includes free weights, benches, squat racks, and cable machines to help you build functional strength that complements your martial arts or yoga practice.",
                      image: "/placeholder.svg?height=300&width=400",
                      features: ["Dumbbells (2-50kg)", "Olympic barbells", "Power racks", "Cable machines"],
                    },
                    {
                      title: "Cardio Zone",
                      description:
                        "Improve your endurance and cardiovascular health with our selection of cardio equipment, perfect for warming up before training or dedicated cardio sessions.",
                      image: "/placeholder.svg?height=300&width=400",
                      features: ["Treadmills", "Ellipticals", "Stationary bikes", "Rowing machines"],
                    },
                    {
                      title: "Functional Training Space",
                      description:
                        "Our functional training area features open space with karate mats, allowing for bodyweight exercises, martial arts drills, and specialized training with equipment designed for combat sports.",
                      image: "/placeholder.svg?height=300&width=400",
                      features: ["Karate mats", "Battle ropes", "Medicine balls", "Resistance bands"],
                    },
                  ].map((area, index) => (
                    <motion.div
                      key={area.title}
                      variants={fadeIn}
                      custom={index}
                      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="relative h-48">
                        <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                        <p className="text-muted-foreground mb-4">{area.description}</p>
                        <h4 className="font-medium text-primary mb-2">Equipment:</h4>
                        <ul className="mb-4">
                          {area.features.map((feature, i) => (
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

              {/* Training Programs */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Training Programs</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                    In addition to open gym access, we offer specialized training programs designed to complement your
                    martial arts or yoga practice. These programs are developed by our expert instructors to enhance
                    specific aspects of your performance.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {[
                      {
                        title: "Martial Arts Conditioning",
                        description:
                          "This program focuses on building the specific strength, power, and endurance needed for martial arts. Exercises target core stability, explosive power, and functional movement patterns used in karate and self-defense.",
                        schedule: "Tuesdays & Thursdays, 6:00 PM - 7:00 PM",
                        instructor: "Rajiv Kumar",
                      },
                      {
                        title: "Yoga Strength Complement",
                        description:
                          "Designed for yoga practitioners, this program develops the strength needed to advance in challenging yoga poses. Focus areas include upper body and core strength, balance, and stability.",
                        schedule: "Mondays & Wednesdays, 5:30 PM - 6:30 PM",
                        instructor: "Priya Sharma",
                      },
                      {
                        title: "Functional Fitness Circuit",
                        description:
                          "This high-intensity circuit training combines strength, cardio, and flexibility exercises in a time-efficient workout. Perfect for overall fitness and conditioning for any physical discipline.",
                        schedule: "Fridays, 5:00 PM - 6:00 PM & Saturdays, 10:00 AM - 11:00 AM",
                        instructor: "Ananya Das",
                      },
                      {
                        title: "Recovery & Mobility",
                        description:
                          "This program focuses on active recovery, flexibility, and mobility to prevent injuries and enhance performance. Ideal for active practitioners looking to improve recovery between training sessions.",
                        schedule: "Sundays, 11:00 AM - 12:00 PM",
                        instructor: "Sujata Roy",
                      },
                    ].map((program, index) => (
                      <motion.div
                        key={program.title}
                        variants={fadeIn}
                        custom={index}
                        className="bg-primary/5 p-6 rounded-lg"
                      >
                        <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                        <p className="text-muted-foreground mb-4">{program.description}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-highlight" />
                          <p className="text-sm font-medium">{program.schedule}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-highlight" />
                          <p className="text-sm font-medium">Instructor: {program.instructor}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-highlight/10 p-4 rounded-lg border-l-4 border-highlight">
                    <p className="text-muted-foreground italic">
                      <strong>Note:</strong> All training programs are included with your membership at no additional
                      cost. Space may be limited, so we recommend signing up in advance at the front desk or through our
                      mobile app.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Personal Training */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Personal Training</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-lg"></div>
                    <div className="absolute inset-0 bg-highlight/10 transform -rotate-3 rounded-lg"></div>
                    <div className="relative rounded-lg overflow-hidden z-10">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Personal training session"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Personalized Guidance</h3>
                    <p className="text-muted-foreground mb-6">
                      For those seeking more individualized attention, our certified personal trainers offer one-on-one
                      sessions tailored to your specific goals. Whether you're looking to enhance your martial arts
                      performance, complement your yoga practice, or improve general fitness, our trainers will design a
                      program specifically for you.
                    </p>

                    <h4 className="font-bold text-primary mb-2">Our Personal Training Includes:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-highlight rounded-full mt-2"></span>
                        <p className="text-muted-foreground">
                          Initial fitness assessment and goal-setting consultation
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-highlight rounded-full mt-2"></span>
                        <p className="text-muted-foreground">
                          Customized training program designed for your specific needs
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-highlight rounded-full mt-2"></span>
                        <p className="text-muted-foreground">Proper technique instruction and form correction</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-highlight rounded-full mt-2"></span>
                        <p className="text-muted-foreground">Nutritional guidance to support your training goals</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-highlight rounded-full mt-2"></span>
                        <p className="text-muted-foreground">Regular progress assessments and program adjustments</p>
                      </li>
                    </ul>

                    <div className="bg-card p-4 rounded-lg shadow-sm mb-6">
                      <h4 className="font-bold text-primary mb-2">Pricing:</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Single Session</span>
                          <span className="font-medium">₹1,500</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">5-Session Package</span>
                          <span className="font-medium">₹7,000 (₹1,400 per session)</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">10-Session Package</span>
                          <span className="font-medium">₹13,000 (₹1,300 per session)</span>
                        </li>
                      </ul>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-white group">
                        Schedule a Consultation
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Testimonials */}
              <motion.div variants={fadeIn} className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">What Our Members Say</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-10"></div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      quote:
                        "Having access to the gym as part of my karate membership has been fantastic. The specialized equipment has helped me develop the specific strength I need for my techniques, and I've seen a significant improvement in my performance.",
                      name: "Arjun Singh",
                      role: "Karate student, 2 years",
                    },
                    {
                      quote:
                        "As a yoga practitioner, I was looking for ways to build the strength needed for advanced poses. The Yoga Strength Complement program has been perfect—it's designed specifically for yogis and has helped me progress much faster.",
                      name: "Lakshmi Patel",
                      role: "Yoga student, 1 year",
                    },
                    {
                      quote:
                        "The personal training sessions have been transformative. My trainer understands the specific demands of martial arts and has designed a program that addresses my weaknesses while building on my strengths. Worth every rupee!",
                      name: "Vikram Mehta",
                      role: "Self-defense student, 6 months",
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
                  <h2 className="text-2xl font-bold text-primary mb-4">Ready to Enhance Your Training?</h2>
                  <p className="text-muted-foreground mb-6">
                    Our gym facilities are included with all Karate and Yoga memberships at no additional cost. Join
                    today and take your training to the next level!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                        Join Dum Dum Academy
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

