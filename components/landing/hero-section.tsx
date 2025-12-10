"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useAuthDialogs } from "@/hooks"

export function HeroSection() {
  const { openLogin } = useAuthDialogs();
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[#FBFBFB]">
      {/* Animated background with brand colors */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3E62_1px,transparent_1px),linear-gradient(to_bottom,#1E3E62_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#1E3E62]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3E62]/20 bg-white/80 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6500] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6500]" />
          </span>
          <span className="text-sm font-medium text-[#0B192C]">Now in Public Beta</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl mx-auto text-[#0B192C]"
        >
          Create embeddable tours{" "}
          <span className="relative">
            <span className="text-[#FF6500]">in minutes</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-2 left-0 right-0 h-3 bg-[#FF6500]/15 -z-10 origin-left rounded-sm"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[#1E3E62]/70 max-w-2xl mx-auto text-pretty"
        >
          Build interactive onboarding flows with our visual tour builder. Configure targeting, appearance, and steps —
          then embed with a single script tag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            id="get-started" 
            onClick={openLogin} 
            size="lg" 
            className="group bg-[#FF6500] px-6 text-sm font-medium text-white hover:bg-[#FF6500]/90 shadow-lg shadow-[#FF6500]/25"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            id="launch-demo"
            variant="outline"
            size="lg"
            className="group border-[#1E3E62]/30 text-[#0B192C] hover:bg-[#1E3E62]/5 hover:border-[#1E3E62]/50"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={() => (window as any).WalkmanJS?.start()}
          >
            <Play className="mr-2 h-4 w-4 fill-[#FF6500] text-[#FF6500]" />
            Launch Demo
          </Button>
        </motion.div>

        {/* Animated mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-4xl rounded-xl border border-[#1E3E62]/10 bg-white shadow-2xl shadow-[#0B192C]/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E3E62]/10 bg-[#FBFBFB]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF6500]/60" />
                <div className="w-3 h-3 rounded-full bg-[#1E3E62]/30" />
                <div className="w-3 h-3 rounded-full bg-[#1E3E62]/20" />
              </div>
              <div className="flex-1 text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-white text-xs text-[#1E3E62]/60">
                  yourapp.com
                </div>
              </div>
            </div>
            <div className="p-8 min-h-[300px] relative bg-white">
              {/* Simulated app content */}
              <div className="space-y-4">
                <div className="h-8 w-48 bg-[#1E3E62]/10 rounded" />
                <div className="h-4 w-full max-w-md bg-[#1E3E62]/5 rounded" />
                <div className="h-4 w-full max-w-sm bg-[#1E3E62]/5 rounded" />
              </div>

              {/* Tour tooltip mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute top-8 right-8 w-64 rounded-lg border border-[#1E3E62]/10 bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#FF6500] flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                  <span className="text-sm font-semibold text-[#0B192C]">Welcome!</span>
                </div>
                <p className="text-sm text-[#1E3E62]/70 mb-4">
                  {"Let's"} take a quick tour to get you started with our platform.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#1E3E62]/50">Step 1 of 5</span>
                  <Button size="sm" className="bg-[#FF6500] hover:bg-[#FF6500]/90 text-white">Next</Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
            <div className="absolute inset-0 bg-linear-to-r from-[#FF6500]/30 via-transparent to-[#1E3E62]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
