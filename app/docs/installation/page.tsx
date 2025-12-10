"use client"

import { motion } from "framer-motion"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Code, Copy, Check, AlertCircle } from "lucide-react"
import { useState } from "react"

const codeExamples = {
  html: `<!-- Add before closing </body> tag -->
<script 
  src="https://widget.walkmanjs.com/tour.js"
  data-tour-id="YOUR_TOUR_ID"
  data-api-key="YOUR_API_KEY"
></script>`,
  react: `// In your App.tsx or layout file
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Script 
        src="https://widget.walkmanjs.com/tour.js"
        data-tour-id="YOUR_TOUR_ID"
        data-api-key="YOUR_API_KEY"
        strategy="lazyOnload"
      />
    </>
  )
}`,
  vue: `<!-- In your App.vue or main layout -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://widget.walkmanjs.com/tour.js'
  script.dataset.tourId = 'YOUR_TOUR_ID'
  script.dataset.apiKey = 'YOUR_API_KEY'
  document.body.appendChild(script)
})
</script>`,
}

type Tab = keyof typeof codeExamples

export default function InstallationPage() {
  const [activeTab, setActiveTab] = useState<Tab>("html")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "html", label: "HTML" },
    { id: "react", label: "React/Next.js" },
    { id: "vue", label: "Vue" },
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
          <div className="w-12 h-12 rounded-xl bg-[#1E3E62] flex items-center justify-center shadow-lg shadow-[#1E3E62]/20">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0B192C]">Installation</h1>
            <p className="text-[#1E3E62]/60">Add WalkmanJS to your website</p>
          </div>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="prose prose-slate max-w-none mb-10"
      >
        <p className="text-lg text-[#1E3E62]/80 leading-relaxed">
          WalkmanJS can be installed on any website with a single script tag. The widget loads asynchronously 
          and won&apos;t affect your page&apos;s performance.
        </p>
      </motion.section>

      {/* Code Examples */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Choose Your Framework</h2>
        
        <div className="rounded-xl overflow-hidden border border-[#1E3E62]/10">
          {/* Tabs */}
          <div className="flex border-b border-[#1E3E62]/10 bg-[#FBFBFB]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-[#FF6500]"
                    : "text-[#1E3E62]/60 hover:text-[#0B192C]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6500]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="relative">
            <div className="flex items-center justify-between px-4 py-3 bg-[#0B192C] border-b border-[#1E3E62]/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF6500]/60" />
                <div className="w-3 h-3 rounded-full bg-[#1E3E62]" />
                <div className="w-3 h-3 rounded-full bg-[#1E3E62]/50" />
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 text-xs text-[#FBFBFB]/70 hover:text-[#FBFBFB] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-[#0B192C] p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-[#FBFBFB]">
                <code>{codeExamples[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Configuration */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-xl font-semibold text-[#0B192C] mb-4">Configuration Options</h2>
        
        <div className="overflow-hidden rounded-xl border border-[#1E3E62]/10">
          <table className="w-full text-sm">
            <thead className="bg-[#FBFBFB] border-b border-[#1E3E62]/10">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Attribute</th>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Required</th>
                <th className="text-left px-4 py-3 font-semibold text-[#0B192C]">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#1E3E62]/10">
              <tr>
                <td className="px-4 py-3 font-mono text-[#FF6500]">data-tour-id</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded bg-[#FF6500]/10 text-[#FF6500] text-xs font-medium">
                    Yes
                  </span>
                </td>
                <td className="px-4 py-3 text-[#1E3E62]/70">Your unique tour identifier from the dashboard</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-[#FF6500]">data-api-key</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded bg-[#FF6500]/10 text-[#FF6500] text-xs font-medium">
                    Yes
                  </span>
                </td>
                <td className="px-4 py-3 text-[#1E3E62]/70">Your API key for authentication</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Note */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex gap-3 p-4 rounded-xl bg-[#FF6500]/5 border border-[#FF6500]/20">
          <AlertCircle className="w-5 h-5 text-[#FF6500] shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-[#0B192C] mb-1">Important</p>
            <p className="text-sm text-[#1E3E62]/70">
              Make sure to replace <code className="px-1.5 py-0.5 rounded bg-[#1E3E62]/10 text-[#0B192C] font-mono text-xs">YOUR_TOUR_ID</code> and{" "}
              <code className="px-1.5 py-0.5 rounded bg-[#1E3E62]/10 text-[#0B192C] font-mono text-xs">YOUR_API_KEY</code> with 
              the actual values from your WalkmanJS dashboard.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

