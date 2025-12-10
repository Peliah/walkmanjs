"use client";

import { Map, Play, CheckCircle, Percent } from "lucide-react";
import { useOverviewStats } from "@/hooks/use-analytics";
import { StatCard } from "./stat-card";

export function OverviewStats() {
  const { stats, isLoading } = useOverviewStats();

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-28 animate-pulse rounded-xl border border-[#1E3E62]/10 bg-white"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Tours"
        value={stats?.totalTours ?? 0}
        icon={Map}
      />
      <StatCard
        title="Active Tours"
        value={stats?.activeTours ?? 0}
        icon={Play}
      />
      <StatCard
        title="Total Completions"
        value={stats?.totalCompletions ?? 0}
        icon={CheckCircle}
      />
      <StatCard
        title="Completion Rate"
        value={`${stats?.completionRate ?? 0}%`}
        icon={Percent}
      />
    </div>
  );
}

