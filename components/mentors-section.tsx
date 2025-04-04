"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export function MentorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 font-poppins">Our Team</h2>
          <div className="w-20 h-1 bg-highlight mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Meet the dedicated masters who guide our students on their martial arts journey. Our team brings decades of
            experience and a passion for teaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mentors Section */}
          <div
            ref={ref}
            className={cn(
              "transition-all duration-1000",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-poppins text-center">Our Mentors</h3>
            <div className="bg-card rounded-lg overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  {/* Placeholder for TNK's image */}
                  <div className="h-80 md:h-full relative">
                    <Image src="/placeholder.svg?height=400&width=300" alt="TNK Sensei" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-poppins">TNK Sensei</h3>
                  <div className="w-16 h-1 bg-highlight mb-4"></div>
                  <p className="text-muted-foreground mb-4">
                    With over 30 years of experience in traditional Karate, TNK Sensei has dedicated his life to
                    mastering and teaching the art. As the founder of Dum Dum Karate & Yoga Academy, he has trained
                    thousands of students, many of whom have gone on to become accomplished martial artists and
                    instructors themselves.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <h4 className="font-bold text-primary">Qualifications</h4>
                      <p className="text-sm text-muted-foreground">
                        7th Dan Black Belt, International Certified Instructor
                      </p>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <h4 className="font-bold text-primary">Specialization</h4>
                      <p className="text-sm text-muted-foreground">Traditional Shotokan Karate, Kata, Self-Defense</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructors Section */}
          <div
            className={cn(
              "transition-all duration-1000 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-poppins text-center">Our Instructors</h3>
            <div className="bg-card rounded-lg overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <div className="h-80 md:h-full relative">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Sujata Roy Sensei"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-poppins">Sujata Roy Sensei</h3>
                  <div className="w-16 h-1 bg-highlight mb-4"></div>
                  <p className="text-muted-foreground mb-4">
                    Sujata Roy Sensei is a highly accomplished instructor with over 20 years of experience in Karate.
                    She has trained numerous students who have gone on to win national and international competitions.
                    Her teaching approach emphasizes discipline, respect, and technical precision.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <h4 className="font-bold text-primary">Qualifications</h4>
                      <p className="text-sm text-muted-foreground">5th Dan Black Belt, National Champion</p>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <h4 className="font-bold text-primary">Specialization</h4>
                      <p className="text-sm text-muted-foreground">Kumite, Women's Self-Defense, Youth Training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

