import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { tourId: v.id("tours") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("steps")
      .withIndex("by_tour_order", (q) => q.eq("tourId", args.tourId))
      .collect();
  },
});

export const get = query({
  args: { stepId: v.id("steps") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.stepId);
  },
});

export const create = mutation({
  args: {
    tourId: v.id("tours"),
    title: v.string(),
    content: v.string(),
    targetSelector: v.string(),
    position: v.union(v.literal("top"), v.literal("bottom"), v.literal("left"), v.literal("right")),
  },
  handler: async (ctx, args) => {
    const existingSteps = await ctx.db
      .query("steps")
      .withIndex("by_tour", (q) => q.eq("tourId", args.tourId))
      .collect();

    const order = existingSteps.length;
    const stepId = `step_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    return await ctx.db.insert("steps", {
      tourId: args.tourId,
      stepId,
      title: args.title,
      content: args.content,
      targetSelector: args.targetSelector,
      position: args.position,
      order,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("steps"),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    targetSelector: v.optional(v.string()),
    position: v.optional(v.union(v.literal("top"), v.literal("bottom"), v.literal("left"), v.literal("right"))),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const filtered = Object.fromEntries(
      Object.entries(updates).filter(([, v]) => v !== undefined)
    );
    await ctx.db.patch(id, filtered);
  },
});

export const remove = mutation({
  args: { id: v.id("steps") },
  handler: async (ctx, args) => {
    const step = await ctx.db.get(args.id);
    if (!step) return;

    await ctx.db.delete(args.id);

    const remainingSteps = await ctx.db
      .query("steps")
      .withIndex("by_tour", (q) => q.eq("tourId", step.tourId))
      .collect();

    const sorted = remainingSteps.sort((a, b) => a.order - b.order);
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].order !== i) {
        await ctx.db.patch(sorted[i]._id, { order: i });
      }
    }
  },
});

export const reorder = mutation({
  args: {
    tourId: v.id("tours"),
    stepIds: v.array(v.id("steps")),
  },
  handler: async (ctx, args) => {
    for (let i = 0; i < args.stepIds.length; i++) {
      await ctx.db.patch(args.stepIds[i], { order: i });
    }
  },
});

// Bulk import steps from JSON - creates, updates, or deletes based on content
export const bulkImport = mutation({
  args: {
    tourId: v.id("tours"),
    steps: v.array(
      v.object({
        title: v.string(),
        content: v.string(),
        targetSelector: v.string(),
        position: v.union(v.literal("top"), v.literal("bottom"), v.literal("left"), v.literal("right")),
        order: v.number(),
      })
    ),
  },
  handler: async (ctx, args) => {
    // Verify tour exists
    const tour = await ctx.db.get(args.tourId);
    if (!tour) {
      throw new Error("Tour not found");
    }

    // Get existing steps for this tour
    const existingSteps = await ctx.db
      .query("steps")
      .withIndex("by_tour", (q) => q.eq("tourId", args.tourId))
      .collect();

    // Delete all existing steps
    for (const step of existingSteps) {
      await ctx.db.delete(step._id);
    }

    // Sort steps by order before creating
    const sortedSteps = [...args.steps].sort((a, b) => a.order - b.order);

    // Create new steps from the imported JSON
    const createdSteps = [];
    const timestamp = Date.now();
    
    for (let i = 0; i < sortedSteps.length; i++) {
      const step = sortedSteps[i];
      const stepId = `step_${timestamp}_${i}`;
      
      const newStepId = await ctx.db.insert("steps", {
        tourId: args.tourId,
        stepId,
        title: step.title,
        content: step.content,
        targetSelector: step.targetSelector,
        position: step.position,
        order: step.order,
      });
      
      createdSteps.push(newStepId);
    }

    return {
      deleted: existingSteps.length,
      created: createdSteps.length,
    };
  },
});

