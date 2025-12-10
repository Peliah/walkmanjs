"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { BookOpen, MousePointer, Target, Palette, Code, ChevronRight } from "lucide-react"

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

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how to create and deploy interactive product tours on your website in minutes.
            </p>
          </motion.div>
        </section>

        {/* Quick Links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { title: "Quick Start", desc: "Get up and running in 5 minutes", icon: BookOpen },
              { title: "CSS Selectors", desc: "Learn how to target elements", icon: Target },
              { title: "API Reference", desc: "Programmatic tour control", icon: Code },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 border border-border rounded-lg hover:border-foreground/20 transition-colors cursor-pointer group"
              >
                <item.icon className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Getting Started */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Getting Started</h2>
            <p className="text-muted-foreground max-w-3xl">
              Follow these steps to create your first product tour. Each step includes a visual guide to help you
              navigate the dashboard.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
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
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background text-sm font-bold">
                      {step.id}
                    </span>
                    <step.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Image */}
                <motion.div whileHover={{ scale: 1.02 }} className="flex-1 w-full">
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tips Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted/50 border border-border rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
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
              ].map((tip) => (
                <div key={tip.title} className="flex gap-3">
                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Code Example */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-6">Installation Code</h2>
            <div className="bg-foreground text-background rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm font-mono">
                <code>{`<!-- Add this script before the closing </body> tag -->
<script 
  src="https://widget.walkmanjs.com/tour.js" 
  data-tour-id="YOUR_TOUR_ID"
></script>`}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Replace YOUR_TOUR_ID with the ID from your Install tab. The script will automatically load and display
              your tour based on your targeting rules.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
