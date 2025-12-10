"use client"

import { motion } from "framer-motion"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Target, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ToursPage() {
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
          <div className="w-12 h-12 rounded-xl bg-[#0B192C] flex items-center justify-center shadow-lg shadow-[#0B192C]/20">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">Tours</h1>
            <p className="text-[#1E3E62]/60">Understanding tour structure and configuration</p>
          </div>
        </div>
      </motion.div>

      {/* What is a Tour */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">What is a Tour?</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-6">
          A tour is a guided walkthrough of your application. It consists of multiple steps, each highlighting 
          a specific element on your page with a tooltip explaining its purpose or how to use it.
        </p>

        <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Steps", desc: "Individual highlights in your tour" },
              { label: "Targeting", desc: "When and where tours appear" },
              { label: "Appearance", desc: "How your tour looks" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="text-center p-4 rounded-lg bg-[#FBFBFB] border border-[#1E3E62]/5"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF6500]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-[#FF6500]">{i + 1}</span>
                </div>
                <h4 className="font-semibold text-[#0B192C] mb-1">{item.label}</h4>
                <p className="text-xs text-[#1E3E62]/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tour Properties */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Tour Properties</h2>
        
        <div className="space-y-4">
          {[
            {
              name: "Name",
              type: "string",
              desc: "A descriptive name for your tour (e.g., 'Onboarding Tour')",
            },
            {
              name: "Description",
              type: "string",
              desc: "Optional description explaining the tour's purpose",
            },
            {
              name: "Status",
              type: "draft | active | paused",
              desc: "Controls whether the tour is visible to users",
            },
            {
              name: "Target URL",
              type: "string",
              desc: "The page URL where this tour should run",
            },
          ].map((prop) => (
            <div
              key={prop.name}
              className="flex items-start gap-4 p-4 rounded-xl border border-[#1E3E62]/10 bg-white"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-[#0B192C]">{prop.name}</span>
                  <code className="px-1.5 py-0.5 rounded bg-[#1E3E62]/10 text-[#1E3E62] font-mono text-xs">
                    {prop.type}
                  </code>
                </div>
                <p className="text-sm text-[#1E3E62]/70">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Tour Lifecycle */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Tour Lifecycle</h2>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-4">
          {[
            { status: "Draft", color: "bg-[#1E3E62]" },
            { status: "Active", color: "bg-[#22c55e]" },
            { status: "Paused", color: "bg-[#eab308]" },
          ].map((item, i) => (
            <div key={item.status} className="flex items-center gap-2">
              <div className={`px-4 py-2 rounded-lg ${item.color} text-white text-sm font-medium whitespace-nowrap`}>
                {item.status}
              </div>
              {i < 2 && (
                <ArrowRight className="w-4 h-4 text-[#1E3E62]/30 shrink-0" />
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3 mt-4">
          <div className="p-4 rounded-lg border border-[#1E3E62]/10 bg-white">
            <span className="inline-block px-2 py-0.5 rounded bg-[#1E3E62] text-white text-xs font-medium mb-2">Draft</span>
            <p className="text-sm text-[#1E3E62]/70">Tour is being built. Not visible to users.</p>
          </div>
          <div className="p-4 rounded-lg border border-[#22c55e]/20 bg-[#22c55e]/5">
            <span className="inline-block px-2 py-0.5 rounded bg-[#22c55e] text-white text-xs font-medium mb-2">Active</span>
            <p className="text-sm text-[#1E3E62]/70">Tour is live and visible to users based on targeting rules.</p>
          </div>
          <div className="p-4 rounded-lg border border-[#eab308]/20 bg-[#eab308]/5">
            <span className="inline-block px-2 py-0.5 rounded bg-[#eab308] text-white text-xs font-medium mb-2">Paused</span>
            <p className="text-sm text-[#1E3E62]/70">Tour is temporarily hidden but can be reactivated.</p>
          </div>
        </div>
      </motion.section>

      {/* Next Steps */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-between p-6 rounded-xl bg-[#0B192C]">
          <div>
            <h3 className="font-semibold text-[#FBFBFB] mb-1">Next: Tour Steps</h3>
            <p className="text-sm text-[#FBFBFB]/60">Learn how to create and configure individual steps</p>
          </div>
          <Link
            href="/docs/steps"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6500] text-white text-sm font-medium hover:bg-[#FF6500]/90 transition-colors"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

