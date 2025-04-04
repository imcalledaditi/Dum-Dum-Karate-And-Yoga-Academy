import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ProgramsSection } from "@/components/programs-section"
import { MentorsSection } from "@/components/mentors-section"
import { FindDojoSection } from "@/components/find-dojo-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ProgramsSection />
      <MentorsSection />
      <FindDojoSection />
      <CTASection />
      <Footer />
    </main>
  )
}

