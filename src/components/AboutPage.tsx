export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About ReByte
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe technology should be accessible to everyone, regardless of economic circumstances.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                ReByte was started in 2025 with a simple yet powerful vision: to bridge the digital divide by connecting unused technology with those who need it most. We are starting as a small community initiative with goals to grow into a thriving nonprofit organization that transforms hundreds of lives through technology access.
              </p>
              
              <p>
                Our founders recognized that while many people upgrade their devices regularly, leaving perfectly functional computers and laptops unused, countless students, families, and individuals struggle without access to basic technology. This disparity became even more apparent during the pandemic, when remote learning and work became essential.
              </p>
              
              <p>
                Today, ReByte operates with a small but dedicated team of students who are passionate about technology and social impact. We partner with local community organizations and social services to identify families and individuals who would benefit most from our program.
              </p>
              
              <p>
                Every device we redistribute comes preinstalled with software to ensure recipients can make the most of their new technology. We believe that access to technology is not a luxury, but a necessity—and through every donation, we aim to create opportunities, bridge gaps, and empower communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Reused from Landing Page */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
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

      {/* Organizations Helped Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Organizations Helped
            </h2>
            <p className="text-lg text-gray-600">
              We proudly support local organizations by providing access to technology
            </p>
          </div>

          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="w-48 h-24 flex items-center justify-center">
              <a href='https://www.vircs.bc.ca'><img
                src="/vircs.png"
                alt="VIRCS Logo"
                className="max-h-full max-w-full object-contain"
              /></a>
            </div>
            {/* Add more logos here as you partner with more organizations */}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To eliminate the digital divide by collecting, refurbishing, and redistributing technology to underserved communities, ensuring everyone has access to the tools they need for education, employment, and connection.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where access to technology is not determined by economic status, where every student can complete their homework, every job seeker can apply online, and every family can stay connected with their loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We approach every interaction with empathy and understanding, recognizing the real impact technology access has on people's lives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                Every device we redistribute meets high standards of functionality and reliability, ensuring recipients receive technology they can depend on.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                By extending the life of electronic devices, we reduce e-waste and promote environmental responsibility while serving our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Whether you have a device to donate, or need technology access, we're here to help bridge the digital divide together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Donate a Device
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
