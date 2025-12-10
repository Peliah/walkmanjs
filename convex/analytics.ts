import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const track = mutation({
  args: {
    tourId: v.id("tours"),
    visitorId: v.string(),
    event: v.union(
      v.literal("tour_started"),
      v.literal("step_viewed"),
      v.literal("step_completed"),
      v.literal("step_skipped"),
      v.literal("tour_completed"),
      v.literal("tour_exited")
    ),
    stepId: v.optional(v.string()),
    metadata: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("analytics", {
      tourId: args.tourId,
      visitorId: args.visitorId,
      event: args.event,
      stepId: args.stepId,
      metadata: args.metadata,
    });
  },
});

export const getByTour = query({
  args: { tourId: v.id("tours") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("analytics")
      .withIndex("by_tour", (q) => q.eq("tourId", args.tourId))
      .collect();
  },
});

export const getStats = query({
  args: { tourId: v.id("tours") },
  handler: async (ctx, args) => {
    const events = await ctx.db
      .query("analytics")
      .withIndex("by_tour", (q) => q.eq("tourId", args.tourId))
      .collect();

    const starts = events.filter((e) => e.event === "tour_started").length;
    const completions = events.filter((e) => e.event === "tour_completed").length;
    const skips = events.filter((e) => e.event === "step_skipped").length;
    const exits = events.filter((e) => e.event === "tour_exited").length;

    const completionRate = starts > 0 ? (completions / starts) * 100 : 0;
    const skipRate = starts > 0 ? (skips / starts) * 100 : 0;

    return {
      totalStarts: starts,
      totalCompletions: completions,
      totalSkips: skips,
      totalExits: exits,
      completionRate: Math.round(completionRate * 10) / 10,
      skipRate: Math.round(skipRate * 10) / 10,
    };
  },
});

export const getOverviewStats = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .first();

    if (!user) return null;

    const tours = await ctx.db
      .query("tours")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();

    const tourIds = tours.map((t) => t._id);
    let totalStarts = 0;
    let totalCompletions = 0;

    for (const tourId of tourIds) {
      const events = await ctx.db
        .query("analytics")
        .withIndex("by_tour", (q) => q.eq("tourId", tourId))
        .collect();

      totalStarts += events.filter((e) => e.event === "tour_started").length;
      totalCompletions += events.filter((e) => e.event === "tour_completed").length;
    }

    const completionRate = totalStarts > 0 ? (totalCompletions / totalStarts) * 100 : 0;

    return {
      totalTours: tours.length,
      activeTours: tours.filter((t) => t.status === "active").length,
      totalStarts,
      totalCompletions,
      completionRate: Math.round(completionRate * 10) / 10,
    };
  },
});

export const getRecentActivity = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .first();

    if (!user) return [];

    const tours = await ctx.db
      .query("tours")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();

    // @ts-ignore
    const _tourMap = new Map(tours.map((t) => [t._id, t]));
    const allEvents: Array<{
      _id: string;
      _creationTime: number;
      tourId: string;
      tourName: string;
      event: string;
      stepId?: string;
      visitorId: string;
    }> = [];

    for (const tour of tours) {
      const events = await ctx.db
        .query("analytics")
        .withIndex("by_tour", (q) => q.eq("tourId", tour._id))
        .collect();

      for (const event of events) {
        allEvents.push({
          _id: event._id,
          _creationTime: event._creationTime,
          tourId: tour._id,
          tourName: tour.name,
          event: event.event,
          stepId: event.stepId,
          visitorId: event.visitorId,
        });
      }
    }

    return allEvents
      .sort((a, b) => b._creationTime - a._creationTime)
      .slice(0, args.limit || 10);
  },
});

export const getCompletionsOverTime = query({
  args: { days: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .first();

    if (!user) return [];

    const tours = await ctx.db
      .query("tours")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();

    const daysCount = args.days || 7;
    const now = Date.now();
    const startTime = now - daysCount * 24 * 60 * 60 * 1000;

    const dailyData: Record<string, { starts: number; completions: number }> = {};

    for (let i = 0; i < daysCount; i++) {
      const date = new Date(now - i * 24 * 60 * 60 * 1000);
      const key = date.toISOString().split("T")[0];
      dailyData[key] = { starts: 0, completions: 0 };
    }

    for (const tour of tours) {
      const events = await ctx.db
        .query("analytics")
        .withIndex("by_tour", (q) => q.eq("tourId", tour._id))
        .collect();

      for (const event of events) {
        if (event._creationTime < startTime) continue;

        const date = new Date(event._creationTime).toISOString().split("T")[0];
        if (!dailyData[date]) continue;

        if (event.event === "tour_started") {
          dailyData[date].starts++;
        } else if (event.event === "tour_completed") {
          dailyData[date].completions++;
        }
      }
    }

    return Object.entries(dailyData)
      .map(([date, data]) => ({
        date,
        starts: data.starts,
        completions: data.completions,
      }))
      .sort((a, b) => a.date.localeCompare(b.date));
  },
});

