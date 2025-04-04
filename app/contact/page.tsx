"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen bg-background relative">
      <Navbar />

      {/* Japanese-style decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-0 w-72 h-72 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-0 w-96 h-96 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10,10 Q50,0 90,10 T170,20"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-highlight"
            />
            <path
              d="M10,30 Q50,20 90,30 T170,40"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-highlight"
            />
            <path
              d="M10,50 Q50,40 90,50 T170,60"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-highlight"
            />
            <path
              d="M10,70 Q50,60 90,70 T170,80"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-highlight"
            />
            <path
              d="M10,90 Q50,80 90,90 T170,100"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-highlight"
            />
          </svg>
        </div>
      </div>

      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins inline-flex items-center">
                <span className="mr-3 text-3xl text-highlight">連絡</span>
                Contact Us
              </h1>
              <div className="w-20 h-1 bg-highlight mx-auto mb-6"></div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We are here to answer any questions you may have about our academy. Reach out to us and we'll respond as
                soon as we can.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                variants={itemVariants}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-highlight/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="bg-highlight/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Phone className="h-7 w-7 text-highlight" />
                  </div>
                  <h2 className="text-xl font-bold text-center mb-2">Phone</h2>
                  <p className="text-center text-muted-foreground mb-2">Call us directly</p>
                  <div className="text-center font-medium">
                    <p>+91 9830355608</p>
                    <p>+91 9830355603</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-highlight/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="bg-highlight/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Mail className="h-7 w-7 text-highlight" />
                  </div>
                  <h2 className="text-xl font-bold text-center mb-2">Email</h2>
                  <p className="text-center text-muted-foreground mb-2">Write to us anytime</p>
                  <div className="text-center font-medium">
                    <p>sujatamukherjeeroy@gmail.com</p>
                    <p>info@dumdum-karate.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-highlight/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="bg-highlight/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="h-7 w-7 text-highlight" />
                  </div>
                  <h2 className="text-xl font-bold text-center mb-2">Visit Us</h2>
                  <p className="text-center text-muted-foreground mb-2">Main Dojo Location</p>
                  <div className="text-center font-medium">
                    <p>192, Vivekananda Road</p>
                    <p>Matkal Panchabati Tala</p>
                    <p>Kolkata - 700065, West Bengal</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 bg-highlight/5 rounded-lg transform -rotate-3"></div>
                <div className="relative bg-card p-8 rounded-lg shadow-lg z-10">
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                    <span className="text-highlight mr-2">問い合わせ</span>
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input type="text" placeholder="Your Name" className="pl-10" required />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input type="email" placeholder="Your Email" className="pl-10" required />
                      </div>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-5 h-5 w-5 text-muted-foreground" />
                        <Textarea placeholder="Your Message" className="pl-10 min-h-[150px]" required />
                      </div>
                      <Button type="submit" className="w-full bg-highlight text-white hover:bg-highlight/90 group">
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      {formSubmitted && (
                        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
                          Thank you for your message! We'll get back to you soon.
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="rounded-lg overflow-hidden shadow-lg h-[400px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.21637152434!2d88.3773!3d22.5957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM1JzQ0LjUiTiA4OMKwMjInMzguMyJF!5e0!3m2!1sen!2sin!4v1601982220127!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Academy location map"
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none border-4 border-highlight/20 rounded-lg"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

