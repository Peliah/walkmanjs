"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface AnalyticsChartProps {
  tourId: Id<"tours">;
}

export function AnalyticsChart({ tourId }: AnalyticsChartProps) {
  const events = useQuery(api.analytics.getByTour, { tourId });

  if (events === undefined) {
    return (
      <div className="h-80 animate-pulse rounded-xl border border-[#1E3E62]/10 bg-white" />
    );
  }

  const dailyData: Record<string, { starts: number; completions: number }> = {};

  const now = Date.now();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(now - i * 24 * 60 * 60 * 1000);
    const key = date.toISOString().split("T")[0];
    dailyData[key] = { starts: 0, completions: 0 };
  }

  events.forEach((event) => {
    const date = new Date(event._creationTime).toISOString().split("T")[0];
    if (dailyData[date]) {
      if (event.event === "tour_started") dailyData[date].starts++;
      if (event.event === "tour_completed") dailyData[date].completions++;
    }
  });

  const data = Object.entries(dailyData).map(([date, values]) => ({
    date: new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    ...values,
  }));

  return (
    <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
      <h3 className="text-lg font-semibold text-[#0B192C]">Activity Over Time</h3>
      <p className="text-sm text-[#1E3E62]/60">Last 7 days</p>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E3E62" strokeOpacity={0.1} />
            <XAxis
              dataKey="date"
              tick={{ fill: "#1E3E62", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "#1E3E62", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0B192C",
                border: "none",
                borderRadius: "8px",
                color: "#FBFBFB",
              }}
            />
            <Area
              type="monotone"
              dataKey="starts"
              stroke="#1E3E62"
              fill="#1E3E62"
              fillOpacity={0.1}
              strokeWidth={2}
              name="Starts"
            />
            <Area
              type="monotone"
              dataKey="completions"
              stroke="#FF6500"
              fill="#FF6500"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Completions"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

