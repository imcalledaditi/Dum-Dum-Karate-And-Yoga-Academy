"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

// Sample gallery categories and images
const categories = [
  { id: "all", name: "All Events" },
  { id: "tournaments", name: "Tournaments" },
  { id: "training", name: "Training Sessions" },
  { id: "workshops", name: "Workshops" },
  { id: "graduations", name: "Belt Graduations" },
]

const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Tournament competition", category: "tournaments" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Karate training", category: "training" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Yoga workshop", category: "workshops" },
  { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "Belt graduation ceremony", category: "graduations" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Children's tournament", category: "tournaments" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Advanced kata training", category: "training" },
  { id: 7, src: "/placeholder.svg?height=400&width=600", alt: "Self-defense workshop", category: "workshops" },
  { id: 8, src: "/placeholder.svg?height=400&width=600", alt: "Black belt ceremony", category: "graduations" },
  { id: 9, src: "/placeholder.svg?height=400&width=600", alt: "Regional tournament", category: "tournaments" },
  { id: 10, src: "/placeholder.svg?height=400&width=600", alt: "Meditation session", category: "training" },
  { id: 11, src: "/placeholder.svg?height=400&width=600", alt: "Guest instructor workshop", category: "workshops" },
  { id: 12, src: "/placeholder.svg?height=400&width=600", alt: "Junior belt graduation", category: "graduations" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">Gallery</h1>
            <div className="w-20 h-1 bg-highlight mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Explore moments from our training sessions, tournaments, workshops, and special events.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Category sidebar */}
            <div className="md:w-1/4">
              <div className="bg-card rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-primary mb-4">Events</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                          "w-full text-left px-4 py-2 rounded-md transition-all duration-300",
                          activeCategory === category.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary text-muted-foreground",
                        )}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery grid */}
            <div className="md:w-3/4">
              <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4">{image.alt}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No images found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

