"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Heart, Leaf, Moon, Sun, Wind } from "lucide-react"
import { cn } from "@/lib/utils"

// Animation variants
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

export default function YogaInformationPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Decorative background - Lotus mandala pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{ backgroundImage: "url('/placeholder.svg?height=200&width=200')", backgroundSize: "200px" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-12">
            <motion.div variants={fadeIn} className="inline-block mb-4">
              <span className="text-6xl text-highlight font-bold">योग</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
              The Path of Yoga
            </motion.h1>
            <motion.div variants={fadeIn} className="w-20 h-1 bg-highlight mx-auto mb-8"></motion.div>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the ancient practice that unites body, mind, and spirit through movement, breath, and meditation.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative h-96 w-full mb-12 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Yoga practice"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">Union of Mind, Body & Spirit</h2>
                <p className="text-lg">
                  Yoga is a holistic practice that cultivates balance, strength, and inner peace through physical
                  postures, breathwork, and meditation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div ref={ref}>
              <motion.div
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
              >
                {/* What is Yoga */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">ॐ</span>
                    <h2 className="text-3xl font-bold text-primary">What is Yoga?</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Yoga is a holistic discipline that includes physical postures (asanas), breathing techniques
                        (pranayama), meditation, and ethical principles. It aims to create harmony between the body,
                        mind, and spirit, promoting physical health, mental clarity, and spiritual growth.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        The word "yoga" comes from the Sanskrit root "yuj," meaning to join or unite, symbolizing the
                        union of individual consciousness with universal consciousness. With origins dating back over
                        5,000 years in Northern India, yoga has evolved into various styles and approaches while
                        maintaining its core essence.
                      </p>
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-highlight">
                        <p className="italic text-muted-foreground">
                          "Yoga is the journey of the self, through the self, to the self."
                          <span className="block mt-2 text-right">- The Bhagavad Gita</span>
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-lg"></div>
                      <div className="absolute inset-0 bg-highlight/10 transform -rotate-3 rounded-lg"></div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 rounded-lg overflow-hidden shadow-lg"
                      >
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Yoga meditation"
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Yoga at Dum Dum Academy */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">अभ्यास</span>
                    <h2 className="text-3xl font-bold text-primary">Yoga at Dum Dum Academy</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    At Dum Dum Karate & Yoga Academy, we practice a holistic approach to yoga that honors its ancient
                    traditions while making it accessible to modern practitioners. Our yoga program integrates:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sun className="h-8 w-8 text-highlight" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Asanas (Postures)</h3>
                      <p className="text-muted-foreground">
                        Physical exercises that improve strength, flexibility, and balance while preparing the body for
                        meditation.
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Wind className="h-8 w-8 text-highlight" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Pranayama (Breathing)</h3>
                      <p className="text-muted-foreground">
                        Breathing techniques that enhance vital energy and mental clarity by regulating the flow of
                        prana.
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Moon className="h-8 w-8 text-highlight" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Meditation</h3>
                      <p className="text-muted-foreground">
                        Practices that cultivate mindfulness and inner peace by quieting the fluctuations of the mind.
                      </p>
                    </motion.div>
                  </div>

                  <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                    <Image
                      src="/placeholder.svg?height=500&width=1200"
                      alt="Yoga class"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-center">
                      <div className="p-8 text-white max-w-xl">
                        <h3 className="text-2xl font-bold mb-3">Expert Guidance</h3>
                        <p>
                          Our certified yoga instructors bring years of experience and a deep understanding of yoga's
                          physical and philosophical aspects to each class.
                        </p>
                        <Link href="/instructor" className="inline-flex items-center text-highlight mt-4 group">
                          Meet our instructors
                          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Benefits of Yoga */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">लाभ</span>
                    <h2 className="text-3xl font-bold text-primary">Benefits of Yoga Practice</h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Regular yoga practice offers numerous benefits for physical, mental, and spiritual wellbeing:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Physical Benefits",
                        icon: <Heart className="h-8 w-8 text-highlight" />,
                        benefits: [
                          "Increased flexibility, strength, and balance",
                          "Improved posture and body alignment",
                          "Enhanced respiratory and cardiovascular function",
                          "Relief from chronic pain and tension",
                          "Better sleep quality and digestion",
                        ],
                      },
                      {
                        title: "Mental & Emotional Benefits",
                        icon: <Leaf className="h-8 w-8 text-highlight" />,
                        benefits: [
                          "Reduced stress, anxiety, and depression",
                          "Improved focus, concentration, and mental clarity",
                          "Enhanced emotional regulation and resilience",
                          "Greater self-awareness and mindfulness",
                          "Overall sense of calm and wellbeing",
                        ],
                      },
                    ].map((category, i) => (
                      <motion.div
                        key={category.title}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          "bg-card p-6 rounded-lg shadow-md relative overflow-hidden",
                          i === 0
                            ? "bg-gradient-to-br from-primary/5 to-transparent"
                            : "bg-gradient-to-br from-highlight/5 to-transparent",
                        )}
                      >
                        <div className="flex items-center mb-4">
                          <div className="mr-3">{category.icon}</div>
                          <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.benefits.map((benefit, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <span className="h-2 w-2 rounded-full bg-highlight flex-shrink-0 mt-2"></span>
                              <span>{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-4 text-center">Yoga for Martial Artists</h3>
                    <p className="text-muted-foreground mb-6 text-center">
                      For our karate students, yoga provides complementary training that enhances:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        "Flexibility for higher kicks and deeper stances",
                        "Balance for more stable techniques",
                        "Core strength for powerful movements",
                        "Breath control for better endurance",
                        "Mental focus for improved performance",
                        "Recovery and injury prevention",
                      ].map((benefit, i) => (
                        <div key={i} className="bg-secondary/20 p-3 rounded-lg text-sm text-muted-foreground">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Classes for All Levels */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">वर्ग</span>
                    <h2 className="text-3xl font-bold text-primary">Classes for All Levels</h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    We offer yoga classes for practitioners of all levels, ensuring everyone can find a practice that
                    meets their needs and goals:
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        title: "Beginner",
                        description: "Introduction to basic postures, breathing, and principles for those new to yoga.",
                        image: "/placeholder.svg?height=300&width=400",
                        color: "from-blue-50 to-transparent",
                      },
                      {
                        title: "Intermediate",
                        description:
                          "More challenging postures and sequences, deeper breathing practices for experienced practitioners.",
                        image: "/placeholder.svg?height=300&width=400",
                        color: "from-green-50 to-transparent",
                      },
                      {
                        title: "Advanced",
                        description:
                          "Complex postures, advanced pranayama, and meditation techniques for dedicated yogis.",
                        image: "/placeholder.svg?height=300&width=400",
                        color: "from-amber-50 to-transparent",
                      },
                      {
                        title: "Therapeutic",
                        description:
                          "Modified practices for those with specific health concerns or recovering from injuries.",
                        image: "/placeholder.svg?height=300&width=400",
                        color: "from-purple-50 to-transparent",
                      },
                    ].map((level, i) => (
                      <motion.div
                        key={level.title}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-card rounded-lg shadow-md overflow-hidden dark:bg-card"
                      >
                        <div className="relative h-48">
                          <Image
                            src={level.image || "/placeholder.svg"}
                            alt={level.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className={cn("p-4 bg-gradient-to-b", level.color)}>
                          <h3 className="text-lg font-bold text-primary mb-2">{level.title}</h3>
                          <p className="text-sm text-muted-foreground">{level.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-border text-center">
                    <h3 className="text-xl font-bold text-primary mb-3">Ready to Begin Your Yoga Journey?</h3>
                    <p className="text-muted-foreground mb-6">
                      Join us for a class and experience the transformative benefits of yoga practice.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-highlight text-white px-6 py-3 rounded-lg hover:bg-highlight/90 transition-colors"
                    >
                      Schedule a Class
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>

                {/* Styles of Yoga */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">शैली</span>
                    <h2 className="text-3xl font-bold text-primary">Styles of Yoga</h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Our academy offers various styles of yoga to meet different needs and preferences:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Hatha Yoga",
                        description:
                          "A traditional approach focusing on basic postures and breathing, perfect for beginners seeking a gentle introduction to yoga.",
                        image: "/placeholder.svg?height=300&width=500",
                      },
                      {
                        title: "Vinyasa Yoga",
                        description:
                          "A dynamic practice linking movement with breath in flowing sequences that build strength, flexibility, and endurance.",
                        image: "/placeholder.svg?height=300&width=500",
                      },
                      {
                        title: "Yin Yoga",
                        description:
                          "A slow-paced style with postures held for longer periods, targeting the connective tissues and promoting deep relaxation.",
                        image: "/placeholder.svg?height=300&width=500",
                      },
                      {
                        title: "Restorative Yoga",
                        description:
                          "A gentle, relaxing practice using props for support, perfect for stress reduction and recovery from illness or injury.",
                        image: "/placeholder.svg?height=300&width=500",
                      },
                      {
                        title: "Kundalini Yoga",
                        description:
                          "Blends physical postures, breath work, chanting, and meditation to awaken the dormant energy (kundalini) at the base of the spine and enhance spiritual awareness.",
                        image: "/placeholder.svg?height=300&width=500",
                      },
                      {
                        title: "Ashtanga Yoga",
                        description:
                          "A structured, rigorous series of postures performed in a fixed sequence that progressively builds power, stamina, and focus.",
                        image: "/placeholder.svg?height=300&width=500",
                      },
                      {
                        title: "Power Yoga",
                        description:
                          "A more athletic, vigorous style derived from Ashtanga, focused on building strength and endurance while burning calories in a dynamic, high-energy practice.",
                        image: "/placeholder.svg?height=300&width=500",
                      },
                      {
                        title: "Iyengar Yoga",
                        description:
                          "Emphasizes precise alignment and the use of props (like blocks and straps) to support proper form, making it excellent for deepening your practice and addressing injuries.",
                        image: "/placeholder.svg?height=300&width=500",
                      },
                    ].map((style, i) => (
                      <motion.div
                        key={style.title}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="group"
                      >
                        <div className="bg-card rounded-lg overflow-hidden shadow-md">
                          <div className="relative h-48">
                            <Image
                              src={style.image || "/placeholder.svg"}
                              alt={style.title}
                              fill
                              className="object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end">
                              <h3 className="text-xl font-bold text-white p-4">{style.title}</h3>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-muted-foreground">{style.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Closing */}
                <motion.div variants={fadeIn}>
                  <div className="text-center">
                    <p className="text-lg text-muted-foreground mb-6">
                      Through regular practice, our students experience improved physical health, reduced stress,
                      enhanced mental focus, and a deeper connection to themselves—embodying the true essence of yoga as
                      a path to holistic wellbeing.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Link
                        href="/schedule"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        View Class Schedule
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-highlight hover:bg-highlight/90 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

