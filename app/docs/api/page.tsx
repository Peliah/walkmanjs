"use client"

import { motion } from "framer-motion"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Code, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function APIPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const methods = [
    {
      id: "start",
      name: "WalkmanJS.start()",
      desc: "Start the tour from the beginning",
      code: "window.WalkmanJS.start()",
    },
    {
      id: "stop",
      name: "WalkmanJS.stop()",
      desc: "Stop the tour and hide all tooltips",
      code: "window.WalkmanJS.stop()",
    },
    {
      id: "next",
      name: "WalkmanJS.next()",
      desc: "Move to the next step",
      code: "window.WalkmanJS.next()",
    },
    {
      id: "prev",
      name: "WalkmanJS.prev()",
      desc: "Go back to the previous step",
      code: "window.WalkmanJS.prev()",
    },
    {
      id: "goto",
      name: "WalkmanJS.goTo(stepId)",
      desc: "Jump to a specific step by ID",
      code: "window.WalkmanJS.goTo('step-3')",
    },
  ]

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
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">API Reference</h1>
            <p className="text-[#1E3E62]/60">Control tours programmatically</p>
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
          WalkmanJS exposes a global API on the <code className="px-1.5 py-0.5 rounded bg-[#1E3E62]/10 text-[#0B192C] font-mono text-sm">window</code> object, 
          allowing you to control tours programmatically from your JavaScript code.
        </p>
      </motion.section>

      {/* Methods */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Methods</h2>
        
        <div className="space-y-4">
          {methods.map((method) => (
            <div
              key={method.id}
              className="rounded-xl border border-[#1E3E62]/10 bg-white overflow-hidden"
            >
              <div className="p-4 border-b border-[#1E3E62]/10">
                <code className="text-lg font-mono font-semibold text-[#FF6500]">
                  {method.name}
                </code>
                <p className="text-sm text-[#1E3E62]/70 mt-1">{method.desc}</p>
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-[#0B192C]">
                <code className="text-sm font-mono text-[#FBFBFB]">{method.code}</code>
                <button
                  onClick={() => copyCode(method.id, method.code)}
                  className="flex items-center gap-1 text-xs text-[#FBFBFB]/70 hover:text-[#FBFBFB]"
                >
                  {copied === method.id ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Example */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Example Usage</h2>
        
        <div className="rounded-xl overflow-hidden border border-[#1E3E62]/10">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0B192C] border-b border-[#1E3E62]/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF6500]/60" />
              <div className="w-3 h-3 rounded-full bg-[#1E3E62]" />
              <div className="w-3 h-3 rounded-full bg-[#1E3E62]/50" />
            </div>
            <span className="text-xs text-[#FBFBFB]/50 ml-2">JavaScript</span>
          </div>
          <div className="bg-[#0B192C] p-4 overflow-x-auto">
            <pre className="text-sm font-mono text-[#FBFBFB]">
              <code>{`// Start tour when user clicks a button
document.getElementById('help-btn').addEventListener('click', () => {
  window.WalkmanJS.start()
})

// Skip to specific step
function showFeatureHighlight() {
  window.WalkmanJS.goTo('feature-step')
}

// Stop tour on certain conditions
if (userHasCompletedOnboarding) {
  window.WalkmanJS.stop()
}`}</code>
            </pre>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

