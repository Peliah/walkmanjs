"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Rocket, ArrowRight, BookOpen, MousePointer, Target, Palette, Code, ChevronRight } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Navigate to Tours",
    description:
      "From your dashboard, click on 'Tours' in the sidebar menu. If you haven't created any tours yet, you'll see an empty state with a 'Create Tour' button.",
    image: "/images/tour1.png",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Create a New Tour",
    description:
      "Click the 'Create Tour' button to open the creation modal. Enter a name for your tour (e.g., 'Welcome Tour'), add an optional description, and specify your target website URL where the tour will run.",
    image: "/images/tour2.png",
    icon: MousePointer,
  },
  {
    id: 3,
    title: "Add Tour Steps",
    description:
      "After creating your tour, you'll be taken to the Steps tab. Click 'Add Step' to create individual tour steps. Each step requires a title, description, CSS selector (to target the element), and position. You need at least 5 steps to publish a tour.",
    image: "/images/tour3.png",
    icon: Target,
  },
  {
    id: 4,
    title: "Configure Your Steps",
    description:
      "For each step, provide a descriptive title, helpful content, the CSS selector of the target element (e.g., #signup-btn or .nav-menu), and choose where the tooltip should appear (Top, Bottom, Left, or Right).",
    image: "/images/tour4.png",
    icon: Target,
  },
  {
    id: 5,
    title: "Set Targeting Rules",
    description:
      "Navigate to the Targeting tab to configure when and where your tour appears. Set the URL match type (Contains, Exact, Regex), specify the URL pattern, choose a trigger (On Page Load, On Click, On Delay), and set the frequency (Once per user, Once per session, Every time).",
    image: "/images/tour5.png",
    icon: Target,
  },
  {
    id: 6,
    title: "Customize Appearance",
    description:
      "In the Appearance tab, customize how your tour looks. Set primary, background, and text colors using hex codes. Adjust the border radius, enable the overlay to dim the background, and set the overlay opacity. Preview your changes in real-time.",
    image: "/images/tour6.png",
    icon: Palette,
  },
  {
    id: 7,
    title: "Install on Your Website",
    description:
      "Finally, go to the Install tab to get your embed code. Copy the script tag and paste it before the closing </body> tag on your website. Generate an API key if needed, and use Test Mode to preview without affecting analytics. Set the tour status to 'Active' when ready.",
    image: "/images/tour7.png",
    icon: Code,
  },
]

const tips = [
  {
    title: "Use Specific Selectors",
    desc: "Use IDs (#element) when possible for reliable targeting. Class selectors (.class) work too but may match multiple elements.",
  },
  {
    title: "Keep Steps Concise",
    desc: "Each step should focus on one action. Short, clear instructions lead to better completion rates.",
  },
  {
    title: "Test in Preview Mode",
    desc: "Always test your tour in Test Mode before going live. This won't affect your analytics data.",
  },
  {
    title: "Mobile Responsive",
    desc: "Tours automatically adjust for mobile devices. Test on different screen sizes for the best experience.",
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

export default function QuickStartPage() {
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
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">Quick Start</h1>
            <p className="text-[#1E3E62]/60">Get your first tour running in 5 minutes</p>
          </div>
        </div>
        <p className="text-[#1E3E62]/80 leading-relaxed mt-4">
          Follow these steps to create your first product tour. Each step includes a visual guide to help you
          navigate the dashboard.
        </p>
      </motion.div>

      {/* Steps with Images */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16 mb-16"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
          >
            {/* Content */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6500] text-white text-sm font-bold shadow-lg shadow-[#FF6500]/20">
                  {step.id}
                </span>
                <step.icon className="w-5 h-5 text-[#1E3E62]/50" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B192C]">{step.title}</h3>
              <p className="text-[#1E3E62]/70 leading-relaxed">{step.description}</p>
            </div>

            {/* Image */}
            <motion.div whileHover={{ scale: 1.02 }} className="flex-1 w-full">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#1E3E62]/10 shadow-xl shadow-[#0B192C]/5 bg-[#FBFBFB]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pro Tips */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-[#1E3E62]/5 border border-[#1E3E62]/10 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#FF6500] flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B192C]">Pro Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="flex gap-3">
                <ChevronRight className="w-5 h-5 text-[#FF6500] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1 text-[#0B192C]">{tip.title}</h4>
                  <p className="text-sm text-[#1E3E62]/70">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Installation Code */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-[#0B192C]">Installation Code</h2>
        <div className="rounded-xl overflow-hidden border border-[#1E3E62]/10 shadow-xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0B192C] border-b border-[#1E3E62]/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF6500]/60" />
              <div className="w-3 h-3 rounded-full bg-[#1E3E62]" />
              <div className="w-3 h-3 rounded-full bg-[#1E3E62]/50" />
            </div>
            <span className="text-xs text-[#FBFBFB]/50 ml-2">HTML</span>
          </div>
          <div className="bg-[#0B192C] p-4 overflow-x-auto">
            <pre className="text-sm font-mono text-[#FBFBFB]">
              <code>{`<!-- Add this script before the closing </body> tag -->
<script 
  src="https://widget.walkmanjs.com/tour.js" 
  data-tour-id="YOUR_TOUR_ID"
  data-api-key="YOUR_API_KEY"
></script>`}</code>
            </pre>
          </div>
        </div>
        <p className="text-sm text-[#1E3E62]/70 mt-4">
          Replace YOUR_TOUR_ID and YOUR_API_KEY with the values from your Install tab. The script will automatically load and display
          your tour based on your targeting rules.
        </p>
      </motion.section>

      {/* What's Next */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 text-[#0B192C]">What&apos;s Next?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Learn about Tours", href: "/docs/tours", desc: "Understand tour structure and lifecycle" },
            { title: "CSS Selectors", href: "/docs/steps", desc: "Target elements effectively" },
            { title: "Customize Appearance", href: "/docs/appearance", desc: "Match your brand colors" },
            { title: "Analytics", href: "/docs/analytics", desc: "Track user engagement" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 p-5 rounded-xl border border-[#1E3E62]/10 bg-white hover:border-[#FF6500]/30 hover:shadow-lg hover:shadow-[#FF6500]/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FF6500]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF6500] transition-colors">
                <ArrowRight className="w-5 h-5 text-[#FF6500] group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#0B192C] group-hover:text-[#FF6500] transition-colors">
                  {item.title}
                </p>
                <p className="text-sm text-[#1E3E62]/60">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
