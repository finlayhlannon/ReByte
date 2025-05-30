import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function AdminDashboard() {
  const donations = useQuery(api.donations.getDonations);
  const contacts = useQuery(api.contacts.getContacts);

  const recentDonations = donations?.slice(0, 5) || [];
  const recentContacts = contacts?.slice(0, 5) || [];

  const handleBackToHome = () => {
    window.history.pushState({}, "", "/");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Monitor recent form submissions</p>
          </div>
          <button
            onClick={handleBackToHome}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to Home
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Donations */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Donations</h2>
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                {donations?.length || 0} total
              </span>
            </div>
            
            <div className="space-y-4">
              {recentDonations.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No donations yet</p>
              ) : (
                recentDonations.map((donation) => (
                  <div key={donation._id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{donation.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        donation.status === 'pending' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : donation.status === 'scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {donation.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Device:</strong> {donation.deviceType} ({donation.quantity}x)
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Type:</strong> {donation.type === 'pickup' ? 'Pickup' : 'Drop-off'}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Contact:</strong> {donation.email} | {donation.phone}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(donation._creationTime).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recent Contacts */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Contact Messages</h2>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {contacts?.length || 0} total
              </span>
            </div>
            
            <div className="space-y-4">
              {recentContacts.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No messages yet</p>
              ) : (
                recentContacts.map((contact) => (
                  <div key={contact._id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contact.status === 'new' 
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {contact.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Email:</strong> {contact.email}
                    </p>
                    <p className="text-sm text-gray-700 mb-2 line-clamp-3">
                      {contact.message}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(contact._creationTime).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-emerald-600">{donations?.length || 0}</div>
            <div className="text-sm text-gray-600">Total Donations</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">{contacts?.length || 0}</div>
            <div className="text-sm text-gray-600">Total Messages</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {donations?.filter(d => d.status === 'pending').length || 0}
            </div>
            <div className="text-sm text-gray-600">Pending Donations</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-red-600">
              {contacts?.filter(c => c.status === 'new').length || 0}
            </div>
            <div className="text-sm text-gray-600">New Messages</div>
          </div>
        </div>
      </div>
    </div>
  );
}
