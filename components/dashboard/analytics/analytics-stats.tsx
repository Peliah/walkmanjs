"use client";

import { Play, CheckCircle, SkipForward, LogOut } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";
import { useAnalytics } from "@/hooks/use-analytics";
import { StatCard } from "../overview/stat-card";

interface AnalyticsStatsProps {
  tourId: Id<"tours">;
}

export function AnalyticsStats({ tourId }: AnalyticsStatsProps) {
  const { stats, isLoading } = useAnalytics(tourId);

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-xl bg-[#1E3E62]/10" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Tour Starts"
        value={stats?.totalStarts ?? 0}
        icon={Play}
      />
      <StatCard
        title="Completions"
        value={stats?.totalCompletions ?? 0}
        icon={CheckCircle}
      />
      <StatCard
        title="Completion Rate"
        value={`${stats?.completionRate ?? 0}%`}
        icon={CheckCircle}
      />
      <StatCard
        title="Skip Rate"
        value={`${stats?.skipRate ?? 0}%`}
        icon={SkipForward}
      />
    </div>
  );
}

