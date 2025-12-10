"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Install the Script",
    description: "Copy and paste our lightweight script into your website's HTML head section.",
    code: '<script src="https://cdn.Walkmanjs.io/embed.js" data-key="YOUR_KEY"></script>',
  },
  {
    number: "02",
    title: "Configure Your Tour",
    description: "Use our visual dashboard to create steps, target elements, and customize the appearance.",
    code: null,
  },
  {
    number: "03",
    title: "Publish & Analyze",
    description: "Go live instantly and track how users interact with your onboarding flow.",
    code: null,
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#0B192C]">How it works</h2>
          <p className="text-lg text-[#1E3E62]/70 max-w-2xl mx-auto">
            Get started in three simple steps. No coding required.
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              id="how-it-works"
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-linear-to-r from-[#FF6500] to-[#1E3E62]/30 -translate-x-4" />
              )}

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 rounded-full border-2 border-[#FF6500] flex items-center justify-center mb-6 bg-[#FF6500]/5"
                >
                  <span className="text-3xl font-bold text-[#FF6500]">{step.number}</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#0B192C]">{step.title}</h3>
                <p className="text-[#1E3E62]/70 mb-4">{step.description}</p>

                {step.code && (
                  <div className="w-full rounded-lg bg-[#0B192C] text-[#FBFBFB] p-4 font-mono text-xs overflow-x-auto">
                    <code>{step.code}</code>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
