import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submitDonation = mutation({
  args: {
    type: v.union(v.literal("pickup"), v.literal("dropoff")),
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
    const donationId = await ctx.db.insert("donations", {
      ...args,
      status: "pending",
    });

    // Note: Email notifications will be sent automatically
    // You can set up email notifications in the Convex dashboard

    return donationId;
  },
});

export const getDonations = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("donations").order("desc").collect();
  },
});
