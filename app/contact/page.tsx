"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Drop us an email anytime",
        value: "pelepoupa@gmail.com",
        href: "mailto:pelepoupa@gmail.com",
    },
    {
        icon: MessageSquare,
        title: "Live Chat",
        description: "Chat with our team",
        value: "Available 9am-5pm WAT",
        href: "#",
    },
    {
        icon: MapPin,
        title: "Location",
        description: "Our headquarters",
        value: "Lagos, Nigeria",
        href: "#",
    },
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

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className="min-h-screen bg-[#FBFBFB] font-sans">
            <main className="pt-14">
                {/* Hero Section */}
                <section className="py-16 sm:py-24 relative overflow-hidden">
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
                                <MessageSquare className="w-8 h-8" />
                            </motion.div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-[#0B192C]">
                                Get in <span className="text-[#FF6500]">Touch</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-[#1E3E62]/70 text-pretty">
                                Have a question or want to learn more about WalkmanJS? {"We'd"}{" "}
                                love to hear from you. Our team is here to help.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-8 bg-[#FBFBFB]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid sm:grid-cols-3 gap-6"
                        >
                            {contactInfo.map((info) => (
                                <motion.a
                                    key={info.title}
                                    href={info.href}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="group relative rounded-2xl border border-[#1E3E62]/10 bg-white p-6 shadow-sm transition-all hover:border-[#FF6500]/30 hover:shadow-lg"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF6500] text-white mb-4 shadow-lg shadow-[#FF6500]/20"
                                    >
                                        <info.icon className="w-6 h-6" />
                                    </motion.div>
                                    <h3 className="text-lg font-semibold mb-1 text-[#0B192C]">
                                        {info.title}
                                    </h3>
                                    <p className="text-sm text-[#1E3E62]/60 mb-2">
                                        {info.description}
                                    </p>
                                    <p className="text-sm font-medium text-[#FF6500]">
                                        {info.value}
                                    </p>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-16 bg-[#0B192C]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Left side - Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-[#FBFBFB]">
                                    Send Us a Message
                                </h2>
                                <div className="space-y-4 text-[#FBFBFB]/70">
                                    <p>
                                        Whether you have a question about features, pricing, or
                                        anything else, our team is ready to answer all your
                                        questions.
                                    </p>
                                    <p>
                                        Fill out the form and {"we'll"} get back to you within 24
                                        hours. For urgent matters, please use our live chat feature.
                                    </p>
                                </div>

                                {/* FAQ Quick Links */}
                                <div className="mt-8 p-6 rounded-xl bg-[#1E3E62]/30 border border-[#1E3E62]/50">
                                    <h3 className="font-semibold text-[#FBFBFB] mb-4">
                                        Common Questions
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "How do I get started?",
                                            "What's included in the free plan?",
                                            "Can I customize tour appearance?",
                                            "How does analytics tracking work?",
                                        ].map((question) => (
                                            <li key={question}>
                                                <a
                                                    href="/docs/faq"
                                                    className="text-sm text-[#FBFBFB]/60 hover:text-[#FF6500] transition-colors flex items-center gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6500]" />
                                                    {question}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Right side - Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="rounded-2xl border border-[#1E3E62]/50 bg-[#1E3E62]/20 p-6 sm:p-8 backdrop-blur-sm"
                            >
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring" }}
                                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4"
                                        >
                                            <CheckCircle2 className="w-8 h-8" />
                                        </motion.div>
                                        <h3 className="text-xl font-semibold text-[#FBFBFB] mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-[#FBFBFB]/60">
                                            Thanks for reaching out. {"We'll"} get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label
                                                    htmlFor="name"
                                                    className="text-[#FBFBFB]/80 text-sm"
                                                >
                                                    Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    required
                                                    className="bg-[#0B192C]/50 border-[#1E3E62]/50 text-[#FBFBFB] placeholder:text-[#FBFBFB]/40 focus:border-[#FF6500] focus:ring-[#FF6500]/20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label
                                                    htmlFor="email"
                                                    className="text-[#FBFBFB]/80 text-sm"
                                                >
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    required
                                                    className="bg-[#0B192C]/50 border-[#1E3E62]/50 text-[#FBFBFB] placeholder:text-[#FBFBFB]/40 focus:border-[#FF6500] focus:ring-[#FF6500]/20"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="subject"
                                                className="text-[#FBFBFB]/80 text-sm"
                                            >
                                                Subject
                                            </Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="How can we help?"
                                                required
                                                className="bg-[#0B192C]/50 border-[#1E3E62]/50 text-[#FBFBFB] placeholder:text-[#FBFBFB]/40 focus:border-[#FF6500] focus:ring-[#FF6500]/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="message"
                                                className="text-[#FBFBFB]/80 text-sm"
                                            >
                                                Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us more about your question or project..."
                                                required
                                                rows={5}
                                                className="bg-[#0B192C]/50 border-[#1E3E62]/50 text-[#FBFBFB] placeholder:text-[#FBFBFB]/40 focus:border-[#FF6500] focus:ring-[#FF6500]/20 resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#FF6500] hover:bg-[#FF6500]/90 text-white font-semibold py-6 shadow-lg shadow-[#FF6500]/25"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-5 h-5 ml-2" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Map/Location Section */}
                <section className="py-16 sm:py-24 bg-[#FBFBFB]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center rounded-2xl bg-linear-to-br from-[#0B192C] via-[#1E3E62] to-[#0B192C] p-8 sm:p-12 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6500_1px,transparent_1px),linear-gradient(to_bottom,#FF6500_1px,transparent_1px)] bg-size-[2rem_2rem]" />
                            </div>

                            <div className="relative">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#FF6500] text-white mb-6 shadow-lg shadow-[#FF6500]/25"
                                >
                                    <MapPin className="w-7 h-7" />
                                </motion.div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FBFBFB]">
                                    Based in Lagos, Nigeria
                                </h2>
                                <p className="text-[#FBFBFB]/70 mb-6 max-w-xl mx-auto">
                                    Our team works remotely from across Africa and around the
                                    world. {"We're"} always happy to connect virtually!
                                </p>
                                <div className="flex items-center justify-center gap-4 flex-wrap">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6500]/20 border border-[#FF6500]/30">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-sm font-medium text-[#FBFBFB]">
                                            Online Now
                                        </span>
                                    </span>
                                    <span className="text-sm text-[#FBFBFB]/60">
                                        Response time: ~24 hours
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

