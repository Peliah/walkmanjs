"use client";

import { useTours } from "@/hooks/use-tours";
import { TourCard } from "./tour-card";
import { ToursEmptyState } from "./tours-empty-state";
import { TourListSkeleton } from "./tour-list-skeleton";

export function TourList() {
  const { tours, isLoading } = useTours();

  if (isLoading) {
    return <TourListSkeleton />;
  }

  if (!tours || tours.length === 0) {
    return <ToursEmptyState />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour) => (
        <TourCard key={tour._id} tour={tour} />
      ))}
    </div>
  );
}

