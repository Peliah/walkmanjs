import {
    BookOpen,
    Rocket,
    Code,
    Target,
    Palette,
    Settings,
    BarChart3,
    Zap,
    HelpCircle,
    type LucideIcon
} from "lucide-react"

export interface DocLink {
    title: string
    href: string
    icon?: LucideIcon
}

export interface DocSection {
    title: string
    links: DocLink[]
}

export const docsNavigation: DocSection[] = [
    {
        title: "Getting Started",
        links: [
            { title: "Introduction", href: "/docs", icon: BookOpen },
            { title: "Quick Start", href: "/docs/quickstart", icon: Rocket },
            { title: "Installation", href: "/docs/installation", icon: Code },
        ],
    },
    {
        title: "Core Concepts",
        links: [
            { title: "Tours", href: "/docs/tours", icon: Target },
            { title: "Steps", href: "/docs/steps", icon: Zap },
            { title: "Targeting", href: "/docs/targeting", icon: Target },
            { title: "Appearance", href: "/docs/appearance", icon: Palette },
        ],
    },
    {
        title: "Advanced",
        links: [
            { title: "API Reference", href: "/docs/api", icon: Code },
            { title: "Analytics", href: "/docs/analytics", icon: BarChart3 },
            { title: "Configuration", href: "/docs/configuration", icon: Settings },
        ],
    },
    {
        title: "Resources",
        links: [
            { title: "FAQ", href: "/docs/faq", icon: HelpCircle },
        ],
    },
]

export function getDocBySlug(slug: string[]): { title: string; description: string } | null {
    const path = `/docs/${slug.join("/")}`

    for (const section of docsNavigation) {
        for (const link of section.links) {
            if (link.href === path) {
                return {
                    title: link.title,
                    description: `Learn about ${link.title.toLowerCase()} in WalkmanJS`,
                }
            }
        }
    }

    return null
}

