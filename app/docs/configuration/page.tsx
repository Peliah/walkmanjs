"use client"

import { motion } from "framer-motion"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Settings } from "lucide-react"

export default function ConfigurationPage() {
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
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">Configuration</h1>
            <p className="text-[#1E3E62]/60">Advanced settings and options</p>
          </div>
        </div>
      </motion.div>

      {/* Script Attributes */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Script Attributes</h2>
        
        <div className="overflow-hidden rounded-xl border border-[#1E3E62]/10">
          <table className="w-full text-sm">
            <thead className="bg-[#FBFBFB] border-b border-[#1E3E62]/10">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Attribute</th>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Default</th>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#1E3E62]/10">
              <tr>
                <td className="px-4 py-3 font-mono text-[#FF6500] text-xs">data-tour-id</td>
                <td className="px-4 py-3 text-[#1E3E62]/60">—</td>
                <td className="px-4 py-3 text-[#1E3E62]/70">Required. Your tour&apos;s unique identifier</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-[#FF6500] text-xs">data-api-key</td>
                <td className="px-4 py-3 text-[#1E3E62]/60">—</td>
                <td className="px-4 py-3 text-[#1E3E62]/70">Required. Your API key for authentication</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Keyboard Navigation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Keyboard Navigation</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-6">
          WalkmanJS includes built-in keyboard navigation for accessibility.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { key: "→", action: "Next step" },
            { key: "←", action: "Previous step" },
            { key: "Esc", action: "Close tour" },
          ].map((item) => (
            <div key={item.key} className="flex items-center gap-3 p-4 rounded-xl border border-[#1E3E62]/10 bg-white">
              <kbd className="px-3 py-1.5 rounded-lg bg-[#0B192C] text-[#FBFBFB] font-mono text-sm min-w-[40px] text-center">
                {item.key}
              </kbd>
              <span className="text-sm text-[#1E3E62]/70">{item.action}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Accessibility */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Accessibility</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-4">
          WalkmanJS is built with accessibility in mind and includes:
        </p>

        <ul className="space-y-2">
          {[
            "Keyboard navigation support",
            "ARIA labels and roles",
            "Focus management",
            "Screen reader announcements",
            "Respects prefers-reduced-motion",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-[#1E3E62]/80">
              <div className="w-5 h-5 rounded-full bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  )
}

