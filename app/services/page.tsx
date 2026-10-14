import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white px-15">
      {/* Hero Section */}

      {/* Main Content Section */}
      <section className="pt-20 py-22 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 items-center text-[#14212DB2] px-6 py-16">
            <span className="w-10 h-1 bg-[#EC550E] mb-4"></span>
            <h1 className="text-md font-semibold mb-4">OUR SERVICES</h1>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-5xl md:text-6xl text-black font-bold mb-6">
                DIGITAL WORK DESIGNED TO MOVE YOUR BUSINESS{" "}
                <span className="text-[#FF6B35]">FORWARD.</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-gray-600 text-lg max-w-3xl">
                From strategy and visibility to audience connection and
                measurable results, our services are designed to support the
                different stages of digital growth.
              </p>
              <hr className="my-6 text-gray-600" />
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <span className="text-4xl font-bold text-[#037BD1]">10</span>
                  <span className="text-xl font-semibold text-gray-400 ml-2">
                    SERVICES
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-4xl font-bold text-[#037BD1]">3</span>
                  <span className="text-xl font-semibold text-gray-400 ml-2">
                    GROWTH STAGES
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Image
              src="/assets/services-hero.jpg"
              alt="Team collaboration"
              width={1200}
              height={600}
              className="rounded-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* From Getting Seen to Getting Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#FF6B35] text-sm font-semibold mb-4 uppercase tracking-wider">
            HOW WE HELP
          </div>
          <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">
            FROM GETTING SEEN TO
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
            GETTING <span className="text-[#0066CC]">RESULTS.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Whether you need more visibility, stronger connections, or proven
            systems that convert - we&apos;ve got the tools, the talent, and the
            track record to help you grow.
          </p>
        </div>
      </section>

      {/* Three Stages Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
            THE GROWTH SYSTEM
          </div>
          <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">
            THREE STAGES. ONE
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
            CONNECTED GROWTH SYSTEM.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="text-[#14212D33] text-3xl  font-bold mb-4">
                01
              </div>
              <h3 className="text-2xl text-black font-bold mb-4">
                GROW VISIBILITY
              </h3>
              <p className="text-gray-600">
                Build the strategic foundation and visibility needed to reach
                the right audience and create demand.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="text-[#14212D33] text-3xl  font-bold mb-4">
                02
              </div>
              <h3 className="text-2xl text-black font-bold mb-4">
                BUILD CONNECTION
              </h3>
              <p className="text-gray-600">
                Turn attention into an active presence meaningful conversations
                and stronger relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="text-[#14212D33] text-3xl  font-bold mb-4">
                03
              </div>
              <h3 className="text-2xl text-black font-bold mb-4">
                DRIVE RESULTS
              </h3>
              <p className="text-gray-600">
                Measure what matters and use performance data to make better
                business decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Be Seen Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
            01 / GROW VISIBILITY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            BE SEEN BY THE
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-16">
            PEOPLE WHO MATTER.
          </h2>

          <div className="space-y-6">
            <div className="flex justify-between bg-white p-8 rounded-2xl">
              <div className="flex gap-8">
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">01</div>
                <h3 className="text-2xl text-uppercase font-bold mb-3">
                  Digital Strategy
                </h3>
              </div>
              <p className="text-gray-600">
                Clear digital direction built around your business goals.
              </p>
            </div>

            <div className="flex justify-between bg-white p-8 rounded-2xl">
              <div className="flex gap-8">
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">02</div>
                <h3 className="text-2xl text-uppercase font-bold mb-3">
                  Paid Ads & Performance Marketing
                </h3>
              </div>
              <p className="text-gray-600">
                Targeted campaigns that reach the right audience.
              </p>
            </div>

            <div className="flex justify-between bg-white p-8 rounded-2xl">
              <div className="flex gap-8">
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">03</div>
                <h3 className="text-2xl text-uppercase font-bold mb-3">
                  SEO & Search
                </h3>
              </div>
              <p className="text-gray-600">
                Improve visibility where customers are searching.
              </p>
            </div>

            <div className="flex justify-between bg-white p-8 rounded-2xl">
              <div className="flex gap-8">
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">04</div>
                <h3 className="text-2xl text-uppercase font-bold mb-3">
                  Digital Campaigns
                </h3>
              </div>
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
          <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
            02 / BUILD CONNECTION
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            TURN ATTENTION
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-16">
            INTO CONNECTION.
          </h2>

          <div className="space-y-6">
            <div className="flex justify-between bg-white p-8 rounded-2xl">
              {" "}
              <div className="flex gap-8">
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">01</div>
                <h3 className="text-2xl text-uppercase font-bold mb-3">
                  Social Media
                </h3>
              </div>
              <p className="text-gray-600">
                Build an active presence and meaningful connections.
              </p>
            </div>

            <div className="flex justify-between bg-white p-8 rounded-2xl">
              <div className="flex gap-8">
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">02</div>
                <h3 className="text-2xl text-uppercase font-bold mb-3">
                  Content Marketing
                </h3>
              </div>
              <p className="text-gray-600">
                Content that keeps your brand relevant and engaging.
              </p>
            </div>

            <div className="flex justify-between bg-white p-8 rounded-2xl">
              <div className="flex gap-8">
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">03</div>
                <h3 className="text-2xl  font-bold mb-3">Personal Branding</h3>
              </div>
              <p className="text-gray-600">
                Leverage digital influence to reach the right audiences.
              </p>
            </div>

            <div className="flex justify-between bg-white p-8 rounded-2xl">
              <div className="flex gap-8">
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">04</div>
                <h3 className="text-2xl text-uppercase font-bold mb-3">
                  Influencer Marketing
                </h3>
              </div>
              <p className="text-gray-600">
                Connecting brands with creators who can reach the right
                audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turn Digital Activity Section */}
      <section className="py-20 rounded-xl px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#FF6B35] text-sm font-semibold mb-4 uppercase tracking-wider">
            03 / DRIVE RESULTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            TURN DIGITAL ACTIVITY INTO <br />
            <span className="text-[#FF6B35]">BUSINESS RESULTS.</span>
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-3xl">
            Measure what matters, strengthen customer relationships and use
            performance data to make better decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-white text-3xl font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3">EMAIL MARKETING </h3>
              <p className="text-gray-400">
                Turning direct communication into stronger customer
                relationships.
              </p>
            </div>

            <div>
              <div className="text-white text-3xl font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3">ANALYTICS & INSIGHTS</h3>
              <p className="text-gray-400">
                Using data to understand performance and improve decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Think Deeply Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                THINK DEEPLY.
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-6">
                MAKE BOLDLY.
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 divide-y mb-4">
                GROW INTENTIONALLY.
              </h2>
              <div className="divide-y divide-gray-200 space-y-6">
                <div className="flex justify-between pb-2">
                  <p className="text-md text-black">OUR MISSION</p>
                  <p className="w-[60%] text-lg text-black font-semibold">
                    “To help businesses use digital marketing to become more
                    visible, more connected and more effective.”
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-md text-black">OUR VISION</p>
                  <p className="w-[60%] text-lg text-black font-semibold">
                    “To build a digital marketing agency that helps African
                    businesses connect, grow and thrive in an increasingly
                    digital world.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
