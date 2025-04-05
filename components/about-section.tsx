"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

import aboutOurAcademy from '../images/aboutouracademy.jpg';


export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-navy/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 font-poppins">About Our Academy</h2>
            <div className="w-20 h-1 bg-highlight mb-6"></div>
            <p className="text-muted-foreground mb-6">
              Founded in 1978, Dum Dum Karate & Yoga Academy has been a cornerstone of martial arts excellence in
              Kolkata for over four decades. Our academy is dedicated to preserving traditional martial arts while
              incorporating modern training techniques.
            </p>
            <p className="text-muted-foreground mb-6">
              We believe in developing not just physical strength, but mental discipline, focus, and character. Our
              comprehensive programs are designed to help students of all ages achieve their full potential through
              consistent practice and expert guidance.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-primary text-xl">500+</h3>
                <p className="text-sm text-muted-foreground">Students Trained</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-primary text-xl">100+</h3>
                <p className="text-sm text-muted-foreground">Tournament Medals</p>
              </div>
            </div>
            <Link href="/about">
              <Button className="group">
                More About Us
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative md:w-10/12 mx-auto"
          >
            <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-lg"></div>
            <div className="absolute inset-0 bg-highlight/10 transform -rotate-3 rounded-lg"></div>
            <div className="relative rounded-lg overflow-hidden z-10">
            <Image
              src={aboutOurAcademy}
              alt="Karate training at Dum Dum Academy"
              width={600}
              height={400}
              className="w-full h-auto"
            />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

