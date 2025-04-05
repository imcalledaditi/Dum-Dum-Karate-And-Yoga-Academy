import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden">
                <Image src="/DumDumlogo.png?height=40&width=40" alt="Dum Dum Karate Logo" width={40} height={40} />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Dum Dum Karate</h3>
                <p className="text-xs text-white/70">& Yoga Academy</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
            Kolkata's premier training academy offering world-class programs in Karate, Yoga, and self-defense techniques since 2018.
            </p>
            <div className="flex gap-2 mb-4">
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/70">Switch theme:</span>
              <ThemeToggle />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Programs", href: "/programs" },
                { name: "Schedule", href: "/schedule" },
                { name: "Instructors", href: "/instructors" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-white/70">
                  192, Vivekananda Road
                  <br />
                  Matkal Panchabati Tala
                  <br />
                  Kolkata - 700065, West Bengal
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <div>
                  <p className="text-white/70">+91 9830355608</p>
                  <p className="text-white/70">+91 9830355603</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-white/70">sujatamukherjeeroy@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for updates on classes, events, and special workshops.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Dum Dum Karate & Yoga Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

