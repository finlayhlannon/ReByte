type Page = "home" | "donate" | "request" | "about" | "contact";

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bridging the
              <span className="text-emerald-600"> Digital Divide</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We collect donated computers and laptops, refurbish them with care, and redistribute them to people who need technology the most.
            </p>
            <button
              onClick={() => onNavigate("donate")}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Donate a Device
            </button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact So Far
            </h2>
            <p className="text-lg text-gray-600">
              Every device donated makes a real difference in someone's life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-emerald-50 rounded-xl">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">$19,000+</h3>
              <p className="text-gray-700 font-medium">Worth of Computer Gear Donated</p>
            </div>
            
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">70+</h3>
              <p className="text-gray-700 font-medium">People Helped</p>
            </div>
            
            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">100%</h3>
              <p className="text-gray-700 font-medium">Devices Successfully Refurbished</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Our simple three-step process ensures your donation makes maximum impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600">
                Drop off your old computers and laptops at our location or schedule a pickup. We accept devices in any condition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Refurbish</h3>
              <p className="text-gray-600">
                We make sure each device is cleaned, repaired, and has a fresh software installed to ensure optimal performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Redistribute</h3>
              <p className="text-gray-600">
                We connect refurbished devices with organizations in need of technology access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Your unused device could be someone's gateway to education, employment, or staying connected with loved ones.
          </p>
          <button
            onClick={() => onNavigate("donate")}
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Donation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/logo.png" 
                  alt="ReByte Logo" 
                  className="w-8 h-8 mr-3 object-contain"
                />
                <span className="text-xl font-bold">ReByte</span>
              </div>
              <p className="text-gray-400">
                Bridging the digital divide one device at a time.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => onNavigate("home")} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                <button onClick={() => onNavigate("donate")} className="block text-gray-400 hover:text-white transition-colors">Donate</button>
                <button onClick={() => onNavigate("request")} className="block text-gray-400 hover:text-white transition-colors">Request</button>
                <button onClick={() => onNavigate("about")} className="block text-gray-400 hover:text-white transition-colors">About</button>
                <button onClick={() => onNavigate("contact")} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="mailto:rebytevictoria@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <p>Email</p>
                </a>
                {/*
                <a href="tel:2508833201" className="text-gray-400 hover:text-white transition-colors">
                  <p>Phone</p>
                </a>
                */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <p></p>
                </a>
              </div>
            </div>
            
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ReByte. All rights reserved. Making technology accessible for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
