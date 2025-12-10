"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

interface DashboardHeaderProps {
  title?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({ title, children }: DashboardHeaderProps) {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-[#1E3E62]/10 bg-white px-4 lg:px-6">
      <SidebarTrigger className="-ml-2 text-[#1E3E62]" />
      <Separator orientation="vertical" className="h-6 bg-[#1E3E62]/10" />
      {title && (
        <h1 className="text-lg font-semibold text-[#0B192C]">{title}</h1>
      )}
      {children && <div className="ml-auto flex items-center gap-2">{children}</div>}
    </header>
  );
}

