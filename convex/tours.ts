import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) return [];

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
            .first();

        if (!user) return [];

        return await ctx.db
            .query("tours")
            .withIndex("by_user", (q) => q.eq("userId", user._id))
            .collect();
    },
});

export const get = query({
    args: { tourId: v.id("tours") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.tourId);
    },
});

export const create = mutation({
    args: {
        name: v.string(),
        description: v.optional(v.string()),
        targetUrl: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
            .first();

        if (!user) throw new Error("User not found");

        return await ctx.db.insert("tours", {
            userId: user._id,
            name: args.name,
            description: args.description,
            targetUrl: args.targetUrl,
            status: "draft",
        });
    },
});

export const update = mutation({
    args: {
        tourId: v.id("tours"),
        name: v.optional(v.string()),
        description: v.optional(v.string()),
        targetUrl: v.optional(v.string()),
        status: v.optional(v.union(v.literal("draft"), v.literal("active"), v.literal("paused"))),
        theme: v.optional(
            v.object({
                primaryColor: v.string(),
                backgroundColor: v.string(),
                textColor: v.string(),
                borderRadius: v.number(),
                overlayEnabled: v.boolean(),
                overlayOpacity: v.number(),
            })
        ),
        targeting: v.optional(
            v.object({
                urlMatchType: v.union(v.literal("exact"), v.literal("contains"), v.literal("regex")),
                urlPattern: v.string(),
                triggerType: v.union(v.literal("pageload"), v.literal("delay"), v.literal("click")),
                triggerDelay: v.optional(v.number()),
                frequency: v.union(v.literal("once"), v.literal("session"), v.literal("always")),
            })
        ),
    },
    handler: async (ctx, args) => {
        const { tourId, ...updates } = args;
        const filtered = Object.fromEntries(
            Object.entries(updates).filter(([, v]) => v !== undefined)
        );
        await ctx.db.patch(tourId, filtered);
    },
});

export const remove = mutation({
    args: { tourId: v.id("tours") },
    handler: async (ctx, args) => {
        const steps = await ctx.db
            .query("steps")
            .withIndex("by_tour", (q) => q.eq("tourId", args.tourId))
            .collect();

        for (const step of steps) {
            await ctx.db.delete(step._id);
        }

        await ctx.db.delete(args.tourId);
    },
});

export const duplicate = mutation({
    args: { tourId: v.id("tours") },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const tour = await ctx.db.get(args.tourId);
        if (!tour) throw new Error("Tour not found");

        const newTourId = await ctx.db.insert("tours", {
            userId: tour.userId,
            name: `${tour.name} (Copy)`,
            description: tour.description,
            targetUrl: tour.targetUrl,
            status: "draft",
            theme: tour.theme,
            targeting: tour.targeting,
        });

        const steps = await ctx.db
            .query("steps")
            .withIndex("by_tour", (q) => q.eq("tourId", args.tourId))
            .collect();

        for (const step of steps) {
            await ctx.db.insert("steps", {
                tourId: newTourId,
                stepId: step.stepId,
                title: step.title,
                content: step.content,
                targetSelector: step.targetSelector,
                position: step.position,
                order: step.order,
            });
        }

        return newTourId;
    },
});

