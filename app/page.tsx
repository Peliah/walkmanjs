import Script from "next/script"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { DemoSection } from "@/components/landing/demo-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />

      <Script
        src="https://widget-walkman.netlify.app/tour.iife.js"
        data-tour-id="jh7cn0avk2azwewxg1pw0ypydd7x06hm"
        data-api-key="wk_fMwVqvYhPTJ23wxlJ3hPS77x1RrpyodL"
        strategy="lazyOnload"
      />
    </div>
  )
}
