import { useState } from "react";
import { useMutation, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

type RequestType = "dropoff" | "pickup"; 

export function RequestPage() {
  const [requestType, setRequestType] = useState<RequestType>("dropoff");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitRequest = useMutation(api.requests.submitRequest);
  const sendRequestNotification = useAction(api.notifications.sendRequestNotification);

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
      // Submit request and get the requestId
      const requestId = await submitRequest({
        requestType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        deviceType: formData.deviceType,
        deviceCondition: formData.deviceCondition,
        quantity: formData.quantity,
        address: requestType === "dropoff" ? formData.address : "",
        city: requestType === "dropoff" ? formData.city : "",
        zipCode: requestType === "dropoff" ? formData.zipCode : "",
        preferredDate: requestType === "dropoff" ? formData.preferredDate : "",
        preferredTime: requestType === "dropoff" ? formData.preferredTime : "",
        dropoffLocation: requestType === "pickup" ? formData.dropoffLocation : "",
        additionalInfo: formData.additionalInfo,
      });

      // Send notification email
      await sendRequestNotification({
        requestId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        deviceType: formData.deviceType,
        deviceCondition: formData.deviceCondition,
        quantity: formData.quantity,
        requestType,
        address: requestType === "dropoff" ? formData.address : "",
        city: requestType === "dropoff" ? formData.city : "",
        zipCode: requestType === "dropoff" ? formData.zipCode : "",
        preferredDate: requestType === "dropoff" ? formData.preferredDate : "",
        preferredTime: requestType === "dropoff" ? formData.preferredTime : "",
        dropoffLocation: requestType === "pickup" ? formData.dropoffLocation : "",
        additionalInfo: formData.additionalInfo,
      });

      toast.success("Device request submitted successfully! We'll contact you soon.");
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
      toast.error("Failed to submit device request. Please try again.");
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
            Request a Device
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to request a computer or laptop. We offer both drop-off and pick up options.
          </p>
        </div>

        {/* Request Type Toggle */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setRequestType("dropoff")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  requestType === "dropoff"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                Schedule Drop Off
              </button>
              <button
                onClick={() => setRequestType("pickup")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  requestType === "pickup"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                Pick Up
              </button>
            </div>
          </div>

          <div className="text-center">
            {requestType === "dropoff" ? (
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Free Drop Off Service</h3>
                <p className="text-emerald-700">
                  We'll deliver your requested device to your location at no cost to you.
                </p>
              </div>
            ) : (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Pick Up Locations</h3>
                <p className="text-blue-700">
                  Pick up your device at one of our convenient locations.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Request Form */}
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
            {requestType === "dropoff" ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Drop Off Details</h3>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pick Up Location</h3>
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
                    <option value="">Select pick up location</option>
                    <option value="hillside-mall">1644 Hillside Ave, Victoria, BC</option>
                    <option value="shelbourne-plaza">3601 Shelbourne St, Victoria, BC</option>
                    <option value="smus">3400 Richmond Rd, Victoria, BC</option>
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
                placeholder="Any additional details about your request or special instructions..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? "Submitting..." : "Submit Device Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}