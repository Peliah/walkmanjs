import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-[#1E3E62]/70">{title}</p>
        <Icon className="h-5 w-5 text-[#FF6500]" />
      </div>
      <p className="mt-3 text-3xl font-semibold text-[#0B192C]">{value}</p>
    </div>
  );
}

