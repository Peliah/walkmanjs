import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  }).index("by_clerk_id", ["clerkId"]),

  tours: defineTable({
    userId: v.id("users"),
    name: v.string(),
    description: v.optional(v.string()),
    status: v.union(v.literal("draft"), v.literal("active"), v.literal("paused")),
    targetUrl: v.optional(v.string()),
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
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"]),

  steps: defineTable({
    tourId: v.id("tours"),
    stepId: v.string(),
    title: v.string(),
    content: v.string(),
    targetSelector: v.string(),
    position: v.union(v.literal("top"), v.literal("bottom"), v.literal("left"), v.literal("right")),
    order: v.number(),
  })
    .index("by_tour", ["tourId"])
    .index("by_tour_order", ["tourId", "order"]),

  analytics: defineTable({
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
  })
    .index("by_tour", ["tourId"])
    .index("by_visitor", ["visitorId"])
    .index("by_event", ["event"]),

  apiKeys: defineTable({
    userId: v.id("users"),
    key: v.string(),
    name: v.optional(v.string()),
    lastUsed: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_key", ["key"]),
});
