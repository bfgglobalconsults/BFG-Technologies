import Image from "next/image";
import Header from "../components/Header";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                BUILT FOR <span className="text-[#0066CC]">AFRICA.</span>
                <br />
                DESIGNED FOR <span className="text-[#FF6B35]">GROWTH.</span>
              </h1>
              <p className="text-gray-600 text-lg">
                We help businesses across Africa unlock their full potential
                through strategic digital marketing that drives real, measurable
                results.
              </p>
            </div>
            <div>
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/placeholder-team-meeting.jpg"
                  alt="Team meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AFRICA DOESN&apos;T HAVE A SHORTAGE OF GREAT BUSINESSES.
                <br />
                IT HAS A{" "}
                <span className="text-[#0066CC]">VISIBILITY PROBLEM.</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Too many excellent products, services, and ideas go unnoticed
                because they don&apos;t have the right marketing systems in
                place. We exist to change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/placeholder-founders.jpg"
                  alt="Founders at work"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                WE STARTED WITH A{" "}
                <span className="text-[#0066CC]">SIMPLE BELIEF.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                That African businesses deserve marketing that works - not
                templates, not trends, but strategies built specifically for
                their markets, their customers, and their growth goals.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Since then, we&apos;ve helped startups find their first
                customers, SMEs scale past revenue plateaus, and established
                brands stay relevant in a fast-moving digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Growth starts with understanding the{" "}
            <span className="text-[#0066CC]">people</span> behind the business.
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white"></div>
            <p className="text-gray-400">- BFG Technologies Team</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            THINK DEEPLY.
            <br />
            <span className="text-[#0066CC]">MOVE INTENTIONALLY.</span>
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0066CC] flex items-center justify-center text-white flex-shrink-0 mt-1">
                ⊙
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Strategy</h3>
                <p className="text-gray-600 text-lg">
                  We don&apos;t rush. We research, analyze, and design systems
                  that are built to last.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0066CC] flex items-center justify-center text-white flex-shrink-0 mt-1">
                ⊙
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Execution</h3>
                <p className="text-gray-600 text-lg">
                  Every campaign, every touchpoint is built with care and
                  attention to detail.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0066CC] flex items-center justify-center text-white flex-shrink-0 mt-1">
                ⊙
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Measurement</h3>
                <p className="text-gray-600 text-lg">
                  Results aren&apos;t optional. We track, optimize, and improve
                  based on real data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            PEOPLE MAKE <br />
            THE <span className="text-[#0066CC]">DIFFERENCE.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Meet the team behind the strategy.
          </p>

          <div className="mb-12">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/placeholder-full-team.jpg"
                alt="Full team"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gray-200">
                <Image
                  src="/placeholder-team1.jpg"
                  alt="Team member"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">FOUNDER NAME</h3>
                <p className="text-gray-600 mb-2">Co-Founder</p>
                <p className="text-sm text-gray-500">
                  Brief bio or area of expertise
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gray-200">
                <Image
                  src="/placeholder-team2.jpg"
                  alt="Team member"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">FOUNDER NAME</h3>
                <p className="text-gray-600 mb-2">Co-Founder</p>
                <p className="text-sm text-gray-500">
                  Brief bio or area of expertise
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gray-200">
                <Image
                  src="/placeholder-team3.jpg"
                  alt="Team member"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">FOUNDER NAME</h3>
                <p className="text-gray-600 mb-2">Co-Founder</p>
                <p className="text-sm text-gray-500">
                  Brief bio or area of expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                WHAT WE FOCUS ON.
                <br />
                <span className="text-[#0066CC]">AT EVERY INTERACTION.</span>
              </h2>
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#0066CC] text-xl">✓</span>
                  <p className="text-gray-600 text-lg">
                    Understanding your business and market before building any
                    campaign
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0066CC] text-xl">✓</span>
                  <p className="text-gray-600 text-lg">
                    Creating systems that work for you, not just one-off tactics
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0066CC] text-xl">✓</span>
                  <p className="text-gray-600 text-lg">
                    Delivering results you can measure and build on
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#0066CC] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let&apos;s build something that moves your business forward.
          </h2>
          <button className="bg-[#FF6B35] text-white px-10 py-4 rounded-lg hover:bg-orange-600 text-lg font-semibold">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
