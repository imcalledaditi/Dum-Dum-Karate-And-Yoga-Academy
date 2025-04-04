"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
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

export default function KarateInformationPage() {
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

      {/* Japanese pattern background */}
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
              <span className="text-6xl text-highlight font-bold">空手</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">
              The Art of Karate
            </motion.h1>
            <motion.div variants={fadeIn} className="w-20 h-1 bg-highlight mx-auto mb-8"></motion.div>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the ancient martial art that develops body, mind, and spirit through disciplined practice and
              traditional values.
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
              alt="Karate training"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">Way of the Empty Hand</h2>
                <p className="text-lg">
                  Karate is more than just punches and kicks; it's a path to self-improvement through discipline,
                  respect, and perseverance.
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
                {/* What is Karate */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">道</span>
                    <h2 className="text-3xl font-bold text-primary">What is Karate?</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Karate is a striking art that uses punching, kicking, knee strikes, elbow strikes, and open-hand
                        techniques such as knife-hands. In some styles, grappling, throws, joint locks, restraints, and
                        vital-point strikes are also taught.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        It developed from the indigenous martial arts of the Ryukyu Kingdom under the influence of
                        Chinese martial arts, particularly Fujian White Crane. Karate is now predominantly a striking
                        art using punching, kicking, knee strikes, elbow strikes and open-hand techniques.
                      </p>
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-highlight">
                        <p className="italic text-muted-foreground">
                          "The ultimate aim of karate lies not in victory or defeat, but in the perfection of the
                          character of its participants."
                          <span className="block mt-2 text-right">- Gichin Funakoshi</span>
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
                          alt="Karate kata demonstration"
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* What is Shotokan Karate */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">松濤館</span>
                    <h2 className="text-3xl font-bold text-primary">What is Shotokan Karate?</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Shotokan Karate is one of the most widely practiced styles of karate in the world today.
                        Developed by Gichin Funakoshi, it is characterized by powerful linear techniques, deep stances,
                        and an emphasis on proper form and discipline.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        The name "Shotokan" comes from Funakoshi's pen name, "Shoto," which means "pine waves," and
                        "kan," meaning "hall" or "house." Shotokan techniques are typically practiced with three
                        elements in mind: kihon (basics), kata (forms), and kumite (sparring).
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Shotokan is known for its emphasis on powerful, long-range techniques, strong stances, and
                        disciplined approach. Training focuses on proper body alignment, efficient movement, and the
                        development of power through correct technique rather than mere physical strength.
                      </p>
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
                          alt="Shotokan Karate training"
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* The Founder: Gichin Funakoshi */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">創始者</span>
                    <h2 className="text-3xl font-bold text-primary">The Founder: Gichin Funakoshi</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Gichin Funakoshi (1868-1957), often called the "Father of Modern Karate," was the founder of
                        Shotokan Karate. Born in Okinawa, he dedicated his life to transforming karate from a regional
                        fighting art to a philosophical martial way.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        In 1922, he introduced karate to mainland Japan and later established the Japan Karate
                        Association. His teachings emphasized character development through the principles of courtesy,
                        integrity, perseverance, self-control, and indomitable spirit—values that remain central to
                        Shotokan Karate today.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Funakoshi's famous motto was "Karate ni sente nashi" (There is no first attack in karate),
                        emphasizing that karate should be used defensively and with restraint. He viewed karate not
                        merely as a fighting technique but as a way to build character and improve society.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-lg"></div>
                      <div className="absolute inset-0 bg-highlight/10 transform -rotate-3 rounded-lg"></div>
                      <div className="relative rounded-lg overflow-hidden z-10">
                        <Image
                          src="/placeholder.svg?height=600&width=400"
                          alt="Gichin Funakoshi - Founder of Shotokan Karate"
                          width={400}
                          height={600}
                          className="w-full h-auto"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-center">
                          <p className="text-sm">Gichin Funakoshi (1868-1957)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Training at Dum Dum Academy */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">稽古</span>
                    <h2 className="text-3xl font-bold text-primary">Training at Dum Dum Academy</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    At Dum Dum Karate & Yoga Academy, we practice traditional Shotokan Karate, preserving the
                    techniques, forms, and philosophy passed down through generations. Our training focuses on the three
                    pillars of karate:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-highlight">基</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Kihon (Basics)</h3>
                      <p className="text-muted-foreground">
                        Fundamental techniques that form the foundation of karate, including stances, blocks, punches,
                        and kicks.
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-highlight">型</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Kata (Forms)</h3>
                      <p className="text-muted-foreground">
                        Prearranged sequences of techniques that simulate combat against multiple opponents, teaching
                        strategy and flow.
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-highlight">組</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">Kumite (Sparring)</h3>
                      <p className="text-muted-foreground">
                        Controlled combat application of techniques against an opponent, developing timing, distance,
                        and practical skills.
                      </p>
                    </motion.div>
                  </div>

                  <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                    <Image
                      src="/placeholder.svg?height=500&width=1200"
                      alt="Karate class training"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-center">
                      <div className="p-8 text-white max-w-xl">
                        <h3 className="text-2xl font-bold mb-3">Expert Instruction</h3>
                        <p>
                          Our instructors bring decades of experience and a passion for teaching, guiding students
                          through each step of their martial arts journey.
                        </p>
                        <Link href="/instructor" className="inline-flex items-center text-highlight mt-4 group">
                          Meet our instructors
                          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Benefits of Karate */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">利点</span>
                    <h2 className="text-3xl font-bold text-primary">Benefits of Karate Training</h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Karate training offers numerous physical and mental benefits that extend far beyond self-defense
                    skills:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Physical Benefits",
                        benefits: [
                          "Improved strength, flexibility, and coordination",
                          "Enhanced cardiovascular fitness and endurance",
                          "Better balance, posture, and body awareness",
                          "Increased speed, agility, and reflexes",
                          "Weight management and overall fitness",
                        ],
                      },
                      {
                        title: "Mental & Character Benefits",
                        benefits: [
                          "Heightened focus, concentration, and mental clarity",
                          "Reduced stress and improved emotional regulation",
                          "Increased self-confidence and self-discipline",
                          "Development of perseverance and determination",
                          "Respect for self and others",
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
                        <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                          {category.benefits.map((benefit, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-3 text-muted-foreground"
                            >
                              <span className="h-2 w-2 rounded-full bg-highlight flex-shrink-0"></span>
                              <span>{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Classes for All Ages */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">クラス</span>
                    <h2 className="text-3xl font-bold text-primary">Classes for All Ages</h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    We offer karate classes for all age groups and skill levels, each designed to meet the specific
                    needs and capabilities of our students:
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        title: "Children (5-12 years)",
                        description:
                          "Focus on basic techniques, coordination, discipline, and fun learning experiences.",
                        image: "/placeholder.svg?height=300&width=400",
                        color: "from-blue-50 to-transparent",
                      },
                      {
                        title: "Teens (13-17 years)",
                        description:
                          "More advanced techniques, kata, and controlled sparring with emphasis on positive development.",
                        image: "/placeholder.svg?height=300&width=400",
                        color: "from-green-50 to-transparent",
                      },
                      {
                        title: "Adults (18+ years)",
                        description:
                          "Comprehensive training in all aspects of karate, from basics to advanced techniques.",
                        image: "/placeholder.svg?height=300&width=400",
                        color: "from-amber-50 to-transparent",
                      },
                      {
                        title: "Seniors",
                        description: "Modified training focusing on health, flexibility, and practical self-defense.",
                        image: "/placeholder.svg?height=300&width=400",
                        color: "from-purple-50 to-transparent",
                      },
                    ].map((ageGroup, i) => (
                      <motion.div
                        key={ageGroup.title}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-card rounded-lg shadow-md overflow-hidden dark:bg-card"
                      >
                        <div className="relative h-48">
                          <Image
                            src={ageGroup.image || "/placeholder.svg"}
                            alt={ageGroup.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className={cn("p-4 bg-gradient-to-b", ageGroup.color)}>
                          <h3 className="text-lg font-bold text-primary mb-2">{ageGroup.title}</h3>
                          <p className="text-sm text-muted-foreground">{ageGroup.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-border text-center">
                    <h3 className="text-xl font-bold text-primary mb-3">Ready to Begin Your Karate Journey?</h3>
                    <p className="text-muted-foreground mb-6">
                      Join us for a free trial class and experience the benefits of karate training firsthand.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-highlight text-white px-6 py-3 rounded-lg hover:bg-highlight/90 transition-colors"
                    >
                      Schedule a Trial Class
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>

                {/* Belt System */}
                <motion.div variants={fadeIn} className="mb-16">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl text-highlight font-bold mr-4">帯</span>
                    <h2 className="text-3xl font-bold text-primary">Belt System</h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Our academy follows the traditional Shotokan Karate belt system, which marks a student's progress:
                  </p>

                  <div className="relative overflow-hidden rounded-lg shadow-lg p-6 bg-gradient-to-r from-card to-background">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-highlight/10 via-transparent to-transparent"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

                      <p className="mt-8 text-muted-foreground text-center">
                        Progress through the ranks is based on skill development, dedication, and demonstrated
                        understanding of karate principles. Each promotion represents significant growth in both
                        technical ability and character.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Closing */}
                <motion.div variants={fadeIn}>
                  <div className="text-center">
                    <p className="text-lg text-muted-foreground mb-6">
                      Through dedicated practice, our students develop not only physical skills but also mental
                      discipline, focus, and character—embodying the true spirit of karate-do, "the way of the empty
                      hand."
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

