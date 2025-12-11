"use client"

import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  Zap,
  Target,
  BarChart3,
  Palette,
  Code2,
  Shield,
  Globe,
  Sparkles,
  MousePointer2,
  Layers,
  RefreshCw,
  Users,
} from "lucide-react"

const mainFeatures = [
  {
    icon: MousePointer2,
    title: "Visual Tour Builder",
    description:
      "Create interactive product tours with our intuitive drag-and-drop builder. No coding required.",
    color: "bg-[#FF6500]",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description:
      "Target specific elements on your page with CSS selectors. Tours automatically adapt to your layout.",
    color: "bg-[#1E3E62]",
  },
  {
    icon: BarChart3,
    title: "Built-in Analytics",
    description:
      "Track tour views, completions, and drop-offs. Understand exactly how users interact with your tours.",
    color: "bg-[#0B192C]",
  },
  {
    icon: Palette,
    title: "Customizable Themes",
    description:
      "Match your brand with custom colors, fonts, and styles. Make tours feel native to your product.",
    color: "bg-[#FF6500]",
  },
  {
    icon: Code2,
    title: "Simple Integration",
    description:
      "Add a single script tag to your website. Works with any framework - React, Vue, Angular, or vanilla JS.",
    color: "bg-[#1E3E62]",
  },
  {
    icon: Shield,
    title: "Secure API Keys",
    description:
      "Authenticate your tours with secure API keys. Control access and monitor usage from your dashboard.",
    color: "bg-[#0B192C]",
  },
]

const additionalFeatures = [
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Deploy tours on any website, web app, or SaaS product.",
  },
  {
    icon: Sparkles,
    title: "Spotlight Effect",
    description: "Highlight elements with a beautiful spotlight overlay.",
  },
  {
    icon: Layers,
    title: "Multi-Step Tours",
    description: "Create complex onboarding flows with unlimited steps.",
  },
  {
    icon: RefreshCw,
    title: "State Persistence",
    description: "Remember user progress across sessions and page reloads.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team on tour creation.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Lightweight script that won't slow down your site.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans">
      <main className="pt-14">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#FF6500]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#1E3E62]/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6500]/10 border border-[#FF6500]/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-[#FF6500]" />
                <span className="text-sm font-medium text-[#FF6500]">
                  Powerful Features
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-[#0B192C]">
                Everything you need to{" "}
                <span className="text-[#FF6500]">onboard users</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#1E3E62]/70 text-pretty">
                WalkmanJS comes packed with features to help you create
                beautiful, engaging product tours that convert visitors into
                power users.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Features Grid */}
        <section className="py-16 bg-[#0B192C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#FBFBFB]">
                Core Features
              </h2>
              <p className="text-lg text-[#FBFBFB]/70 max-w-2xl mx-auto">
                The essential tools to create world-class onboarding
                experiences.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {mainFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative rounded-2xl border border-[#1E3E62]/50 bg-[#1E3E62]/20 p-6 backdrop-blur-sm transition-all hover:border-[#FF6500]/50 hover:bg-[#1E3E62]/30"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} text-white mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-[#FBFBFB]">
                    {feature.title}
                  </h3>
                  <p className="text-[#FBFBFB]/60">{feature.description}</p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-[#FF6500]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16 sm:py-24 bg-[#FBFBFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#0B192C]">
                And Much More
              </h2>
              <p className="text-lg text-[#1E3E62]/70 max-w-2xl mx-auto">
                Additional features that make WalkmanJS the complete solution.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {additionalFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FF6500]/10 flex items-center justify-center"
                  >
                    <feature.icon className="w-5 h-5 text-[#FF6500]" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-[#0B192C] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#1E3E62]/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-[#1E3E62]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#0B192C]">
                Why Choose WalkmanJS?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Without WalkmanJS",
                  items: [
                    "Hours building custom tours",
                    "No analytics or insights",
                    "Inconsistent user experience",
                    "Complex integration",
                  ],
                  negative: true,
                },
                {
                  title: "With WalkmanJS",
                  items: [
                    "Create tours in minutes",
                    "Built-in analytics dashboard",
                    "Professional, polished tours",
                    "One line of code",
                  ],
                  negative: false,
                },
                {
                  title: "Results",
                  items: [
                    "↑ User activation rates",
                    "↓ Support tickets",
                    "↑ Feature adoption",
                    "↑ User satisfaction",
                  ],
                  highlight: true,
                },
              ].map((column) => (
                <motion.div
                  key={column.title}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl p-6 ${
                    column.highlight
                      ? "bg-[#FF6500] text-white"
                      : column.negative
                        ? "bg-white border border-[#1E3E62]/10"
                        : "bg-[#0B192C] text-white"
                  }`}
                >
                  <h3
                    className={`font-semibold text-lg mb-4 ${column.negative ? "text-[#0B192C]" : ""}`}
                  >
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.items.map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-2 text-sm ${
                          column.negative
                            ? "text-[#1E3E62]/70"
                            : column.highlight
                              ? "text-white/90"
                              : "text-[#FBFBFB]/80"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            column.negative
                              ? "bg-red-400"
                              : column.highlight
                                ? "bg-white"
                                : "bg-[#FF6500]"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-[#FBFBFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center rounded-2xl bg-linear-to-br from-[#0B192C] via-[#1E3E62] to-[#0B192C] p-8 sm:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6500_1px,transparent_1px),linear-gradient(to_bottom,#FF6500_1px,transparent_1px)] bg-size-[2rem_2rem]" />
              </div>

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FBFBFB]">
                  Ready to improve your onboarding?
                </h2>
                <p className="text-[#FBFBFB]/70 mb-8 max-w-xl mx-auto">
                  Join thousands of teams using WalkmanJS to create better user
                  experiences.
                </p>
                <motion.a
                  href="/dashboard"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6500] text-white font-semibold shadow-lg shadow-[#FF6500]/25 hover:bg-[#FF6500]/90 transition-colors"
                >
                  Get Started Free
                  <Zap className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

