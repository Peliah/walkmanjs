"use client";

import { useState } from "react";
import { useTours } from "@/hooks/use-tours";
import { Id } from "@/convex/_generated/dataModel";
import { TourSelector } from "./tour-selector";
import { AnalyticsStats } from "./analytics-stats";
import { AnalyticsChart } from "./analytics-chart";
import { StepDropoffChart } from "./step-dropoff-chart";
import { AnalyticsEvents } from "./analytics-events";

export function AnalyticsContent() {
  const { tours, isLoading } = useTours();
  const [selectedTourId, setSelectedTourId] = useState<Id<"tours"> | null>(null);

  if (isLoading) {
    return <AnalyticsContentSkeleton />;
  }

  if (!tours || tours.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-[#1E3E62]/20 bg-white py-16">
        <p className="text-[#1E3E62]/60">No tours yet. Create a tour to see analytics.</p>
      </div>
    );
  }

  const activeTourId = selectedTourId || tours[0]._id;

  return (
    <div className="space-y-6">
      <TourSelector
        tours={tours}
        selectedTourId={activeTourId}
        onSelect={setSelectedTourId}
      />
      <AnalyticsStats tourId={activeTourId} />
      <div className="grid gap-6 lg:grid-cols-2">
        <AnalyticsChart tourId={activeTourId} />
        <StepDropoffChart tourId={activeTourId} />
      </div>
      <AnalyticsEvents tourId={activeTourId} />
    </div>
  );
}

function AnalyticsContentSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-10 w-64 animate-pulse rounded-lg bg-[#1E3E62]/10" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-xl bg-[#1E3E62]/10" />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-80 animate-pulse rounded-xl bg-[#1E3E62]/10" />
        <div className="h-80 animate-pulse rounded-xl bg-[#1E3E62]/10" />
      </div>
    </div>
  );
}

