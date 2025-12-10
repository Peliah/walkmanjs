"use client"

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
  { name: "Pelayah Epoupa", role: "Co-Founder & CTO", initial: "PE" },
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
    <div className="min-h-screen bg-[#FBFBFB] font-sans">
      <main className="pt-14">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#FF6500]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#1E3E62]/5 rounded-full blur-3xl" />
          </div>

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
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FF6500] text-white mb-8 shadow-lg shadow-[#FF6500]/25"
              >
                <span className="text-2xl font-bold">W</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-[#0B192C]">
                Building the future of{" "}
                <span className="text-[#FF6500]">user onboarding</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#1E3E62]/70 text-pretty">
                We started WalkmanJs with a simple mission: make it effortless for any team to create beautiful, engaging
                onboarding experiences without writing code.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-[#0B192C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-[#FBFBFB]">Our Story</h2>
                <div className="space-y-4 text-[#FBFBFB]/70">
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
                <div className="aspect-square rounded-2xl border border-[#1E3E62] bg-[#1E3E62]/30 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-6xl sm:text-7xl font-bold mb-2 text-[#FF6500]"
                    >
                      2025
                    </motion.div>
                    <p className="text-[#FBFBFB]/60">Year Founded</p>
                  </div>
                </div>

                {/* Stats floating cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="absolute -bottom-4 -left-4 rounded-lg border border-[#1E3E62]/50 bg-white p-4 shadow-xl"
                >
                  <div className="text-2xl font-bold text-[#FF6500]">2+</div>
                  <p className="text-sm text-[#1E3E62]/70">Active Tours</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -top-4 -right-4 rounded-lg border border-[#1E3E62]/50 bg-white p-4 shadow-xl"
                >
                  <div className="text-2xl font-bold text-[#FF6500]">3+</div>
                  <p className="text-sm text-[#1E3E62]/70">Users Guided</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24 bg-[#FBFBFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#0B192C]">Our Values</h2>
              <p className="text-lg text-[#1E3E62]/70 max-w-2xl mx-auto">
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
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#FF6500] text-white mb-4 shadow-lg shadow-[#FF6500]/20"
                  >
                    <value.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-[#0B192C]">{value.title}</h3>
                  <p className="text-[#1E3E62]/70 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-[#1E3E62]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[#0B192C]">Meet the Team</h2>
              <p className="text-lg text-[#1E3E62]/70 max-w-2xl mx-auto">The passionate people behind WalkmanJs.</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-12 flex-wrap"
            >
              {team.map((member, index) => (
                <motion.div key={member.name} variants={itemVariants} whileHover={{ y: -5 }} className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 shadow-lg ${index === 0
                      ? "bg-[#FF6500] shadow-[#FF6500]/25"
                      : index === 1
                        ? "bg-[#1E3E62] shadow-[#1E3E62]/25"
                        : "bg-[#0B192C] shadow-[#0B192C]/25"
                      }`}
                  >
                    <span className="text-2xl font-bold text-white">{member.initial}</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-[#0B192C]">{member.name}</h3>
                  <p className="text-[#1E3E62]/70 text-sm">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-[#FBFBFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center rounded-2xl bg-linear-to-br from-[#0B192C] via-[#1E3E62] to-[#0B192C] p-8 sm:p-12 relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6500_1px,transparent_1px),linear-gradient(to_bottom,#FF6500_1px,transparent_1px)] bg-size-[2rem_2rem]" />
              </div>

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FBFBFB]">Want to join our team?</h2>
                <p className="text-[#FBFBFB]/70 mb-6 max-w-xl mx-auto">
                  {"We're"} always looking for talented people who are passionate about building great products.
                  Stay tuned for career opportunities!
                </p>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6500]/20 border border-[#FF6500]/30"
                >
                  <span className="text-sm font-medium text-[#FF6500]">Coming Soon</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
