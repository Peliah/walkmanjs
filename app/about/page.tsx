"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Users, Target, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "User First",
    description: "Every feature we build starts with understanding user needs and pain points.",
  },
  {
    icon: Target,
    title: "Simplicity",
    description: "We believe powerful tools don't have to be complicated. Simple is better.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously push boundaries to deliver cutting-edge onboarding solutions.",
  },
  {
    icon: Heart,
    title: "Quality",
    description: "We take pride in crafting polished, reliable, and performant products.",
  },
]

const team = [
  { name: "Pelayaa Epoupa", role: "Co-Founder & CTO", initial: "PE" },
  { name: "Elijah Victor", role: "Co-Founder & CEO", initial: "EV" },
  { name: "Peter Ajayi", role: "Lead Engineer", initial: "PA" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-14">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-8"
              >
                <span className="text-2xl font-bold">WJs</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
                Building the future of user onboarding
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
                We started WalkmanJs with a simple mission: make it effortless for any team to create beautiful, engaging
                onboarding experiences without writing code.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    WalkmanJs was born out of frustration. As developers, we spent countless hours building custom
                    onboarding flows for every product we worked on. Each time, we started from scratch.
                  </p>
                  <p>
                    We knew there had to be a better way. In 2025, we set out to build a tool that would let any team
                    create professional onboarding experiences in minutes, not months.
                  </p>
                  <p>
                    Today, WalkmanJs powers onboarding for thousands of products worldwide, helping millions of users get
                    started with new software every day.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl border border-border bg-background p-8 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-6xl sm:text-7xl font-bold mb-2"
                    >
                      2025
                    </motion.div>
                    <p className="text-muted-foreground">Year Founded</p>
                  </div>
                </div>

                {/* Stats floating cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="absolute -bottom-4 -left-4 rounded-lg border border-border bg-background p-4 shadow-lg"
                >
                  <div className="text-2xl font-bold">2+</div>
                  <p className="text-sm text-muted-foreground">Active Tours</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -top-4 -right-4 rounded-lg border border-border bg-background p-4 shadow-lg"
                >
                  <div className="text-2xl font-bold">3+</div>
                  <p className="text-sm text-muted-foreground">Users Guided</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at WalkmanJs.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value) => (
                <motion.div key={value.title} variants={itemVariants} className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foreground text-background mb-4"
                  >
                    <value.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Meet the Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The passionate people behind WalkmanJs.</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-12 flex-wrap"
            >
              {team.map((member) => (
                <motion.div key={member.name} variants={itemVariants} whileHover={{ y: -5 }} className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 mx-auto rounded-full bg-foreground text-background flex items-center justify-center mb-4"
                  >
                    <span className="text-2xl font-bold">{member.initial}</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center rounded-2xl border border-border bg-foreground text-background p-8 sm:p-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want to join our team?</h2>
              <p className="opacity-80 mb-6 max-w-xl mx-auto">
                {"We're"} always looking for talented people who are passionate about building great products.
                stay tuned for career opportunities!
              </p>
            
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
