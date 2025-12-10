"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useAuthDialogs } from "@/hooks"

export function HeroSection() {
  const { openLogin, openSignup } = useAuthDialogs();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm font-medium">Now in Public Beta</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl mx-auto"
        >
          Create embeddable tours{" "}
          <span className="relative">
            in minutes
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-2 left-0 right-0 h-3 bg-primary/10 -z-10 origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
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
          <Button onClick={openLogin} size="lg" className="group bg-[#FF6500] px-5 text-sm font-medium text-white hover:bg-[#FF6500]/90">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Animated mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-4xl rounded-xl border border-border bg-background shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
              </div>
              <div className="flex-1 text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-background text-xs text-muted-foreground">
                  yourapp.com
                </div>
              </div>
            </div>
            <div className="p-8 min-h-[300px] relative">
              {/* Simulated app content */}
              <div className="space-y-4">
                <div className="h-8 w-48 bg-muted rounded" />
                <div className="h-4 w-full max-w-md bg-muted rounded" />
                <div className="h-4 w-full max-w-sm bg-muted rounded" />
              </div>

              {/* Tour tooltip mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute top-8 right-8 w-64 rounded-lg border border-border bg-background p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center text-background text-xs font-bold">
                    1
                  </div>
                  <span className="text-sm font-semibold">Welcome!</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {"Let's"} take a quick tour to get you started with our platform.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Step 1 of 5</span>
                  <Button size="sm">Next</Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
            <div className="absolute inset-0 bg-linear-to-r from-foreground/20 via-transparent to-foreground/20" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
