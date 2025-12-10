"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { HelpCircle, ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I find the CSS selector for an element?",
    answer: "Right-click on the element in your browser and select 'Inspect'. In the DevTools, right-click the highlighted element and choose 'Copy' → 'Copy selector'. You can also use IDs (#element-id) or classes (.class-name) directly.",
  },
  {
    question: "Why isn't my tour showing?",
    answer: "Check these common issues: 1) Make sure your tour status is 'Active', 2) Verify the URL pattern matches your current page, 3) Check if the frequency setting is 'Once' and you've already seen it, 4) Look for JavaScript errors in the browser console.",
  },
  {
    question: "Can I have multiple tours on the same page?",
    answer: "Currently, WalkmanJS supports one active tour per page. If you need multiple tours, you can create separate tours with different targeting rules or trigger them programmatically using the API.",
  },
  {
    question: "How do I test my tour without affecting analytics?",
    answer: "Use Test Mode by adding '?walkmanjs_test=true' to your URL. In test mode, the tour will show regardless of frequency settings and won't track analytics events.",
  },
  {
    question: "Does WalkmanJS work with SPAs (Single Page Applications)?",
    answer: "Yes! WalkmanJS automatically detects route changes in React, Vue, Next.js, and other SPA frameworks. Tours will trigger based on the new URL after navigation.",
  },
  {
    question: "How do I customize the tour appearance?",
    answer: "Go to your tour's Appearance tab in the dashboard. You can customize colors, border radius, overlay settings, and more. Changes are applied instantly to your live tour.",
  },
  {
    question: "Can I programmatically start a tour?",
    answer: "Yes! Use window.WalkmanJS.start() to start a tour programmatically. You can also use goTo(), next(), prev(), and stop() methods. See the API Reference for details.",
  },
  {
    question: "What happens if a target element doesn't exist?",
    answer: "WalkmanJS will wait up to 5 seconds for the element to appear (useful for dynamically loaded content). If it still doesn't exist, that step is skipped and the tour moves to the next step.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div>
      <DocsBreadcrumb />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#FF6500] flex items-center justify-center shadow-lg shadow-[#FF6500]/20">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">FAQ</h1>
            <p className="text-[#1E3E62]/60">Frequently asked questions</p>
          </div>
        </div>
      </motion.div>

      {/* FAQs */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className={`rounded-xl border overflow-hidden transition-all ${
                openIndex === index
                  ? "border-[#FF6500]/30 bg-white shadow-md"
                  : "border-[#1E3E62]/10 bg-white hover:border-[#1E3E62]/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-[#0B192C] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF6500] shrink-0 transition-transform duration-200 ${
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
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pt-0">
                      <p className="text-[#1E3E62]/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Still need help */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10"
      >
        <div className="rounded-xl bg-[#0B192C] p-6 text-center">
          <h3 className="font-semibold text-[#FBFBFB] mb-2">Still have questions?</h3>
          <p className="text-[#FBFBFB]/60 text-sm mb-4">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
          <a
            href="mailto:support@walkmanjs.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6500] text-white text-sm font-medium hover:bg-[#FF6500]/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </motion.section>
    </div>
  )
}

