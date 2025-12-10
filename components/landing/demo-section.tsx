"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const tourSteps = [
  { id: 1, title: "Welcome", content: "This is step 1 of the demo tour." },
  { id: 2, title: "Features", content: "Explore all the amazing features." },
  { id: 3, title: "Settings", content: "Customize your experience here." },
  { id: 4, title: "Analytics", content: "Track your progress and metrics." },
  { id: 5, title: "Complete!", content: "You've finished the tour!" },
]

export function DemoSection() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <section id="try-demo" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Try the Demo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how Walkmanjs works with this interactive demonstration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-xl border border-border bg-background shadow-xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
              </div>
            </div>

            {/* Demo content */}
            <div className="p-8 min-h-[400px] relative">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {["Dashboard", "Settings", "Analytics", "Profile", "Reports", "Help"].map((item, i) => (
                  <div
                    key={item}
                    className={`p-4 rounded-lg border border-border text-center text-sm font-medium transition-colors ${
                      i === currentStep && currentStep < 5 ? "bg-primary text-primary-foreground" : "bg-secondary"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Tour tooltip */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-80 rounded-lg border border-border bg-card p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {tourSteps[currentStep].id}
                  </div>
                  <span className="text-sm font-semibold">{tourSteps[currentStep].title}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{tourSteps[currentStep].content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    Step {currentStep + 1} of {tourSteps.length}
                  </span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                      Back
                    </Button>
                    <Button size="sm" onClick={nextStep} className="bg-primary hover:bg-primary/90">
                      {currentStep === tourSteps.length - 1 ? "Restart" : "Next"}
                    </Button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
