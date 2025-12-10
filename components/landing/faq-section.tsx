"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
    <section id="wjs-faq-section" className="py-20 px-6 bg-[#FBFBFB]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B192C] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-[#1E3E62]/70">Everything you need to know about our tour builder.</p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden bg-white transition-all duration-300 ${
                openIndex === index 
                  ? "border-[#FF6500]/50 shadow-md shadow-[#FF6500]/5" 
                  : "border-[#1E3E62]/10 hover:border-[#1E3E62]/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1E3E62]/5 transition-colors"
              >
                <span className="font-semibold text-[#0B192C]">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF6500] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-[#1E3E62]/5 border-t border-[#1E3E62]/10">
                      <p className="text-[#1E3E62]/80 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
