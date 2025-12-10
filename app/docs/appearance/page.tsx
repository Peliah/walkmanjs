"use client"

import { motion } from "framer-motion"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Palette } from "lucide-react"

export default function AppearancePage() {
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
            <Palette className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">Appearance</h1>
            <p className="text-[#1E3E62]/60">Customize how your tours look</p>
          </div>
        </div>
      </motion.div>

      {/* Colors */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Theme Colors</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-6">
          Customize the tour colors to match your brand identity.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { name: "Primary Color", desc: "Buttons and highlights", color: "#FF6500" },
            { name: "Background Color", desc: "Tooltip background", color: "#FFFFFF" },
            { name: "Text Color", desc: "Content text", color: "#0B192C" },
          ].map((item) => (
            <div key={item.name} className="p-5 rounded-xl border border-[#1E3E62]/10 bg-white">
              <div
                className="w-full h-12 rounded-lg mb-4 border border-[#1E3E62]/10"
                style={{ backgroundColor: item.color }}
              />
              <h3 className="font-semibold text-[#0B192C] mb-1">{item.name}</h3>
              <p className="text-sm text-[#1E3E62]/70 mb-2">{item.desc}</p>
              <code className="text-xs font-mono text-[#FF6500] bg-[#FF6500]/10 px-2 py-1 rounded">
                {item.color}
              </code>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Border Radius */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Border Radius</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-6">
          Adjust the corner roundness of your tooltips.
        </p>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {[
            { label: "None", value: "0px" },
            { label: "Small", value: "4px" },
            { label: "Medium", value: "8px" },
            { label: "Large", value: "12px" },
            { label: "Full", value: "16px" },
          ].map((item) => (
            <div key={item.label} className="text-center shrink-0">
              <div
                className="w-20 h-20 bg-[#FF6500] mb-2"
                style={{ borderRadius: item.value }}
              />
              <p className="text-sm font-medium text-[#0B192C]">{item.label}</p>
              <p className="text-xs text-[#1E3E62]/60">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Overlay */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Overlay Settings</h2>
        <p className="text-[#1E3E62]/80 leading-relaxed mb-6">
          The overlay dims the background to focus attention on the highlighted element.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl border border-[#1E3E62]/10 bg-white">
            <div>
              <h3 className="font-semibold text-[#0B192C] mb-1">Enable Overlay</h3>
              <p className="text-sm text-[#1E3E62]/70">Show a semi-transparent backdrop behind tooltips</p>
            </div>
            <div className="w-12 h-6 rounded-full bg-[#FF6500] relative">
              <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#1E3E62]/10 bg-white">
            <h3 className="font-semibold text-[#0B192C] mb-4">Overlay Opacity</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-2 rounded-full bg-[#1E3E62]/10 relative">
                <div className="absolute left-0 top-0 h-2 rounded-full bg-[#FF6500]" style={{ width: "50%" }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FF6500] border-2 border-white shadow" style={{ left: "calc(50% - 8px)" }} />
              </div>
              <span className="text-sm font-mono text-[#0B192C] w-12 text-right">50%</span>
            </div>
            <div className="flex justify-between mt-2 text-xs text-[#1E3E62]/60">
              <span>Subtle</span>
              <span>Dark</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Preview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Live Preview</h2>
        
        <div className="relative rounded-xl border border-[#1E3E62]/10 bg-[#1E3E62]/5 p-8 min-h-[200px]">
          {/* Simulated tooltip */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 rounded-xl border border-[#1E3E62]/10 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-[#FF6500] flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <span className="font-semibold text-[#0B192C]">Welcome!</span>
            </div>
            <p className="text-sm text-[#1E3E62]/70 mb-4">
              This is how your tour tooltip will look with the current settings.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#1E3E62]/50">Step 1 of 3</span>
              <button className="px-3 py-1.5 rounded-lg bg-[#FF6500] text-white text-sm font-medium">
                Next
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

