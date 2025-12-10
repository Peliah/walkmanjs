"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Map,
    BarChart3,
    Settings,
    Key,
} from "lucide-react";
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
} from "@/components/ui/sidebar";
import { DashboardSidebarUser } from "./dashboard-sidebar-user";

const navItems = [
    { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { title: "Tours", href: "/dashboard/tours", icon: Map },
    { title: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { title: "API Keys", href: "/dashboard/api-keys", icon: Key },
    { title: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/dashboard") {
            return pathname === "/dashboard";
        }
        return pathname.startsWith(href);
    };

    return (
        <Sidebar collapsible="icon" className="border-r border-[#1E3E62]/10">
            <SidebarHeader className="border-b border-[#1E3E62]/10 px-4 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FF6500]">
                        <span className="text-sm font-bold text-white">W</span>
                    </div>
                    <span className="text-lg font-semibold text-[#0B192C] group-data-[collapsible=icon]:hidden">
                        WalkmanJS
                    </span>
                </Link>
            </SidebarHeader>

            <SidebarContent className="px-2">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-[#1E3E62]/60 group-data-[collapsible=icon]:hidden">
                        Menu
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive(item.href)}
                                        tooltip={item.title}
                                        className="data-[active=true]:bg-[#FF6500]/10 data-[active=true]:text-[#FF6500]"
                                    >
                                        <Link href={item.href}>
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-[#1E3E62]/10 px-2">
                <DashboardSidebarUser />
            </SidebarFooter>
        </Sidebar>
    );
}

