"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useAuthDialogs } from "@/hooks"

export function CTASection() {
  const { openSignup } = useAuthDialogs();

  return (
    <section className="py-24 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-linear-to-br from-[#0B192C] via-[#1E3E62] to-[#0B192C] p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6500_1px,transparent_1px),linear-gradient(to_bottom,#FF6500_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6500]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1E3E62]/40 rounded-full blur-3xl" />

          <div className="relative text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6500]/20 border border-[#FF6500]/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#FF6500]" />
              <span className="text-sm font-medium text-[#FF6500]">No credit card required</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance text-[#FBFBFB]">
              Start building tours today
            </h2>
            <p className="text-lg text-[#FBFBFB]/70 max-w-2xl mx-auto mb-8">
              Join teams creating amazing onboarding experiences. Set up your first tour in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={openSignup}
                size="lg"
                className="group bg-[#FF6500] hover:bg-[#FF6500]/90 text-white shadow-lg shadow-[#FF6500]/25 cursor-pointer"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FBFBFB]/20 text-[#1E3E62] hover:text-[#FBFBFB] hover:bg-[#FBFBFB]/10 cursor-pointer"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
