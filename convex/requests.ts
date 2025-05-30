import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Mutation to submit a new device request
export const submitRequest = mutation({
  args: {
    requestType: v.union(v.literal("dropoff"), v.literal("pickup")),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    deviceType: v.string(),
    deviceCondition: v.string(),
    quantity: v.number(),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    zipCode: v.optional(v.string()),
    preferredDate: v.optional(v.string()),
    preferredTime: v.optional(v.string()),
    dropoffLocation: v.optional(v.string()),
    additionalInfo: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Always insert all fields, even if empty string or null
    const requestId = await ctx.db.insert("requests", {
      ...args,
    });

    // You can add notifications or logging here if needed

    return requestId;
  },
});

// Query to get all requests, most recent first
export const getRequests = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("requests").order("desc").collect();
  },
});