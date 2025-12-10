"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { formatDistanceToNow } from "date-fns";

interface AnalyticsEventsProps {
  tourId: Id<"tours">;
}

const eventLabels: Record<string, string> = {
  tour_started: "Tour started",
  step_viewed: "Step viewed",
  step_completed: "Step completed",
  step_skipped: "Step skipped",
  tour_completed: "Tour completed",
  tour_exited: "Tour exited",
};

const eventColors: Record<string, string> = {
  tour_started: "bg-blue-100 text-blue-700",
  step_viewed: "bg-gray-100 text-gray-700",
  step_completed: "bg-green-100 text-green-700",
  step_skipped: "bg-yellow-100 text-yellow-700",
  tour_completed: "bg-emerald-100 text-emerald-700",
  tour_exited: "bg-red-100 text-red-700",
};

export function AnalyticsEvents({ tourId }: AnalyticsEventsProps) {
  const events = useQuery(api.analytics.getByTour, { tourId });

  if (events === undefined) {
    return (
      <div className="h-64 animate-pulse rounded-xl border border-[#1E3E62]/10 bg-white" />
    );
  }

  const sortedEvents = [...events]
    .sort((a, b) => b._creationTime - a._creationTime)
    .slice(0, 20);

  return (
    <div className="rounded-xl border border-[#1E3E62]/10 bg-white">
      <div className="border-b border-[#1E3E62]/10 p-6">
        <h3 className="text-lg font-semibold text-[#0B192C]">Recent Events</h3>
        <p className="text-sm text-[#1E3E62]/60">Latest 20 events</p>
      </div>
      {sortedEvents.length === 0 ? (
        <div className="p-6 text-center text-sm text-[#1E3E62]/60">
          No events recorded yet
        </div>
      ) : (
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-white">
              <tr className="border-b border-[#1E3E62]/10 text-left text-xs text-[#1E3E62]/60">
                <th className="px-6 py-3 font-medium">Event</th>
                <th className="px-6 py-3 font-medium">Step</th>
                <th className="px-6 py-3 font-medium">Visitor</th>
                <th className="px-6 py-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {sortedEvents.map((event) => (
                <tr key={event._id} className="border-b border-[#1E3E62]/5">
                  <td className="px-6 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        eventColors[event.event] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {eventLabels[event.event] || event.event}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-[#1E3E62]/70">
                    {event.stepId || "-"}
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-[#1E3E62]/50">
                    {event.visitorId.slice(0, 8)}...
                  </td>
                  <td className="px-6 py-3 text-xs text-[#1E3E62]/50">
                    {formatDistanceToNow(event._creationTime, { addSuffix: true })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

