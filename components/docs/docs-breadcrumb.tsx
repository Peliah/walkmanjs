"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { docsNavigation } from "@/lib/docs-navigation"

export function DocsBreadcrumb() {
  const pathname = usePathname()
  
  // Find current page title
  let currentTitle = "Documentation"
  for (const section of docsNavigation) {
    for (const link of section.links) {
      if (link.href === pathname) {
        currentTitle = link.title
        break
      }
    }
  }

  const segments = pathname.split("/").filter(Boolean)

  return (
    <nav className="flex items-center gap-2 text-sm text-[#1E3E62]/60 mb-6">
      <Link 
        href="/" 
        className="flex items-center gap-1 hover:text-[#FF6500] transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`
        const isLast = index === segments.length - 1
        const label = isLast ? currentTitle : segment.charAt(0).toUpperCase() + segment.slice(1)

        return (
          <div key={href} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-[#0B192C] font-medium">{label}</span>
            ) : (
              <Link href={href} className="hover:text-[#FF6500] transition-colors">
                {label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

