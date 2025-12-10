"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useSteps } from "@/hooks/use-steps";

interface StepDropoffChartProps {
  tourId: Id<"tours">;
}

export function StepDropoffChart({ tourId }: StepDropoffChartProps) {
  const { steps, isLoading: stepsLoading } = useSteps(tourId);
  const events = useQuery(api.analytics.getByTour, { tourId });

  if (stepsLoading || events === undefined) {
    return (
      <div className="h-80 animate-pulse rounded-xl border border-[#1E3E62]/10 bg-white" />
    );
  }

  if (!steps || steps.length === 0) {
    return (
      <div className="flex h-80 items-center justify-center rounded-xl border border-[#1E3E62]/10 bg-white">
        <p className="text-[#1E3E62]/60">No steps to display</p>
      </div>
    );
  }

  const stepCounts: Record<string, number> = {};
  steps.forEach((step) => {
    stepCounts[step.stepId] = 0;
  });

  events.forEach((event) => {
    if (event.event === "step_completed" && event.stepId && stepCounts[event.stepId] !== undefined) {
      stepCounts[event.stepId]++;
    }
  });

  const sortedSteps = [...steps].sort((a, b) => a.order - b.order);
  const data = sortedSteps.map((step, index) => ({
    name: `Step ${index + 1}`,
    title: step.title,
    completions: stepCounts[step.stepId] || 0,
  }));

  return (
    <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
      <h3 className="text-lg font-semibold text-[#0B192C]">Step Completions</h3>
      <p className="text-sm text-[#1E3E62]/60">Completions per step</p>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E3E62" strokeOpacity={0.1} />
            <XAxis
              dataKey="name"
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
              formatter={(value, name, props) => [value, props.payload.title]}
            />
            <Bar dataKey="completions" fill="#FF6500" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

