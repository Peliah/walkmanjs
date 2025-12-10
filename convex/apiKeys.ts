import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

function generateApiKey(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "wk_";
    for (let i = 0; i < 32; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
}

export const get = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) return null;

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
            .first();

        if (!user) return null;

        return await ctx.db
            .query("apiKeys")
            .withIndex("by_user", (q) => q.eq("userId", user._id))
            .first();
    },
});

export const create = mutation({
    args: { name: v.optional(v.string()) },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
            .first();

        if (!user) throw new Error("User not found");

        const existing = await ctx.db
            .query("apiKeys")
            .withIndex("by_user", (q) => q.eq("userId", user._id))
            .first();

        if (existing) {
            await ctx.db.delete(existing._id);
        }

        return await ctx.db.insert("apiKeys", {
            userId: user._id,
            key: generateApiKey(),
            name: args.name,
        });
    },
});

export const regenerate = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
            .first();

        if (!user) throw new Error("User not found");

        const existing = await ctx.db
            .query("apiKeys")
            .withIndex("by_user", (q) => q.eq("userId", user._id))
            .first();

        if (existing) {
            await ctx.db.patch(existing._id, { key: generateApiKey() });
            return existing._id;
        }

        return await ctx.db.insert("apiKeys", {
            userId: user._id,
            key: generateApiKey(),
        });
    },
});

export const validate = query({
    args: { key: v.string() },
    handler: async (ctx, args) => {
        const apiKey = await ctx.db
            .query("apiKeys")
            .withIndex("by_key", (q) => q.eq("key", args.key))
            .first();

        return apiKey !== null;
    },
});

