"use client"

import { motion } from "framer-motion"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { BarChart3, TrendingUp, Users, CheckCircle2 } from "lucide-react"

export default function AnalyticsPage() {
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
          <div className="w-12 h-12 rounded-xl bg-[#1E3E62] flex items-center justify-center shadow-lg shadow-[#1E3E62]/20">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">Analytics</h1>
            <p className="text-[#1E3E62]/60">Track and measure tour performance</p>
          </div>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <p className="text-[#1E3E62]/80 leading-relaxed">
          WalkmanJS automatically tracks user interactions with your tours, giving you insights into 
          how users engage with your onboarding experience.
        </p>
      </motion.section>

      {/* Events */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Tracked Events</h2>
        
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { event: "tour_started", desc: "User begins a tour", icon: Users },
            { event: "step_viewed", desc: "User sees a specific step", icon: TrendingUp },
            { event: "step_completed", desc: "User advances to next step", icon: CheckCircle2 },
            { event: "step_skipped", desc: "User skips a step", icon: TrendingUp },
            { event: "tour_completed", desc: "User finishes all steps", icon: CheckCircle2 },
            { event: "tour_exited", desc: "User closes before completing", icon: Users },
          ].map((item) => (
            <div
              key={item.event}
              className="flex items-start gap-3 p-4 rounded-xl border border-[#1E3E62]/10 bg-white"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF6500]/10 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-[#FF6500]" />
              </div>
              <div>
                <code className="text-sm font-mono text-[#FF6500]">{item.event}</code>
                <p className="text-sm text-[#1E3E62]/70 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Metrics */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Key Metrics</h2>
        
        <div className="rounded-xl border border-[#1E3E62]/10 bg-white overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-[#1E3E62]/10">
            {[
              { label: "Completion Rate", value: "78%", change: "+12%", positive: true },
              { label: "Avg. Duration", value: "2m 34s", change: "-8s", positive: true },
              { label: "Drop-off Step", value: "Step 3", change: "Most exits", positive: false },
            ].map((metric) => (
              <div key={metric.label} className="p-6 text-center">
                <p className="text-3xl font-bold text-[#0B192C] mb-1">{metric.value}</p>
                <p className="text-sm text-[#1E3E62]/70 mb-2">{metric.label}</p>
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                  metric.positive ? "bg-[#22c55e]/10 text-[#22c55e]" : "bg-[#FF6500]/10 text-[#FF6500]"
                }`}>
                  {metric.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dashboard */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Analytics Dashboard</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-4">
          View detailed analytics for each tour in your WalkmanJS dashboard. Track completion funnels, 
          identify drop-off points, and optimize your onboarding flow.
        </p>
        
        <div className="rounded-xl border border-[#1E3E62]/10 bg-[#FBFBFB] p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#FF6500]/10 flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-[#FF6500]" />
          </div>
          <h3 className="font-semibold text-[#0B192C] mb-2">View in Dashboard</h3>
          <p className="text-sm text-[#1E3E62]/70">
            Go to Tours → Select a tour → Analytics tab
          </p>
        </div>
      </motion.section>
    </div>
  )
}

