"use client"

import { motion } from "framer-motion"
import { Code, BarChart3, RotateCcw, Lock, Sparkles, Accessibility } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Embeddable Widget",
    description:
      "One lightweight script. Zero layout shift. Loads asynchronously and works with React, Vue, Svelte, or vanilla HTML.",
  },
  {
    icon: BarChart3,
    title: "Analytics Built-in",
    description:
      "Automatic events for start, complete, skip, and drop-off. Visualize funnel performance directly in your dashboard.",
  },
  {
    icon: RotateCcw,
    title: "State Persistence",
    description: "Smart resume functionality. If a user refreshes or leaves, they pick up exactly where they left off.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Authentication via your existing provider (Clerk, Supabase, Firebase). Anonymized tracking by default.",
  },
  {
    icon: Sparkles,
    title: "Polished Motion",
    description: "Silky smooth spring animations powered by GSAP. Respects prefers-reduced-motion settings.",
  },
  {
    icon: Accessibility,
    title: "A11y First",
    description: "Keyboard navigation, focus trapping, and ARIA attributes handled automatically. WCAG AA compliant.",
  },
]

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Everything you need to activate users</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed for developers, loved by product managers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
