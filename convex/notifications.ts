"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

const resend = new Resend(process.env.CONVEX_RESEND_API_KEY);

export const sendDonationNotification = action({
  args: {
    donationId: v.id("donations"),
    donorName: v.string(),
    donorEmail: v.string(),
    deviceType: v.string(),
    deviceCondition: v.string(),
    quantity: v.number(),
    type: v.union(v.literal("pickup"), v.literal("dropoff")),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    zipCode: v.optional(v.string()),
    preferredDate: v.optional(v.string()),
    preferredTime: v.optional(v.string()),
    dropoffLocation: v.optional(v.string()),
    additionalInfo: v.optional(v.string()),
    phone: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["roypark.victoria@gmail.com"],
        subject: `New Donation Request - ${args.deviceType} from ${args.donorName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #059669;">New Donation Request Received!</h2>
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #065f46; margin-top: 0;">Donation Details</h3>
              <ul style="padding-left: 1em;">
                <li><strong>Donation ID:</strong> ${args.donationId}</li>
                <li><strong>Name:</strong> ${args.donorName}</li>
                <li><strong>Email:</strong> ${args.donorEmail}</li>
                <li><strong>Phone:</strong> ${args.phone ?? ""}</li>
                <li><strong>Device Type:</strong> ${args.deviceType}</li>
                <li><strong>Device Condition:</strong> ${args.deviceCondition ?? ""}</li>
                <li><strong>Quantity:</strong> ${args.quantity}</li>
                <li><strong>Type:</strong> ${args.type === "pickup" ? "Pickup" : "Drop-off"}</li>
                <li><strong>Address:</strong> ${args.address ?? ""}</li>
                <li><strong>City:</strong> ${args.city ?? ""}</li>
                <li><strong>ZIP Code:</strong> ${args.zipCode ?? ""}</li>
                <li><strong>Preferred Date:</strong> ${args.preferredDate ?? ""}</li>
                <li><strong>Preferred Time:</strong> ${args.preferredTime ?? ""}</li>
                <li><strong>Drop-off Location:</strong> ${args.dropoffLocation ?? ""}</li>
                <li><strong>Additional Info:</strong> ${args.additionalInfo ?? ""}</li>
              </ul>
            </div>
            <p style="color: #374151;">
              A new donation request has been submitted through the ReByte website.<br>
              Please log into your Convex dashboard to view the full details and follow up with the donor.
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                This is an automated notification from ReByte.<br>
                Visit your <a href="https://dashboard.convex.dev" style="color: #059669;">Convex Dashboard</a> to manage donations.
              </p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Failed to send donation notification:", error);
        throw new Error(`Failed to send email: ${JSON.stringify(error)}`);
      }

      return data;
    } catch (error) {
      console.error("Error sending donation notification:", error);
      throw error;
    }
  },
});

export const sendContactNotification = action({
  args: {
    contactId: v.id("contacts"),
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["roypark.victoria@gmail.com"],
        subject: `New Contact Message from ${args.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #059669;">New Contact Message Received!</h2>
            
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Contact Details</h3>
              <p><strong>Name:</strong> ${args.name}</p>
              <p><strong>Email:</strong> ${args.email}</p>
              <p><strong>Contact ID:</strong> ${args.contactId}</p>
            </div>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; color: #374151;">${args.message}</p>
            </div>
            
            <p style="color: #374151;">
              A new contact message has been submitted through the ReByte website. 
              Please respond to the sender at their email address: <a href="mailto:${args.email}" style="color: #059669;">${args.email}</a>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                This is an automated notification from ReByte. 
                <br>Visit your <a href="https://dashboard.convex.dev" style="color: #059669;">Convex Dashboard</a> to manage contacts.
              </p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Failed to send contact notification:", error);
        throw new Error(`Failed to send email: ${JSON.stringify(error)}`);
      }

      console.log("Contact notification sent successfully:", data);
      return data;
    } catch (error) {
      console.error("Error sending contact notification:", error);
      throw error;
    }
  },
});

export const sendRequestNotification = action({
  args: {
    requestId: v.id("requests"),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    deviceType: v.string(),
    deviceCondition: v.string(),
    quantity: v.number(),
    requestType: v.union(v.literal("dropoff"), v.literal("pickup")),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    zipCode: v.optional(v.string()),
    preferredDate: v.optional(v.string()),
    preferredTime: v.optional(v.string()),
    dropoffLocation: v.optional(v.string()),
    additionalInfo: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["roypark.victoria@gmail.com"],
        subject: `New Device Request from ${args.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #059669;">New Device Request Received!</h2>
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #065f46; margin-top: 0;">Request Details</h3>
              <ul style="padding-left: 1em;">
                <li><strong>Request ID:</strong> ${args.requestId}</li>
                <li><strong>Name:</strong> ${args.name}</li>
                <li><strong>Email:</strong> ${args.email}</li>
                <li><strong>Phone:</strong> ${args.phone}</li>
                <li><strong>Device Type:</strong> ${args.deviceType}</li>
                <li><strong>Device Condition:</strong> ${args.deviceCondition ?? ""}</li>
                <li><strong>Quantity:</strong> ${args.quantity}</li>
                <li><strong>Type:</strong> ${args.requestType === "dropoff" ? "Drop Off (We Deliver)" : "Pick Up (They Come)"}</li>
                <li><strong>Address:</strong> ${args.address ?? ""}</li>
                <li><strong>City:</strong> ${args.city ?? ""}</li>
                <li><strong>ZIP Code:</strong> ${args.zipCode ?? ""}</li>
                <li><strong>Preferred Date:</strong> ${args.preferredDate ?? ""}</li>
                <li><strong>Preferred Time:</strong> ${args.preferredTime ?? ""}</li>
                <li><strong>Pick Up Location:</strong> ${args.dropoffLocation ?? ""}</li>
                <li><strong>Additional Info:</strong> ${args.additionalInfo ?? ""}</li>
              </ul>
            </div>
            <p style="color: #374151;">
              A new device request has been submitted through the ReByte website.<br>
              Please log into your Convex dashboard to view the full details and follow up with the requester.
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                This is an automated notification from ReByte.<br>
                Visit your <a href="https://dashboard.convex.dev" style="color: #059669;">Convex Dashboard</a> to manage requests.
              </p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Failed to send request notification:", error);
        throw new Error(`Failed to send email: ${JSON.stringify(error)}`);
      }
      return data;
    } catch (error) {
      console.error("Error sending request notification:", error);
      throw error;
    }
  },
});
