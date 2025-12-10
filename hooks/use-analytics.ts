"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export function useAnalytics(tourId: Id<"tours"> | undefined) {
    const stats = useQuery(api.analytics.getStats, tourId ? { tourId } : "skip");
    const events = useQuery(api.analytics.getByTour, tourId ? { tourId } : "skip");

    return {
        stats,
        events,
        isLoading: stats === undefined,
    };
}

export function useOverviewStats() {
    const stats = useQuery(api.analytics.getOverviewStats);
    const recentActivity = useQuery(api.analytics.getRecentActivity, { limit: 10 });
    const completionsOverTime = useQuery(api.analytics.getCompletionsOverTime, { days: 7 });

    return {
        stats,
        recentActivity,
        completionsOverTime,
        isLoading: stats === undefined,
    };
}

