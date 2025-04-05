"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Target, Heart, Users, RatioIcon as Balance, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"


export default function AboutPage() {
  const storyRef = useRef(null)
  const philosophyRef = useRef(null)
  const valuesRef = useRef(null)
  const facilitiesRef = useRef(null)
  const testimonialsRef = useRef(null)
  const founderRef = useRef(null)

  const storyInView = useInView(storyRef, { once: true, threshold: 0.3 })
  const philosophyInView = useInView(philosophyRef, { once: true, threshold: 0.3 })
  const valuesInView = useInView(valuesRef, { once: true, threshold: 0.3 })
  const facilitiesInView = useInView(facilitiesRef, { once: true, threshold: 0.3 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.3 })
  const founderInView = useInView(founderRef, { once: true, threshold: 0.3 })

  const storyControls = useAnimation()
  const philosophyControls = useAnimation()
  const valuesControls = useAnimation()
  const facilitiesControls = useAnimation()
  const testimonialsControls = useAnimation()
  const founderControls = useAnimation()

  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Training at Dum Dum Academy has transformed not just my physical abilities, but my entire approach to life. The discipline and focus I've developed through karate have helped me excel in my career and personal relationships.",
      name: "Rajiv Kumar",
      role: "Karate student, 5 years",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a working mother, I was looking for a practice that would help me manage stress and stay fit. The yoga classes at Dum Dum have been a sanctuary for me, and the flexible schedule makes it possible to balance my practice with family responsibilities.",
      name: "Priya Sharma",
      role: "Yoga practitioner, 3 years",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "My son has been in the children's karate program for two years, and the transformation is remarkable. He's more confident, focused, and respectful. The instructors have a special way of connecting with kids while maintaining discipline.",
      name: "Anand Mehta",
      role: "Parent of karate student",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "After a serious back injury, I thought my active days were over. The therapeutic yoga classes at Dum Dum were recommended by my doctor, and they've been instrumental in my recovery. I'm now stronger than I was before the injury.",
      name: "Lakshmi Patel",
      role: "Therapeutic yoga student, 1 year",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The combination of karate and yoga has given me a balanced approach to fitness and mental wellbeing. The community here is supportive and diverse, with students of all ages and backgrounds training together respectfully.",
      name: "Vikram Singh",
      role: "Karate and yoga student, 4 years",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "At 65, I was hesitant to start a new physical practice, but the senior yoga classes have been perfectly adapted to my needs. I've gained mobility, balance, and a wonderful new community of friends.",
      name: "Meera Devi",
      role: "Senior yoga student, 2 years",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (storyInView) storyControls.start("visible")
    if (philosophyInView) philosophyControls.start("visible")
    if (valuesInView) valuesControls.start("visible")
    if (facilitiesInView) facilitiesControls.start("visible")
    if (testimonialsInView) testimonialsControls.start("visible")
    if (founderInView) founderControls.start("visible")
  }, [
    storyInView,
    philosophyInView,
    valuesInView,
    facilitiesInView,
    testimonialsInView,
    founderInView,
    storyControls,
    philosophyControls,
    valuesControls,
    facilitiesControls,
    testimonialsControls,
    founderControls,
  ])

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
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
              Est. 1988
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-poppins"
            >
              Our Journey of <span className="text-red">Harmony</span> and <span className="text-red">Discipline</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Dum Dum Karate and Yoga Academy blends the precision of Japanese martial arts with the serenity of Indian
              yoga practice, creating a unique path to physical prowess and inner peace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col md:flex-row gap-6 justify-center"
            >
              <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-orange" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-red">Disciplined Training</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                  <Balance className="h-5 w-5 text-orange" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-red">Mind-Body Balance</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-orange" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-red">Supportive Community</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={storyRef}>
            <motion.div
              initial="hidden"
              animate={storyControls}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-4xl font-bold text-red mb-4">Our Story</h2>
                <p className="text-lg text-muted-foreground">A tale of passion, dedication, and cultural fusion</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeIn}>
                  <h3 className="text-2xl font-bold text-red mb-4">From Humble Beginnings</h3>
                  <div className="w-20 h-1 bg-orange mb-6"></div>

                  <p className="text-muted-foreground mb-6">
                    Dum Dum Karate and Yoga Academy was founded in 1988 by Master Hiroshi Tanaka and Guru Priya Sharma,
                    who shared a vision of creating a space where Eastern philosophies could merge harmoniously. What
                    began as small classes in a local community center has evolved into a renowned institution dedicated
                    to the holistic development of mind, body, and spirit.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    The academy derives its playful name "Dum Dum" from the founders' belief that even the most serious
                    practices can be approached with lightness and joy. This philosophy has become the cornerstone of
                    our teaching methodology, making complex techniques accessible to practitioners of all ages and
                    skill levels.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="relative">
                  <div className="absolute inset-0 bg-red/10 transform rotate-3 rounded-lg"></div>
                  <div className="absolute inset-0 bg-orange/10 transform -rotate-3 rounded-lg"></div>
                  <div className="relative rounded-lg overflow-hidden z-10">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HFH0mvccBFeiiMozKBR3lpGb031kQZ.png"
                      alt="Dum Dum Academy historical photo"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-navy/5">
        <div className="container mx-auto px-4">
          <div ref={philosophyRef}>
            <motion.div
              initial="hidden"
              animate={philosophyControls}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeIn} className="relative order-2 md:order-1">
                  <div className="absolute inset-0 bg-red/10 transform rotate-3 rounded-lg"></div>
                  <div className="absolute inset-0 bg-orange/10 transform -rotate-3 rounded-lg"></div>
                  <div className="relative rounded-lg overflow-hidden z-10">
                    <div className="bg-navy/80 text-white p-6 absolute bottom-0 left-0 right-0">
                      <h3 className="text-xl font-bold mb-2">Our Academy</h3>
                      <p className="text-2xl font-bold">Where East Meets East</p>
                    </div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HFH0mvccBFeiiMozKBR3lpGb031kQZ.png"
                      alt="Dum Dum Academy philosophy"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-red mb-4">Our Philosophy</h3>
                  <div className="w-20 h-1 bg-orange mb-6"></div>

                  <p className="text-muted-foreground mb-6">
                    At Dum Dum Karate & Yoga Academy, we believe in the complementary nature of karate and yoga. While karate builds strength,
                    agility, and external discipline, yoga nurtures flexibility, balance, and internal harmony.
                    Together, they create a comprehensive practice that addresses all aspects of human potential.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Our teaching approach emphasizes not just technical proficiency but also character development. We
                    believe that the true measure of mastery is not just what you can do on the mat, but how you carry
                    yourself in everyday life.
                  </p>

                  <p className="text-muted-foreground">
                    Through consistent practice, our students develop physical strength, mental clarity, emotional
                    resilience, and spiritual awareness—creating a foundation for a balanced and fulfilling life.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

            {/* Meet Our Founder Section with Sakura Video Background */}
            <section className="py-20 bg-white relative overflow-hidden">
        {/* Sakura Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-40" // <-- Adjust this opacity for the background video
            style={{ objectFit: "cover" }}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sakura-m3JzTVEUpgaCHT3nUipSkW6d3dGCMk.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div ref={founderRef} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={founderControls}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red mb-4">Meet Our Founder</h2>
              <p className="text-lg text-muted-foreground">The visionary behind Dum Dum Karate & Yoga Academy</p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white rounded-lg shadow-xl overflow-hidden relative z-10" // Changed from semi-transparent to solid background
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    alt="TNK Sensei - Founder"
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-2xl font-bold">TNK Sensei</h3>
                      <p className="text-white/80">Founder & Chief Instructor</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="hidden md:block">
                    <h3 className="text-3xl font-bold text-red mb-2">Sensei Sujata Roy</h3>
                    <p className="text-lg text-orange font-medium mb-4">Founder & Chief Instructor</p>
                    <div className="w-20 h-1 bg-orange mb-6"></div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    With over 10 years of experience in traditional Karate, Sensei Sujata Roy has dedicated his life to
                    mastering and teaching the art. Her journey began in India where he trained under several renowned
                    masters before bringing his knowledge and passion to India.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    As the founder of Dum Dum Karate & Yoga Academy, she has trained hundreds of students, many of whom
                    have gone on to become accomplished martial artists and instructors themselves. Her teaching
                    philosophy emphasizes not just technical excellence, but also the development of character,
                    discipline, and respect.
                  </p>

                  <div className="bg-orange/10 p-4 rounded-lg">
                    <p className="text-muted-foreground italic">
                      "The ultimate aim of karate lies not in victory or defeat, but in the perfection of the character
                      of its participants."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Our Core Values Section */}
      <section className="py-20 bg-navy/5">
        <div className="container mx-auto px-4">
          <div ref={valuesRef}>
            <motion.div
              initial="hidden"
              animate={valuesControls}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-16">
                <h2 className="text-4xl font-bold text-red mb-4">Our Core Values</h2>
                <p className="text-lg text-muted-foreground">The principles that guide our practice and teachings</p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    title: "Discipline",
                    description:
                      "We cultivate self-discipline through regular practice and focused attention, building habits that serve practitioners in all areas of life.",
                    icon: Target,
                    color: "bg-orange/10",
                    iconColor: "text-orange",
                    bgColor: "bg-blue/5",
                  },
                  {
                    title: "Respect",
                    description:
                      "We honor the traditions, teachers, fellow practitioners, and ourselves through mindful actions, words, and attitudes.",
                    icon: Heart,
                    color: "bg-red/10",
                    iconColor: "text-red",
                    bgColor: "bg-pink/5",
                  },
                  {
                    title: "Community",
                    description:
                      "We foster a supportive environment where practitioners can learn, grow, and connect with like-minded individuals.",
                    icon: Users,
                    color: "bg-orange/10",
                    iconColor: "text-orange",
                    bgColor: "bg-yellow/5",
                  },
                  {
                    title: "Balance",
                    description:
                      "We seek equilibrium between strength and flexibility, effort and relaxation, tradition and innovation.",
                    icon: Balance,
                    color: "bg-red/10",
                    iconColor: "text-red",
                    bgColor: "bg-blue/5",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={fadeIn}
                    custom={index}
                    className={cn(
                      "p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2",
                      value.bgColor,
                    )}
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto",
                        value.color,
                      )}
                    >
                      <value.icon className={cn("h-8 w-8", value.iconColor)} />
                    </div>
                    <h3 className="text-xl font-bold text-red mb-3 text-center">{value.title}</h3>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Facilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={facilitiesRef}>
            <motion.div
              initial="hidden"
              animate={facilitiesControls}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-16">
                <h2 className="text-4xl font-bold text-red mb-4">Our Facilities</h2>
                <p className="text-lg text-muted-foreground">Modern amenities in a zen-inspired setting</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div variants={fadeIn} className="relative rounded-lg overflow-hidden group">
                <Image
                  src="/images/room1.jpg" // Use the path relative to the public directory
                  alt="Traditional Dojo"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Dojo/Yoga Studio</h3>
                    <p className="text-white/80 hidden group-hover:block transition-all duration-300">
                      Our main training hall features traditional wooden floors, mirrors, and authentic Japanese décor,
                      creating the perfect environment for martial arts practice.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="relative rounded-lg overflow-hidden group">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HFH0mvccBFeiiMozKBR3lpGb031kQZ.png"
                    alt="Yoga Studio"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Gym</h3>
                    <p className="text-white/80 hidden group-hover:block transition-all duration-300">
                      Our serene yoga studio offers a peaceful sanctuary with bamboo floors, natural lighting, and
                      calming aesthetics for optimal practice.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="relative rounded-lg overflow-hidden group">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M6cRXaCwwGYsYWkRg2PKGyAN3mHlBq.png"
                    alt="Meditation Garden"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Karate Field</h3>
                    <p className="text-white/80 hidden group-hover:block transition-all duration-300">
                      Our outdoor meditation space combines Japanese and Indian design elements, creating a serene
                      environment for mindfulness practice.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-navy/5 relative overflow-hidden">
        <div ref={testimonialsRef} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={testimonialsControls}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-red mb-4">Testimonials</h2>
              <p className="text-lg text-muted-foreground">What our students say about their journey with us</p>
            </motion.div>

            {/* Testimonial Carousel */}
            <div className="relative px-16">
              {/* Navigation Arrows */}
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-20 px-0 left-0">
                <motion.button
                  onClick={prevTestimonial}
                  className="bg-red/80 hover:bg-red text-white rounded-full p-4 shadow-lg -ml-6"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="bg-red/80 hover:bg-red text-white rounded-full p-4 shadow-lg -mr-6"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Testimonial Cards */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-all duration-500"
                  initial={{ x: 0 }}
                  animate={{ x: -currentTestimonial * 100 + "%" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className={cn(
                        "p-8 rounded-lg shadow-xl relative flex-shrink-0 w-full",
                        index % 2 === 0 ? "bg-pink/10" : "bg-yellow/10",
                      )}
                    >
                      {/* Japanese-style decorative elements */}
                      <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-red">
                          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      </div>

                      <div className="absolute bottom-4 left-4 w-12 h-12 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-orange">
                          <rect
                            x="20"
                            y="20"
                            width="60"
                            height="60"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </div>

                      <div className="absolute top-10 left-10 text-8xl text-orange/10 font-serif leading-none">"</div>
                      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/4 flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={96}
                              height={96}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <h4 className="font-bold text-red text-center">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground text-center">{testimonial.role}</p>
                        </div>
                        <div className="md:w-3/4">
                          <p className="text-lg text-muted-foreground italic mb-6">{testimonial.quote}</p>
                          <div className="flex justify-end">
                            <div className="h-1 w-20 bg-orange"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      currentTestimonial === index ? "bg-red scale-125" : "bg-red/30 hover:bg-red/50",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

