"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { docsNavigation } from "@/lib/docs-navigation"
import { BookOpen, ChevronRight } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    SidebarRail,
} from "@/components/ui/sidebar"

export function DocsSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar collapsible="icon" className="border-r border-[#1E3E62]/10 bg-white top-16 h-[calc(100vh-4rem)]">
            <SidebarHeader className="p-4 border-b border-[#1E3E62]/10">
                <Link href="/docs" className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FF6500] flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                        <span className="font-semibold text-[#0B192C] text-sm">WalkmanJS</span>
                        <span className="text-xs text-[#1E3E62]/50">Documentation</span>
                    </div>
                </Link>
            </SidebarHeader>

            <SidebarContent className="px-2 py-4">
                {docsNavigation.map((section) => (
                    <SidebarGroup key={section.title}>
                        <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-[#1E3E62]/50 px-2 mb-1">
                            {section.title}
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {section.links.map((link) => {
                                    const isActive = pathname === link.href
                                    const Icon = link.icon

                                    return (
                                        <SidebarMenuItem key={link.href}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={isActive}
                                                tooltip={link.title}
                                                className={
                                                    isActive
                                                        ? "bg-[#FF6500]/10 text-[#FF6500] hover:bg-[#FF6500]/15 hover:text-[#FF6500]"
                                                        : "text-[#1E3E62]/70 hover:bg-[#1E3E62]/5 hover:text-[#0B192C]"
                                                }
                                            >
                                                <Link href={link.href}>
                                                    {Icon && (
                                                        <Icon className={isActive ? "text-[#FF6500]" : "text-[#1E3E62]/50"} />
                                                    )}
                                                    <span>{link.title}</span>
                                                    {isActive && (
                                                        <ChevronRight className="ml-auto w-4 h-4" />
                                                    )}
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-[#1E3E62]/10">
                <div className="rounded-xl bg-linear-to-br from-[#1E3E62]/5 to-[#FF6500]/5 border border-[#1E3E62]/10 p-3 group-data-[collapsible=icon]:hidden">
                    <h5 className="font-semibold text-[#0B192C] text-sm mb-1">Need help?</h5>
                    <p className="text-xs text-[#1E3E62]/60 mb-2">
                        Can&apos;t find what you need?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center text-xs font-medium text-[#FF6500] hover:underline"
                    >
                        Contact Support
                        <ChevronRight className="w-3 h-3 ml-1" />
                    </Link>
                </div>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
