"use client"

import { motion } from "framer-motion"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Target } from "lucide-react"

export default function TargetingPage() {
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
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">Targeting</h1>
            <p className="text-[#1E3E62]/60">Control when and where tours appear</p>
          </div>
        </div>
      </motion.div>

      {/* URL Matching */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">URL Matching</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-6">
          Define which pages your tour should appear on using URL patterns.
        </p>

        <div className="overflow-hidden rounded-xl border border-[#1E3E62]/10">
          <table className="w-full text-sm">
            <thead className="bg-[#FBFBFB] border-b border-[#1E3E62]/10">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Type</th>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Example</th>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Matches</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#1E3E62]/10">
              <tr>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded bg-[#FF6500]/10 text-[#FF6500] text-xs font-medium">
                    Exact
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-[#1E3E62]">/dashboard</td>
                <td className="px-4 py-3 text-[#1E3E62]/70">Only /dashboard</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded bg-[#1E3E62]/10 text-[#1E3E62] text-xs font-medium">
                    Contains
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-[#1E3E62]">dashboard</td>
                <td className="px-4 py-3 text-[#1E3E62]/70">Any URL containing &quot;dashboard&quot;</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded bg-[#0B192C]/10 text-[#0B192C] text-xs font-medium">
                    Regex
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-[#1E3E62]">/users/\d+</td>
                <td className="px-4 py-3 text-[#1E3E62]/70">User profile pages like /users/123</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Trigger Types */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Trigger Types</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-6">
          Choose when your tour should start for each visitor.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Page Load",
              desc: "Tour starts automatically when the page loads",
              tag: "Default",
            },
            {
              title: "Delay",
              desc: "Tour starts after a specified time delay",
              tag: "Timed",
            },
            {
              title: "Click",
              desc: "Tour starts when user clicks a specific element",
              tag: "Manual",
            },
          ].map((trigger) => (
            <div
              key={trigger.title}
              className="p-5 rounded-xl border border-[#1E3E62]/10 bg-white"
            >
              <span className="text-xs font-medium text-[#FF6500] bg-[#FF6500]/10 px-2 py-0.5 rounded mb-3 inline-block">
                {trigger.tag}
              </span>
              <h3 className="font-semibold text-[#0B192C] mb-2">{trigger.title}</h3>
              <p className="text-sm text-[#1E3E62]/70">{trigger.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Frequency */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Display Frequency</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-6">
          Control how often the tour is shown to each user.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "Once per user",
              desc: "Tour only shows once, even across sessions. Best for onboarding flows.",
              recommended: true,
            },
            {
              title: "Once per session",
              desc: "Tour shows once each browser session. Good for feature announcements.",
              recommended: false,
            },
            {
              title: "Every time",
              desc: "Tour shows on every page load. Use sparingly to avoid annoying users.",
              recommended: false,
            },
          ].map((freq) => (
            <div
              key={freq.title}
              className={`p-4 rounded-xl border ${
                freq.recommended
                  ? "border-[#FF6500]/30 bg-[#FF6500]/5"
                  : "border-[#1E3E62]/10 bg-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-[#0B192C]">{freq.title}</h3>
                {freq.recommended && (
                  <span className="text-xs font-medium text-[#FF6500] bg-[#FF6500]/10 px-2 py-0.5 rounded">
                    Recommended
                  </span>
                )}
              </div>
              <p className="text-sm text-[#1E3E62]/70">{freq.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

