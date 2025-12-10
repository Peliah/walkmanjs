"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "How do I get started?",
    answer:
      "Sign up for free, create a new tour, configure your targeting settings, customize the appearance, add steps, and generate your embed code. You can publish within minutes.",
  },
  {
    question: "What frameworks does it support?",
    answer:
      "Our embeddable widget works with React, Vue, Svelte, vanilla HTML, and any modern web framework. It loads asynchronously and causes zero layout shift.",
  },
  {
    question: "Can I track user interactions?",
    answer:
      "Yes, analytics are built-in. We automatically track events like tour start, completion, skips, and drop-offs. View detailed funnel performance directly in your dashboard.",
  },
  {
    question: "What if users refresh or navigate away?",
    answer:
      "State persistence is built-in. Users automatically resume exactly where they left off when they return, providing a seamless experience.",
  },
  {
    question: "Is it secure?",
    answer:
      "Absolutely. We support authentication via your existing providers (Clerk, Supabase, Firebase) and use anonymized tracking by default for maximum privacy.",
  },
  {
    question: "Is it accessible?",
    answer:
      "Yes, accessibility is first. We include keyboard navigation, focus trapping, ARIA attributes, and respect prefers-reduced-motion. We're WCAG AA compliant.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about our tour builder.</p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
              >
                <span className="font-semibold text-foreground">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-accent/30 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
