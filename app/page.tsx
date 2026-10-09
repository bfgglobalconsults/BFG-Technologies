import Image from "next/image";

export default function Home() {
  return (
    <div className="px-15 bg-white">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Trusted by Founders */}
            <div className="flex items-center justify-center gap-2 my-6">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-[#FF6B35]"></div>
                <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-[#FF6B35]"></div>
                <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-[#FF6B35]"></div>
              </div>
              <span className="text-gray-600 text-sm ml-2">
                Trusted by founders.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              <span className="flex items-center justify-center gap-3">
                <span className="">Digital</span>
                <span className="inline-block w-16 h-16 md:w-28 md:h-20 rounded-full overflow-hidden border-4 border-[#FF6B35]">
                  <Image
                    src="/assets/digital-image.jpg"
                    alt="digital"
                    width={224}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="text-[#FF6B35]">Marketing</span>
              </span>
              <span className="flex items-center justify-center gap-3">
                <span>Agency For</span>
                <span className="inline-block w-16 h-16 md:w-28 md:h-20 rounded-full overflow-hidden border-4 border-gray-300">
                  <Image
                    src="/assets/agency-image.jpg"
                    alt="agency"
                    width={224}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </span>
              </span>
              <span className="flex items-center justify-center gap-3">
                <span className="">African Businesses</span>
                <span className="inline-block w-16 h-16 md:w-28 md:h-20 rounded-full overflow-hidden border-4 border-[#0066CC]">
                  <Image
                    src="/assets/business-image.jpg"
                    alt=""
                    width={224}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              We partner with startups, SMEs, and established businesses to
              increase visibility, generate qualified leads, and drive
              sustainable growth across Africa and beyond.
            </p>

            {/* CTA Button */}
            <button className="bg-white border-2 border-[#FF6B35] text-[#FF6B35] px-8 py-3 rounded-lg hover:bg-[#FF6B35] hover:text-white transition-colors font-semibold inline-flex items-center gap-2">
              Explore Our Growth Services
              <span>↗</span>
            </button>
          </div>
        </section>

        {/* Everything You Need */}
        <section className="py-20 px-6 bg-white">
          <div className="text-[#FF6B35] text-sm font-semibold mb-4 uppercase tracking-wider">
            01/ SERVICES
          </div>
          <div className="flex gap-30 justify-between">
            <div>
              <h2 className="text-5xl md:text-6xl text-black font-bold">
                Everything you need
              </h2>
              <h2 className="text-5xl md:text-6xl text-[#FF6B35] font-bold mb-16">
                to grow.
              </h2>
            </div>
            <div>
              <p className="text-[#14212DB2] text-md">
                Full-funnel digital marketing -- from first impression to loyal
                customer. Pick a lane, or let us build the whole roadmap.
              </p>
            </div>
          </div>
        </section>

        {/* Grow Visibility Section */}
        <section className="py-20 px-6 bg-[#F4F6F8] shadow-lg rounded-3xl mx-6 my-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35]">
                ⊙
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">
              Grow Visibility
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl">
              Get seen by the right people, everywhere it matters.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl text-black font-bold mb-3">
                  Digital Strategy
                </h3>
                <p className="text-gray-600 mb-6">
                  Building a clear digital direction around your business goals.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M11 7H13V17H11V7ZM15 11H17V17H15V11ZM7 13H9V17H7V13ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl text-black font-bold mb-3">Paid Ads</h3>
                <p className="text-gray-600 mb-6">
                  Reaching the right audience through targeted advertising
                  campaigns.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              <div className="bg-white shadow-lg p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl text-black font-bold mb-3">
                  SEO Search
                </h3>
                <p className="text-gray-600 mb-6">
                  Improving your visibility where customers are searching.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              <div className="bg-white shadow-lg p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl text-black font-bold mb-3">
                  Digital Campaigns
                </h3>
                <p className="text-gray-600 mb-6">
                  Creating focused campaigns designed to generate attention and
                  action.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Build Connection Section */}
        <section className="py-20 px-6 bg-[#0066CC] text-white rounded-3xl mx-6 my-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ⊙
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Build Connection
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl">
              Turn attention into lasting, loyal relationships.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white text-gray-900 p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Social Media</h3>
                <p className="text-gray-600 mb-6">
                  Building an active presence and meaningful audience
                  connections.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              <div className="bg-white text-gray-900 p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path>
                  </svg>{" "}
                </div>
                <h3 className="text-2xl font-bold mb-3">Content Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Creating useful content that keeps your brand relevant and
                  engaging.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              <div className="bg-white text-gray-900 p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Personal Branding</h3>
                <p className="text-gray-600 mb-6">
                  Helping individuals build a clear and recognizable digital
                  presence.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              <div className="bg-white text-gray-900 p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Influencer Marketing
                </h3>
                <p className="text-gray-600 mb-6">
                  Connecting brands with creators who can reach the right
                  audiences.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Drive Results Section */}
        <section className="py-20 px-6 bg-[#F4F6F8] shadow-lg rounded-3xl mx-6 my-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35]">
                ⊙
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">
              Drive Results
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl">
              Convert interest into revenue - predictably and at scale.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M2 5.5V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5ZM0 10H5V12H0V10ZM0 15H8V17H0V15Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl text-black font-bold mb-3">
                  Email Marketing
                </h3>
                <p className="text-gray-600 mb-6">
                  Turning direct communication into stronger customer
                  relationships.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl text-black font-bold mb-3">
                  Analytics & Insights
                </h3>
                <p className="text-gray-600 mb-6">
                  Using data to understand performance and improve decisions.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              <div className="bg-white shadow-lg p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.018 5 13.9852 5.21731 14.8579 5.60806L13.2954 7.16944C12.8822 7.05892 12.448 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3807 7.55964 14.6307 8.46447 15.5355L7.05025 16.9497L6.89445 16.7889C5.71957 15.5368 5 13.8525 5 12C5 8.13401 8.13401 5 12 5ZM18.3924 9.14312C18.7829 10.0155 19 10.9824 19 12C19 13.933 18.2165 15.683 16.9497 16.9497L15.5355 15.5355C16.4404 14.6307 17 13.3807 17 12C17 11.552 16.9411 11.1178 16.8306 10.7046L18.3924 9.14312ZM16.2426 6.34315L17.6569 7.75736L13.9325 11.483C13.9765 11.6479 14 11.8212 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.1788 10 12.3521 10.0235 12.517 10.0675L16.2426 6.34315Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl text-black font-bold mb-3">
                  Conversion Optimisation
                </h3>
                <p className="text-gray-600 mb-6">
                  Turn more of your traffic into qualified, paying customers..
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              <div className="bg-white shadow-lg p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(3,123,209,1)"
                  >
                    <path d="M8.86874 14.1392C8.6556 14.4912 8.55014 14.7778 8.72043 15.2253C9.1905 16.4613 8.52737 17.664 7.28097 17.9905C6.10556 18.2985 4.96035 17.526 4.72713 16.2676C4.52048 15.1537 5.38488 14.0617 6.61294 13.8877C6.67963 13.8781 6.74717 13.874 6.83351 13.8688C6.88044 13.866 6.93293 13.8628 6.99384 13.8582L8.86194 10.7257C7.687 9.55742 6.98767 8.19164 7.14246 6.49936C7.25188 5.30308 7.72226 4.26933 8.58208 3.42201C10.2288 1.79945 12.7411 1.53667 14.68 2.78212C16.5423 3.97841 17.3951 6.30867 16.6681 8.30311L14.9611 7.84C15.1895 6.73115 15.0206 5.73536 14.2727 4.88234C13.7786 4.31914 13.1446 4.02394 12.4236 3.91516C10.9783 3.69681 9.55922 4.6254 9.13816 6.04399C8.66019 7.65406 9.38355 8.96924 11.3603 9.96029C10.5311 11.3541 9.70859 12.7518 8.86874 14.1392ZM13.7838 8.27337C14.3816 9.32798 14.9886 10.3986 15.5902 11.4593C18.631 10.5186 20.9237 12.2018 21.7462 14.004C22.7396 16.1809 22.0605 18.7593 20.1094 20.1023C18.1067 21.481 15.5741 21.2454 13.7997 19.4744L15.1919 18.3094C16.9444 19.4445 18.4772 19.3911 19.6151 18.047C20.5855 16.9003 20.5644 15.1906 19.5659 14.068C18.4136 12.7726 16.8701 12.7331 15.0044 13.9767C14.2305 12.6037 13.443 11.2413 12.6936 9.85845C12.4409 9.39233 12.1618 9.12196 11.5923 9.0233C10.6411 8.85839 10.027 8.04157 9.99016 7.12642C9.95395 6.22138 10.4871 5.4033 11.3205 5.08455C12.146 4.7688 13.1148 5.02367 13.6701 5.72554C14.1239 6.29901 14.2681 6.94443 14.0293 7.65167C13.9843 7.7852 13.9304 7.91584 13.8713 8.05885C13.8431 8.12694 13.8138 8.19801 13.7838 8.27337ZM11.552 16.895H15.2126C15.2636 16.963 15.3113 17.0303 15.3579 17.0959C15.4551 17.233 15.5474 17.3632 15.6551 17.4788C16.4304 18.3077 17.7395 18.3489 18.5682 17.5795C19.4271 16.7821 19.466 15.4426 18.6544 14.6101C17.8602 13.7955 16.5029 13.7177 15.7655 14.5802C15.3176 15.1044 14.8586 15.166 14.2641 15.1567C12.7414 15.1332 11.2177 15.149 9.69524 15.149C9.79406 17.2909 8.98436 18.6255 7.37841 18.9424C5.80582 19.2528 4.3575 18.4504 3.84759 16.9864C3.26842 15.3229 3.98467 13.9925 6.05421 12.9366C5.89847 12.3725 5.74115 11.8016 5.58541 11.236C3.32977 11.7276 1.63749 13.916 1.8122 16.378C1.96652 18.5514 3.71968 20.4815 5.86369 20.8273C7.02819 21.0153 8.12233 20.82 9.13741 20.2442C10.4433 19.5032 11.2011 18.3381 11.552 16.895Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl text-black font-bold mb-3">
                  Marketing Automation
                </h3>
                <p className="text-gray-600 mb-6">
                  Systems and journeys that nurture leads while you sleep.
                </p>
                <a
                  href="#"
                  className="text-[#FF6B35] font-semibold inline-flex items-center gap-1"
                >
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 px-6 bg-white text-[#14212DB2]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Images */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden border-4 border-[#0066CC] mb-6">
                  <Image
                    src="/assets/team-outdoor.jpg"
                    alt="Team collaboration"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-3xl overflow-hidden border-4 border-[#0066CC]">
                  <Image
                    src="/assets/team-office.jpg"
                    alt="Team outdoor"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
                  02/ WHO WE ARE
                </div>

                <h2 className="text-5xl text-black md:text-6xl font-bold mb-8">
                  <span>Built for Africa. Designed for </span>
                  <span className="text-[#0066CC]">growth.</span>
                </h2>

                <p className="text-[#14212DB2] text-lg mb-8 leading-relaxed">
                  BFG Technologies is a digital marketing agency from Dar es
                  Salaam, helping businesses build growth systems that bring in
                  consistent leads, loyal customers, and long-term results that
                  actually matter - and create measurable growth.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#0066CC]">⊙</span>
                    </div>
                    <p className="text-[#14212DB2]">
                      We work with businesses of all sizes across Africa
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#0066CC]">⊙</span>
                    </div>
                    <p className="text-[#14212DB2]">
                      Strategy built around what actually works in your market
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0066CC]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#0066CC]">⊙</span>
                    </div>
                    <p className="text-[#14212DB2]">
                      Real growth without the noise or the nonsense
                    </p>
                  </div>
                </div>

                <button className="bg-transparent border-2 border-[#FF6B35] text-black hover:text-white px-8 py-3 rounded-lg hover:bg-[#FF6B35] transition-colors font-semibold">
                  Meet BFG Technologies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-6 bg-[#0066CC] rounded-xl text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-white/80 text-sm font-semibold mb-6 uppercase tracking-wider">
              03/ IMPACT
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-16 max-w-3xl">
              Numbers that speak for themselves.
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-gray-900 p-8 rounded-2xl">
                <div className="text-4xl mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="64"
                    height="64"
                    fill="currentColor"
                  >
                    <path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"></path>
                  </svg>
                </div>
                <div className="text-5xl font-bold mb-2">05+</div>
                <div className="text-gray-600">Years Active</div>
              </div>

              <div className="bg-white text-gray-900 p-8 rounded-2xl">
                <div className="text-4xl mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="64"
                    height="64"
                    fill="currentColor"
                  >
                    <path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"></path>
                  </svg>
                </div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-gray-600">Campaigns Run</div>
              </div>

              <div className="bg-white text-gray-900 p-8 rounded-2xl">
                <div className="text-4xl mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="64"
                    height="64"
                    fill="currentColor"
                  >
                    <path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"></path>
                  </svg>
                </div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-gray-600">Clients Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="py-20 px-6 bg-white text-[#14212DB2]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="text-[#FF6B35] text-sm font-semibold mb-6 uppercase tracking-wider">
                04/ SELECTED WORK
              </div>
              <div className="flex gap-30 justify-between">
                <div>
                  <h2 className="text-5xl md:text-6xl text-black font-bold">
                    Client Stories that{" "}
                    <span className=" text-[#FF6B35]">Deliver</span>
                  </h2>
                </div>
                <div>
                  <p className="text-gray-400 text-lg max-w-2xl">
                    Real campaigns, real results. A snapshot of the brands
                    we&apos;ve helped grow across the continent and beyond.
                  </p>

                  <button className="bg-transparent border-2 border-[#FF6B35] text-black hover:text-white px-6 py-2 rounded-lg hover:bg-[#FF6B35] transition-colors font-semibold whitespace-nowrap my-4">
                    View Full Portfolio
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Case Study Card 1 */}
              <div className="bg-[#EAE8E8] rounded-2xl overflow-hidden group hover:bg-gray-300 transition-colors">
                <div className="aspect-[4/3] bg-gray-700 overflow-hidden">
                  <Image
                    src="/placeholder-case1.jpg"
                    alt="Business professionals handshake"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">CLIENT NAME</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    FINTECH / DIGITAL CAMPAIGN
                  </p>
                  <div className="border-t border-gray-700 pt-4 mb-4">
                    <p className="text-gray-500 text-sm mb-2">PROJECT</p>
                    <h4 className="font-bold text-lg mb-3">
                      Brand & Digital Growth Cards
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">OUTCOME</p>
                    <p className="text-black mb-4">
                      Increased digital engagement and improved brand
                      visibility.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-[#FF6B35] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    VIEW CASE STUDY <span>→</span>
                  </a>
                </div>
              </div>

              {/* Case Study Card 2 */}
              <div className="bg-[#EAE8E8] rounded-2xl overflow-hidden group hover:bg-gray-300 transition-colors">
                <div className="aspect-[4/3] bg-gray-700 overflow-hidden">
                  <Image
                    src="/placeholder-case2.jpg"
                    alt="Business meeting"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">CLIENT NAME</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    FINTECH / DIGITAL CAMPAIGN
                  </p>
                  <div className="border-t border-gray-700 pt-4 mb-4">
                    <p className="text-gray-500 text-sm mb-2">PROJECT</p>
                    <h4 className="font-bold text-lg mb-3">
                      Brand & Digital Growth Cards
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">OUTCOME</p>
                    <p className="text-black mb-4">
                      Increased digital engagement and improved brand
                      visibility.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-[#FF6B35] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    VIEW CASE STUDY <span>→</span>
                  </a>
                </div>
              </div>

              {/* Case Study Card 3 */}
              <div className="bg-[#EAE8E8] rounded-2xl overflow-hidden group hover:bg-gray-300 transition-colors">
                <div className="aspect-[4/3] bg-gray-700 overflow-hidden">
                  <Image
                    src="/placeholder-case3.jpg"
                    alt="Office meeting"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">CLIENT NAME</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    FINTECH / DIGITAL CAMPAIGN
                  </p>
                  <div className="border-t border-gray-700 pt-4 mb-4">
                    <p className="text-gray-500 text-sm mb-2">PROJECT</p>
                    <h4 className="font-bold text-lg mb-3">
                      Brand & Digital Growth Cards
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">OUTCOME</p>
                    <p className="text-black mb-4">
                      Increased digital engagement and improved brand
                      visibility.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-[#FF6B35] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    VIEW CASE STUDY <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Case Study Card 4 */}
              <div className="bg-[#EAE8E8] rounded-2xl overflow-hidden group hover:bg-gray-300 transition-colors">
                <div className="aspect-[4/3] bg-gray-700 overflow-hidden">
                  <Image
                    src="/placeholder-case4.jpg"
                    alt="Business owner"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">CLIENT NAME</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    FINTECH / DIGITAL CAMPAIGN
                  </p>
                  <div className="border-t border-gray-700 pt-4 mb-4">
                    <p className="text-gray-500 text-sm mb-2">PROJECT</p>
                    <h4 className="font-bold text-lg mb-3">
                      Brand & Digital Growth Cards
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">OUTCOME</p>
                    <p className="text-black mb-4">
                      Increased digital engagement and improved brand
                      visibility.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-[#FF6B35] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    VIEW CASE STUDY <span>→</span>
                  </a>
                </div>
              </div>

              {/* Case Study Card 5 */}
              <div className="bg-[#EAE8E8] rounded-2xl overflow-hidden group hover:bg-gray-300 transition-colors">
                <div className="aspect-[4/3] bg-gray-700 overflow-hidden">
                  <Image
                    src="/placeholder-case5.jpg"
                    alt="Professional working"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">CLIENT NAME</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    FINTECH / DIGITAL CAMPAIGN
                  </p>
                  <div className="border-t border-gray-700 pt-4 mb-4">
                    <p className="text-gray-500 text-sm mb-2">PROJECT</p>
                    <h4 className="font-bold text-lg mb-3">
                      Brand & Digital Growth Cards
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">OUTCOME</p>
                    <p className="text-black mb-4">
                      Increased digital engagement and improved brand
                      visibility.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-[#FF6B35] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    VIEW CASE STUDY <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Removed old duplicate */}

        {/* Built for Growth - Removed old duplicate */}

        {/* Client Stories - Removed old duplicate */}

        {/* Case Studies Grid - Removed old duplicate */}

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-[#FF6B35] text-sm font-semibold mb-6 uppercase tracking-wider">
              05/ TEAM
            </div>
            <h2 className="text-4xl md:text-6xl text-black font-bold mb-16">
              The people <br />
              behind the growth.
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F4F6F8] p-4">
                <div className="aspect-square bg-[#F4F6F8] rounded-2xl mb-4 overflow-hidden">
                  <Image
                    src="/assets/founder1.jpg"
                    alt="Founder"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-black text-2xl mb-1">
                  John Smith
                </h3>
                <p className="text-gray-600 mb-2">CEO & Founder</p>
                <p className="inline-block text-sm text-black bg-[#037BD11A] p-2 rounded-3xl">
                  digital marketing
                </p>
              </div>
              <div className="bg-[#F4F6F8] p-4">
               <div className="aspect-square bg-[#F4F6F8] rounded-2xl mb-4 overflow-hidden">
                  <Image
                    src="/assets/founder2.jpg"
                    alt="Founder"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-black text-2xl mb-1">
                  Sam Johnson
                </h3>
                <p className="text-gray-600 mb-2">Creative Director</p>
                <p className="inline-block text-sm text-black bg-[#037BD11A] p-2 rounded-3xl">
                  Growth expert
                </p>
              </div>
              <div className="bg-[#F4F6F8] p-4">
                <div className="aspect-square bg-[#F4F6F8] rounded-2xl mb-4 overflow-hidden">
                  <Image
                    src="/assets/founder3.jpg"
                    alt="Founder"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-black text-2xl mb-1">
                  Michael Chen
                </h3>
                <p className="text-gray-600 mb-2">Tech Lead</p>
                <p className="inline-block text-black text-sm p-2 bg-[#037BD11A] rounded-3xl">
                  Growth expert
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-[#0066CC] text-white my-8 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s grow your <br />
              business together.
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Get started with a free consultation today
            </p>
            <button className="bg-[#FF6B35] text-white px-10 py-4 rounded-full hover:bg-orange-600 text-lg font-semibold">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
