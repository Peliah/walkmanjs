"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { ArrowRight, BookOpen, Rocket, Code, Sparkles } from "lucide-react"

const quickLinks = [
  {
    title: "Quick Start",
    description: "Get your first tour running in under 5 minutes",
    href: "/docs/quickstart",
    icon: Rocket,
    color: "bg-[#FF6500]",
  },
  {
    title: "Installation",
    description: "Add WalkmanJS to your website with a single script",
    href: "/docs/installation",
    icon: Code,
    color: "bg-[#1E3E62]",
  },
  {
    title: "Core Concepts",
    description: "Understand tours, steps, and targeting",
    href: "/docs/tours",
    icon: BookOpen,
    color: "bg-[#0B192C]",
  },
]

const features = [
  "Visual tour builder — no code required",
  "CSS selector targeting for any element",
  "Customizable appearance and themes",
  "Built-in analytics and tracking",
  "Smart positioning and scroll handling",
  "Keyboard navigation support",
]

export default function DocsPage() {
  return (
    <div>
      <DocsBreadcrumb />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#FF6500] flex items-center justify-center shadow-lg shadow-[#FF6500]/20">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">Documentation</h1>
            <p className="text-[#1E3E62]/60">Learn how to build product tours</p>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="prose prose-slate max-w-none mb-12"
      >
        <p className="text-lg text-[#1E3E62]/80 leading-relaxed">
          WalkmanJS is a powerful, lightweight library for creating interactive product tours and onboarding flows.
          With our visual builder, you can create engaging tours without writing any code.
        </p>

        <div className="not-prose mt-6 p-4 rounded-xl bg-[#FF6500]/5 border border-[#FF6500]/20">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#FF6500] mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-[#0B192C]">New to WalkmanJS?</p>
              <p className="text-sm text-[#1E3E62]/70 mt-1">
                Start with our{" "}
                <Link href="/docs/quickstart" className="text-[#FF6500] hover:underline font-medium">
                  Quick Start guide
                </Link>{" "}
                to create your first tour in minutes.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Get Started</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {quickLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-5 rounded-xl border border-[#1E3E62]/10 bg-white hover:border-[#FF6500]/30 hover:shadow-lg hover:shadow-[#FF6500]/5 transition-all"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className={`w-10 h-10 rounded-lg ${link.color} flex items-center justify-center mb-3`}>
                  <link.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#0B192C] mb-1 group-hover:text-[#FF6500] transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-[#1E3E62]/60">{link.description}</p>
                <div className="mt-3 flex items-center text-sm font-medium text-[#FF6500] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">What you can do</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#1E3E62]/10"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF6500]/10 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#FF6500]" />
              </div>
              <span className="text-sm text-[#1E3E62]/80">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Code Example */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Installation</h2>
        <div className="rounded-xl overflow-hidden border border-[#1E3E62]/10">
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
              <code>{`<script 
  src="https://widget.walkmanjs.com/tour.js"
  data-tour-id="YOUR_TOUR_ID"
  data-api-key="YOUR_API_KEY"
></script>`}</code>
            </pre>
          </div>
        </div>
        <p className="text-sm text-[#1E3E62]/60 mt-3">
          Add this script before the closing <code className="px-1.5 py-0.5 rounded bg-[#1E3E62]/10 text-[#0B192C] font-mono text-xs">&lt;/body&gt;</code> tag on your website.
        </p>
      </motion.section>
    </div>
  )
}
