import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

type DonationType = "pickup" | "dropoff";

export function DonationPage() {
  const [donationType, setDonationType] = useState<DonationType>("pickup");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitDonation = useMutation(api.donations.submitDonation);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    deviceCondition: "",
    quantity: 1,
    address: "",
    city: "",
    zipCode: "",
    preferredDate: "",
    preferredTime: "",
    dropoffLocation: "",
    additionalInfo: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitDonation({
        type: donationType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        deviceType: formData.deviceType,
        deviceCondition: formData.deviceCondition,
        quantity: formData.quantity,
        ...(donationType === "pickup" && {
          address: formData.address,
          city: formData.city,
          zipCode: formData.zipCode,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
        }),
        ...(donationType === "dropoff" && {
          dropoffLocation: formData.dropoffLocation,
        }),
        additionalInfo: formData.additionalInfo,
      });

      toast.success("Donation request submitted successfully! We'll contact you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        deviceType: "",
        deviceCondition: "",
        quantity: 1,
        address: "",
        city: "",
        zipCode: "",
        preferredDate: "",
        preferredTime: "",
        dropoffLocation: "",
        additionalInfo: "",
      });
    } catch (error) {
      toast.error("Failed to submit donation request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Donate Your Device
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose how you'd like to donate your computer or laptop. We make it easy with both pickup and drop-off options.
          </p>
        </div>

        {/* Donation Type Toggle */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setDonationType("pickup")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  donationType === "pickup"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                Schedule Pickup
              </button>
              <button
                onClick={() => setDonationType("dropoff")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  donationType === "dropoff"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                Drop Off
              </button>
            </div>
          </div>

          <div className="text-center">
            {donationType === "pickup" ? (
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Free Pickup Service</h3>
                <p className="text-emerald-700">
                  We'll come to your location to collect your devices at no cost to you.
                </p>
              </div>
            ) : (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Drop-Off Locations</h3>
                <p className="text-blue-700">
                  Bring your devices to one of our convenient drop-off locations.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Device Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Device Type *
                  </label>
                  <select
                    required
                    value={formData.deviceType}
                    onChange={(e) => updateFormData("deviceType", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select device type</option>
                    <option value="laptop">Laptop</option>
                    <option value="desktop">Desktop Computer</option>
                    <option value="tablet">Tablet</option>
                    <option value="monitor">Monitor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition *
                  </label>
                  <select
                    required
                    value={formData.deviceCondition}
                    onChange={(e) => updateFormData("deviceCondition", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select condition</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor/Not Working</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={(e) => updateFormData("quantity", parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Pickup/Dropoff Specific Fields */}
            {donationType === "pickup" ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pickup Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => updateFormData("city", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={(e) => updateFormData("zipCode", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter ZIP code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => updateFormData("preferredDate", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => updateFormData("preferredTime", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Drop-off Location</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location *
                  </label>
                  <select
                    required
                    value={formData.dropoffLocation}
                    onChange={(e) => updateFormData("dropoffLocation", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select drop-off location</option>
                    <option value="main-office">Main Office - 123 Tech Street</option>
                    <option value="community-center">Community Center - 456 Helper Ave</option>
                    <option value="library">Public Library - 789 Knowledge Blvd</option>
                  </select>
                </div>
              </div>
            )}

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Any additional details about your devices or special instructions..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? "Submitting..." : "Submit Donation Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
