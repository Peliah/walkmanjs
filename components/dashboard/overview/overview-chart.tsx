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
import { useOverviewStats } from "@/hooks/use-analytics";

export function OverviewChart() {
  const { completionsOverTime, isLoading } = useOverviewStats();

  if (isLoading) {
    return (
      <div className="h-80 animate-pulse rounded-xl border border-[#1E3E62]/10 bg-white" />
    );
  }

  const data = completionsOverTime?.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    starts: item.starts,
    completions: item.completions,
  })) ?? [];

  return (
    <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
      <h3 className="text-lg font-semibold text-[#0B192C]">Completions</h3>
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
              dataKey="completions"
              stroke="#FF6500"
              fill="#FF6500"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

