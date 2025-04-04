"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Clock, ChevronRight, Calendar, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Declare google variable
declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export default function DojoPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedDojo, setSelectedDojo] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [isPanelOpen, setIsPanelOpen] = useState(true)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const dojoLocations = [
    {
      id: 1,
      name: "Matkal Dojo",
      address: "192, Vivekananda Road, Panchabati Tala Rd, near Mathkol, Kolkata, West Bengal 700065",
      phone: "+91 9830355608",
      hours: "Sunday & Thursday: 4PM-6PM & 6PM-8PM",
      classes: ["Karate", "Yoga"],
      lat: 22.5957,
      lng: 88.3773,
    },
    {
      id: 2,
      name: "Kamalapur Sporting & Literally Club",
      address: "Jessore Rd, East Kamala Pur, Motilal Colony, Rajbari, Dum Dum, North Dumdum, West Bengal 700028",
      phone: "+91 9830355603",
      hours: "Tuesday & Friday: 7PM-8:30PM",
      classes: ["Karate"],
      lat: 22.6257,
      lng: 88.4073,
    },
    {
      id: 3,
      name: "Adarsha Sangha Club",
      address: "102, 4, Balaka Natun Bazar, Bediapara, North Dum Dum, Dum Dum, Kolkata - 700028",
      phone: "+91 9830355604",
      hours: "Monday & Wednesday: 6:30PM-8PM",
      classes: ["Karate"],
      lat: 22.6357,
      lng: 88.4173,
    },
    {
      id: 4,
      name: "Deshbondhu Sporting Club",
      address: "Deshbondhu Road, Kolkata, West Bengal",
      phone: "+91 9830355605",
      hours: "Monday & Wednesday: 6:30PM-8PM",
      classes: ["Karate"],
      instructor: "Susmita Mondal",
      lat: 22.6157,
      lng: 88.3973,
    },
    {
      id: 5,
      name: "Nobokalol Club",
      address: "Nobokalol Street, Kolkata, West Bengal",
      phone: "+91 9830355606",
      hours: "Tuesday & Thursday: 5PM-8PM",
      classes: ["Karate"],
      instructor: "Moni Sarkar Paul",
      lat: 22.6057,
      lng: 88.4273,
    },
  ]

  // Initialize map when component mounts
  useEffect(() => {
    // Check if Google Maps API is available
    if (typeof window !== "undefined" && window.google && window.google.maps) {
      initializeMap()
    } else {
      // Load Google Maps API if not already loaded
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
      script.async = true
      script.defer = true

      window.initMap = initializeMap

      document.head.appendChild(script)
    }

    function initializeMap() {
      const mapElement = document.getElementById("map")
      if (!mapElement) return

      // Create map centered on Kolkata
      const map = new window.google.maps.Map(mapElement, {
        center: { lat: 22.6057, lng: 88.4073 },
        zoom: 12,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#7c93a3" }, { lightness: "-10" }],
          },
          {
            featureType: "administrative.country",
            elementType: "geometry",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [{ color: "#ffffff" }, { visibility: "on" }, { weight: 1 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f9f9f9" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e8e8e8" }, { visibility: "on" }, { weight: 1 }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#e6f0d7" }, { visibility: "on" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#f5d6d6" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#d1e0e8" }],
          },
        ],
      })

      // Add markers for each dojo
      const markers = dojoLocations.map((dojo) => {
        const marker = new window.google.maps.Marker({
          position: { lat: dojo.lat, lng: dojo.lng },
          map: map,
          title: dojo.name,
          animation: window.google.maps.Animation.DROP,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#d03e6c",
            fillOpacity: 0.8,
            strokeWeight: 2,
            strokeColor: "#ffffff",
          },
        })

        // Create info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="margin: 0 0 8px; color: #d03e6c; font-weight: bold;">${dojo.name}</h3>
              <p style="margin: 0 0 5px; font-size: 12px;">${dojo.address}</p>
              <p style="margin: 0 0 5px; font-size: 12px;">${dojo.phone}</p>
              <p style="margin: 0; font-size: 12px;">${dojo.hours}</p>
            </div>
          `,
        })

        // Add click listener to marker
        marker.addListener("click", () => {
          // Close any open info windows
          markers.forEach((m) => m.infoWindow && m.infoWindow.close())

          // Open this info window
          infoWindow.open(map, marker)

          // Store reference to info window
          marker.infoWindow = infoWindow

          // Set selected dojo
          setSelectedDojo(dojo)

          // Center map on marker
          map.panTo(marker.getPosition())
          map.setZoom(14)
        })

        // Store info window with marker
        marker.infoWindow = null

        return marker
      })

      setMapLoaded(true)
    }

    // Create a fallback map display if Google Maps fails to load
    const createFallbackMap = () => {
      const mapElement = document.getElementById("map")
      if (!mapElement) return

      // Create a simple fallback map display
      mapElement.innerHTML = ""
      mapElement.style.position = "relative"
      mapElement.style.overflow = "hidden"

      const mapFallback = document.createElement("div")
      mapFallback.style.width = "100%"
      mapFallback.style.height = "100%"
      mapFallback.style.backgroundColor = "#f0f0f0"
      mapFallback.style.display = "flex"
      mapFallback.style.alignItems = "center"
      mapFallback.style.justifyContent = "center"
      mapFallback.style.flexDirection = "column"
      mapFallback.style.padding = "20px"
      mapFallback.style.textAlign = "center"

      const mapTitle = document.createElement("h3")
      mapTitle.textContent = "Dojo Locations in Kolkata"
      mapTitle.style.marginBottom = "20px"
      mapTitle.style.color = "#d03e6c"
      mapTitle.style.fontSize = "24px"

      const mapDescription = document.createElement("p")
      mapDescription.textContent =
        "Our dojos are located throughout Kolkata for your convenience. Please see the detailed locations below."
      mapDescription.style.marginBottom = "20px"
      mapDescription.style.maxWidth = "600px"

      // Create a simple visual representation of the locations
      const mapVisual = document.createElement("div")
      mapVisual.style.width = "100%"
      mapVisual.style.height = "300px"
      mapVisual.style.position = "relative"
      mapVisual.style.border = "2px solid #d03e6c"
      mapVisual.style.borderRadius = "8px"
      mapVisual.style.backgroundColor = "#fff"

      dojoLocations.forEach((dojo) => {
        const marker = document.createElement("div")
        marker.style.position = "absolute"
        marker.style.width = "20px"
        marker.style.height = "20px"
        marker.style.borderRadius = "50%"
        marker.style.backgroundColor = "#d03e6c"
        marker.style.transform = "translate(-50%, -50%)"
        marker.style.cursor = "pointer"

        // Position markers based on relative coordinates
        const left = ((dojo.lng - 88.37) / 0.1) * 80 + 10
        const top = ((22.64 - dojo.lat) / 0.1) * 80 + 10

        marker.style.left = `${left}%`
        marker.style.top = `${top}%`

        marker.title = dojo.name

        marker.addEventListener("click", () => {
          setSelectedDojo(dojo)
        })

        const label = document.createElement("div")
        label.textContent = dojo.name
        label.style.position = "absolute"
        label.style.top = "25px"
        label.style.left = "0"
        label.style.width = "100px"
        label.style.transform = "translateX(-40px)"
        label.style.fontSize = "12px"
        label.style.fontWeight = "bold"
        label.style.color = "#333"

        marker.appendChild(label)
        mapVisual.appendChild(marker)
      })

      mapFallback.appendChild(mapTitle)
      mapFallback.appendChild(mapDescription)
      mapFallback.appendChild(mapVisual)
      mapElement.appendChild(mapFallback)

      setMapLoaded(true)
    }

    // Set a timeout to create fallback map if Google Maps doesn't load
    const fallbackTimeout = setTimeout(createFallbackMap, 5000)

    return () => {
      clearTimeout(fallbackTimeout)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative">
        {/* Schedule Note - Pop out from right side with toggle */}
        <motion.div
          className="fixed right-0 top-1/3 z-50 transform translate-y-[-50%] flex items-center"
          initial={{ x: 0 }}
          animate={{ x: isPanelOpen ? 0 : "calc(100% - 40px)" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {/* Toggle button */}
          <div
            className="bg-yellow rounded-l-lg h-16 w-10 flex items-center justify-center cursor-pointer shadow-lg"
            onClick={() => setIsPanelOpen(!isPanelOpen)}
          >
            <motion.div animate={{ rotate: isPanelOpen ? 0 : 180 }} transition={{ duration: 0.3 }}>
              <ChevronLeft className="h-6 w-6 text-red" />
            </motion.div>
          </div>

          {/* Panel content */}
          <div className="bg-yellow p-5 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-orange/20 rounded-full -translate-x-5 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-red/20 rounded-full translate-x-2 translate-y-5"></div>

            <div className="relative">
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="h-7 w-7 text-red shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Looking for class times?</h3>
                  <p className="text-navy/80 text-sm mb-3">Check our complete schedule! 🥋⏰</p>
                  <Link href="/schedule">
                    <Button className="bg-red hover:bg-red/90 text-white group w-full text-sm py-1.5 h-auto">
                      View Schedule
                      <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-poppins">Our Dojos</h1>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Find a Dum Dum Karate & Yoga Academy location near you. We have multiple dojos across Kolkata to make your
              martial arts journey convenient.
            </p>
          </div>

          {/* Map Section */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-16">
            <div id="map" className="w-full h-[500px]"></div>
          </div>

          {/* Selected Dojo Info */}
          {selectedDojo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto mb-16 bg-card p-6 rounded-lg shadow-lg border-l-4 border-red"
            >
              <h2 className="text-2xl font-bold text-red mb-4">{selectedDojo.name}</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange shrink-0 mt-1" />
                  <p className="text-muted-foreground">{selectedDojo.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-orange shrink-0 mt-1" />
                  <p className="text-muted-foreground">{selectedDojo.phone}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-orange shrink-0 mt-1" />
                  <p className="text-muted-foreground">{selectedDojo.hours}</p>
                </div>
                {selectedDojo.instructor && (
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-orange shrink-0 mt-1"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <p className="text-muted-foreground">Instructor: {selectedDojo.instructor}</p>
                  </div>
                )}
              </div>
              <div className="mt-6 flex justify-end">
                <Link href="/contact">
                  <Button className="bg-red hover:bg-red/90 text-white group">
                    Schedule a Visit
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}

          {/* All Dojos List */}
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dojoLocations.map((dojo) => (
              <motion.div
                key={dojo.id}
                className={cn(
                  "bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group",
                  selectedDojo?.id === dojo.id ? "ring-2 ring-red" : "",
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: dojo.id * 0.1 }}
                onClick={() => setSelectedDojo(dojo)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                    <MapPin className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 text-center">{dojo.name}</h3>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{dojo.address}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{dojo.phone}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-orange shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{dojo.hours}</p>
                    </div>
                    {dojo.instructor && (
                      <div className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-orange shrink-0 mt-0.5"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <p className="text-sm text-muted-foreground">Instructor: {dojo.instructor}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-medium text-primary mb-2 text-sm">Classes Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dojo.classes.map((className) => (
                        <span key={className} className="text-xs bg-yellow/30 text-navy px-2 py-1 rounded-full">
                          {className}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 border-t border-border">
                  <Link href="/contact">
                    <Button variant="ghost" size="sm" className="w-full group">
                      Schedule a Visit
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

