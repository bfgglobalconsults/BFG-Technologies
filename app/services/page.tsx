import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                DIGITAL WORK DESIGNED TO MOVE YOUR BUSINESS{" "}
                <span className="text-[#FF6B35]">FORWARD.</span>
              </h1>
            </div>
            <div>
              <Image
                src="/assets/services-hero.jpg"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* From Getting Seen to Getting Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            FROM GETTING SEEN TO
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-12">
            GETTING RESULTS.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Whether you need more visibility, stronger connections, or proven
            systems that convert - we've got the tools, the talent, and the
            track record to help you grow.
          </p>
        </div>
      </section>

      {/* Three Stages Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            THREE STAGES. ONE
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-16">
            INTEGRATED GROWTH SYSTEM.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="text-[#FF6B35] font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">GROW VISIBILITY</h3>
              <p className="text-gray-600">Get found where it matters most.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="text-[#FF6B35] font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">BUILD CONNECTION</h3>
              <p className="text-gray-600">
                Turn attention into relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="text-[#FF6B35] font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">DRIVE RESULTS</h3>
              <p className="text-gray-600">
                Convert interest into measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Be Seen Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            BE SEEN BY THE
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-16">
            PEOPLE WHO MATTER.
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Digital Strategy</h3>
              <p className="text-gray-600">
                Clear digital direction built around your business goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">
                Paid Ads & Performance Marketing
              </h3>
              <p className="text-gray-600">
                Targeted campaigns that reach the right audience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">SEO & Search</h3>
              <p className="text-gray-600">
                Improve visibility where customers are searching.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Digital Campaigns</h3>
              <p className="text-gray-600">
                Focused campaigns designed for attention and action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turn Attention Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            TURN ATTENTION INTO
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-16">
            CONNECTION.
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Social Media</h3>
              <p className="text-gray-600">
                Build an active presence and meaningful connections.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Content Marketing</h3>
              <p className="text-gray-600">
                Content that keeps your brand relevant and engaging.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">
                Personal & Influencer Marketing
              </h3>
              <p className="text-gray-600">
                Leverage digital influence to reach the right audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turn Digital Activity Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            TURN DIGITAL ACTIVITY INTO <br />
            <span className="text-[#FF6B35]">REAL BUSINESS OUTCOMES.</span>
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-3xl">
            Growth isn't just about traffic - it's about turning that traffic
            into leads, customers, and revenue. We help you build systems that
            convert consistently and scale intelligently.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-[#FF6B35] font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3">PREDICTABLE GROWTH</h3>
              <p className="text-gray-400">
                Systems and strategies that deliver consistent results.
              </p>
            </div>

            <div>
              <div className="text-[#FF6B35] font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3">MEASURABLE ROI</h3>
              <p className="text-gray-400">
                Track what matters and optimize for business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Think Deeply Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                THINK DEEPLY.
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-6">
                MAKE BOLDLY.
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                GROW INTENTIONALLY.
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our approach isn't about quick fixes or vanity metrics.
              </p>
              <p className="text-gray-600 text-lg">
                It's about building a marketing engine that works for your
                business - today and in the long term. We blend strategic
                thinking with hands-on execution to deliver growth that's both
                sustainable and scalable.
              </p>
            </div>
            <div>
              <Image
                src="/assets/services-thinking.jpg"
                alt="Strategic thinking"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#0066CC] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something that moves your business forward.
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Ready to grow? Let's talk strategy.
          </p>
          <button className="bg-[#FF6B35] text-white px-10 py-4 rounded-full hover:bg-orange-600 text-lg font-semibold">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
