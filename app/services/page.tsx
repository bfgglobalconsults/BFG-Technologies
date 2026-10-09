import Image from "next/image";
import Header from "../components/Header";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                DIGITAL WORK DESIGNED TO MOVE YOUR BUSINESS{" "}
                <span className="text-[#FF6B35]">FORWARD.</span>
              </h1>
              <p className="text-gray-600 text-lg">
                We don&apos;t do fluff. Every campaign, every strategy, every piece of
                content is built to drive measurable results for your business.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder-team-work.jpg"
                  alt="Team working"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Getting Seen to Getting Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FROM GETTING SEEN TO
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            GETTING <span className="text-[#0066CC]">RESULTS.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Our services cover the full funnel - from awareness to conversion.
            Whether you need visibility, engagement, or revenue growth, we&apos;ve got
            you covered.
          </p>
        </div>
      </section>

      {/* Three Stages Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            THREE STAGES. ONE
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            INTEGRATED <span className="text-[#0066CC]">GROWTH SYSTEM.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 border border-gray-200 rounded-2xl">
              <div className="text-4xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">VISIBILITY</h3>
              <p className="text-gray-600 mb-6">
                Get discovered by the right audience
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• SEO & Search Marketing</li>
                <li>• Paid Advertising</li>
                <li>• Digital Campaigns</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-2xl">
              <div className="text-4xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">CONNECTION</h3>
              <p className="text-gray-600 mb-6">
                Build trust and engage your audience
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Social Media Marketing</li>
                <li>• Content & Creative</li>
                <li>• Influencer Marketing</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-2xl">
              <div className="text-4xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">CONVERSION</h3>
              <p className="text-gray-600 mb-6">
                Turn interest into revenue
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Email Marketing</li>
                <li>• Marketing Automation</li>
                <li>• Conversion Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Be Seen By Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            BE SEEN BY THE
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            PEOPLE WHO <span className="text-[#0066CC]">MATTER.</span>
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">Digital Strategy</h3>
                <span className="text-4xl">⊙</span>
              </div>
              <p className="text-gray-600 mb-4">
                A clear digital roadmap that aligns with your business goals and
                sets the foundation for growth.
              </p>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                Learn More <span>→</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">SEO & Search Marketing</h3>
                <span className="text-4xl">🔍</span>
              </div>
              <p className="text-gray-600 mb-4">
                Rank higher on search engines and get found by people actively
                looking for what you offer.
              </p>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                Learn More <span>→</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">
                  Paid Ads & Performance Marketing
                </h3>
                <span className="text-4xl">📢</span>
              </div>
              <p className="text-gray-600 mb-4">
                Targeted advertising campaigns that reach the right audience and deliver measurable ROI.
              </p>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                Learn More <span>→</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">Digital Campaigns</h3>
                <span className="text-4xl">📊</span>
              </div>
              <p className="text-gray-600 mb-4">
                Creative, data-driven campaigns designed to generate buzz,
                attention, and action.
              </p>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                Learn More <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
