"use client";

import { cn } from "@/lib/utils";

const tabs = [
  { id: "steps", label: "Steps" },
  { id: "targeting", label: "Targeting" },
  { id: "appearance", label: "Appearance" },
  { id: "install", label: "Install" },
];

interface TourEditorTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TourEditorTabs({ activeTab, onTabChange }: TourEditorTabsProps) {
  return (
    <div className="border-b border-[#1E3E62]/10 bg-white px-4 lg:px-6">
      <nav className="-mb-px flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "border-b-2 py-3 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "border-[#FF6500] text-[#FF6500]"
                : "border-transparent text-[#1E3E62]/60 hover:border-[#1E3E62]/20 hover:text-[#0B192C]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

