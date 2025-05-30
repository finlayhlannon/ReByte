import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  donations: defineTable({
    type: v.union(v.literal("pickup"), v.literal("dropoff")),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    deviceType: v.string(),
    deviceCondition: v.string(),
    quantity: v.number(),
    // Pickup specific fields
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    zipCode: v.optional(v.string()),
    preferredDate: v.optional(v.string()),
    preferredTime: v.optional(v.string()),
    // Dropoff specific fields
    dropoffLocation: v.optional(v.string()),
    // Common fields
    additionalInfo: v.optional(v.string()),
    status: v.string(), // "pending", "scheduled", "completed"
  }),
  
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    status: v.string(), // "new", "responded"
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
