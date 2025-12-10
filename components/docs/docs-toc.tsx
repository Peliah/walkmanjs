"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TOCItem {
  id: string
  title: string
  level: number
}

interface DocsTOCProps {
  items?: TOCItem[]
}

export function DocsTOC({ items = [] }: DocsTOCProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -66%" }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <aside className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-24">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E3E62]/50 mb-4">
          On this page
        </h4>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block text-sm transition-colors",
                  item.level > 2 && "pl-4",
                  activeId === item.id
                    ? "text-[#FF6500] font-medium"
                    : "text-[#1E3E62]/60 hover:text-[#0B192C]"
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

