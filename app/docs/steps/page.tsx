"use client"

import { motion } from "framer-motion"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Zap, AlertCircle } from "lucide-react"

export default function StepsPage() {
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
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">Steps</h1>
            <p className="text-[#1E3E62]/60">Configure individual tour steps</p>
          </div>
        </div>
      </motion.div>

      {/* What is a Step */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">What is a Step?</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed">
          A step is an individual highlight in your tour. Each step targets a specific element on your page 
          and displays a tooltip with information about that element.
        </p>
      </motion.section>

      {/* Step Properties */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Step Properties</h2>
        
        <div className="overflow-hidden rounded-xl border border-[#1E3E62]/10">
          <table className="w-full text-sm">
            <thead className="bg-[#FBFBFB] border-b border-[#1E3E62]/10">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Property</th>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Type</th>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#1E3E62]/10">
              <tr>
                <td className="px-4 py-3 font-medium text-[#0B192C]">Title</td>
                <td className="px-4 py-3 font-mono text-[#FF6500] text-xs">string</td>
                <td className="px-4 py-3 text-[#1E3E62]/70">Heading displayed in the tooltip</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#0B192C]">Content</td>
                <td className="px-4 py-3 font-mono text-[#FF6500] text-xs">string</td>
                <td className="px-4 py-3 text-[#1E3E62]/70">Description or instructions</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#0B192C]">Target Selector</td>
                <td className="px-4 py-3 font-mono text-[#FF6500] text-xs">string</td>
                <td className="px-4 py-3 text-[#1E3E62]/70">CSS selector for the target element</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#0B192C]">Position</td>
                <td className="px-4 py-3 font-mono text-[#FF6500] text-xs">top | bottom | left | right</td>
                <td className="px-4 py-3 text-[#1E3E62]/70">Where the tooltip appears relative to the element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* CSS Selectors */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">CSS Selectors</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-6">
          CSS selectors are used to target specific elements on your page. Here are common patterns:
        </p>

        <div className="space-y-3">
          {[
            { selector: "#signup-btn", desc: "Targets element with ID 'signup-btn'", type: "ID" },
            { selector: ".nav-menu", desc: "Targets elements with class 'nav-menu'", type: "Class" },
            { selector: "[data-tour='welcome']", desc: "Targets elements with specific data attribute", type: "Attribute" },
            { selector: "button.primary", desc: "Targets button elements with class 'primary'", type: "Combined" },
          ].map((item) => (
            <div
              key={item.selector}
              className="flex items-start gap-4 p-4 rounded-xl border border-[#1E3E62]/10 bg-white"
            >
              <code className="px-3 py-1.5 rounded-lg bg-[#0B192C] text-[#FBFBFB] font-mono text-sm">
                {item.selector}
              </code>
              <div className="flex-1">
                <span className="text-xs font-medium text-[#FF6500] bg-[#FF6500]/10 px-2 py-0.5 rounded mb-1 inline-block">
                  {item.type}
                </span>
                <p className="text-sm text-[#1E3E62]/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Best Practices</h2>
        
        <div className="space-y-3">
          <div className="flex gap-3 p-4 rounded-xl bg-[#22c55e]/5 border border-[#22c55e]/20">
            <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <div>
              <p className="font-medium text-[#0B192C] mb-1">Use ID selectors when possible</p>
              <p className="text-sm text-[#1E3E62]/70">IDs are unique and provide the most reliable targeting.</p>
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-xl bg-[#22c55e]/5 border border-[#22c55e]/20">
            <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <div>
              <p className="font-medium text-[#0B192C] mb-1">Keep content concise</p>
              <p className="text-sm text-[#1E3E62]/70">Each step should focus on one action or concept.</p>
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-xl bg-[#FF6500]/5 border border-[#FF6500]/20">
            <AlertCircle className="w-6 h-6 text-[#FF6500] shrink-0" />
            <div>
              <p className="font-medium text-[#0B192C] mb-1">Avoid overly complex selectors</p>
              <p className="text-sm text-[#1E3E62]/70">Complex selectors may break if your page structure changes.</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

