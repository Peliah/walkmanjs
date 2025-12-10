"use client";

import { useOverviewStats } from "@/hooks/use-analytics";
import { formatDistanceToNow } from "date-fns";

const eventLabels: Record<string, string> = {
  tour_started: "Tour started",
  step_viewed: "Step viewed",
  step_completed: "Step completed",
  step_skipped: "Step skipped",
  tour_completed: "Tour completed",
  tour_exited: "Tour exited",
};

export function RecentActivity() {
  const { recentActivity, isLoading } = useOverviewStats();

  if (isLoading) {
    return (
      <div className="h-80 animate-pulse rounded-xl border border-[#1E3E62]/10 bg-white" />
    );
  }

  return (
    <div className="rounded-xl border border-[#1E3E62]/10 bg-white">
      <div className="border-b border-[#1E3E62]/10 p-6">
        <h3 className="text-lg font-semibold text-[#0B192C]">Recent Activity</h3>
        <p className="text-sm text-[#1E3E62]/60">Latest events from your tours</p>
      </div>
      <div className="max-h-64 overflow-y-auto">
        {!recentActivity || recentActivity.length === 0 ? (
          <div className="p-6 text-center text-sm text-[#1E3E62]/60">
            No activity yet
          </div>
        ) : (
          <div className="divide-y divide-[#1E3E62]/10">
            {recentActivity.map((activity) => (
              <div key={activity._id} className="flex items-start justify-between p-4">
                <div>
                  <p className="font-medium text-[#0B192C]">
                    {eventLabels[activity.event] || activity.event}
                  </p>
                  <p className="text-sm text-[#1E3E62]/60">{activity.tourName}</p>
                </div>
                <span className="shrink-0 text-xs text-[#1E3E62]/50">
                  {formatDistanceToNow(activity._creationTime, { addSuffix: true })}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

