import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            WORK THAT MOVES BUSINESS{" "}
            <span className="text-[#FF6B35]">FORWARD.</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Real campaigns. Real results. A look at the brands we've helped grow
            across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Every Project Starts With A Question */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            EVERY PROJECT STARTS WITH A{" "}
            <span className="text-[#0066CC]">QUESTION.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            How do we get more visibility? How do we build trust? How do we turn
            attention into revenue? The answer is always rooted in strategy,
            built through execution, and measured by results.
          </p>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/portfolio-1.jpg"
                alt="Project showcase"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="text-[#FF6B35] font-semibold mb-4 uppercase text-sm">
                FINTECH / DIGITAL CAMPAIGN
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                WE LOVE WHAT WE DO. HERE'S WHAT WE DID.
              </h3>
              <p className="text-gray-600 mb-6">
                Helped a fintech startup increase digital engagement and improve
                brand visibility through targeted campaigns.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Digital Strategy</li>
                <li>• Social Media Marketing</li>
                <li>• Content Creation</li>
              </ul>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                VIEW CASE STUDY <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="text-[#0066CC] font-semibold mb-4 uppercase text-sm">
                E-COMMERCE / PERFORMANCE MARKETING
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                PERFORMANCE CAMPAIGNS THAT DELIVERED.
              </h3>
              <p className="text-gray-600 mb-6">
                Drove measurable ROI through strategic paid advertising and
                conversion optimization for an e-commerce brand.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Paid Ads Management</li>
                <li>• Conversion Optimization</li>
                <li>• Analytics & Reporting</li>
              </ul>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                VIEW CASE STUDY <span>→</span>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/assets/portfolio-2.jpg"
                alt="Project showcase"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3 - Multi Image Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/assets/portfolio-3a.jpg"
                  alt="Project"
                  width={300}
                  height={300}
                  className="rounded-2xl w-full h-auto object-cover"
                />
                <Image
                  src="/assets/portfolio-3b.jpg"
                  alt="Project"
                  width={300}
                  height={300}
                  className="rounded-2xl w-full h-auto object-cover"
                />
                <Image
                  src="/assets/portfolio-3c.jpg"
                  alt="Project"
                  width={300}
                  height={300}
                  className="rounded-2xl w-full h-auto object-cover"
                />
                <Image
                  src="/assets/portfolio-3d.jpg"
                  alt="Project"
                  width={300}
                  height={300}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-[#FF6B35] font-semibold mb-4 uppercase text-sm">
                HOSPITALITY / BRAND & SOCIAL
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                COMPLETE BRAND REFRESH.
              </h3>
              <p className="text-gray-600 mb-6">
                Complete brand transformation with social media strategy for a
                hospitality business.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Brand Identity</li>
                <li>• Social Media Strategy</li>
                <li>• Content Production</li>
              </ul>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                VIEW CASE STUDY <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 4 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="text-[#0066CC] font-semibold mb-4 uppercase text-sm">
                RETAIL / SEO & LOCAL
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                LOCAL SEO THAT BROUGHT FOOT TRAFFIC.
              </h3>
              <p className="text-gray-600 mb-6">
                Improved local search visibility and drove in-store visits for a
                retail chain.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Local SEO</li>
                <li>• Google Business Optimization</li>
                <li>• Digital Campaigns</li>
              </ul>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                VIEW CASE STUDY <span>→</span>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/assets/portfolio-4.jpg"
                alt="Project showcase"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 5 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/portfolio-5.jpg"
                alt="Project showcase"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="text-[#FF6B35] font-semibold mb-4 uppercase text-sm">
                TECH / CONTENT & INFLUENCE
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                INFLUENCER CAMPAIGN THAT WENT VIRAL.
              </h3>
              <p className="text-gray-600 mb-6">
                Partnered with key influencers to create authentic content that
                reached millions.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Influencer Marketing</li>
                <li>• Campaign Strategy</li>
                <li>• Content Production</li>
              </ul>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                VIEW CASE STUDY <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 6 - Billboard */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Image
              src="/assets/portfolio-billboard.jpg"
              alt="Billboard campaign"
              width={1200}
              height={600}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="max-w-2xl">
            <div className="text-[#FF6B35] font-semibold mb-4 uppercase text-sm">
              FMCG / INTEGRATED CAMPAIGN
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              FROM STREETS TO SCREENS.
            </h3>
            <p className="text-gray-600 mb-6">
              Multi-channel campaign combining outdoor advertising with digital
              amplification.
            </p>
            <a
              href="#"
              className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
            >
              VIEW CASE STUDY <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Case Study 7 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/portfolio-7.jpg"
                alt="Project showcase"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="text-[#0066CC] font-semibold mb-4 uppercase text-sm">
                REAL ESTATE / DIGITAL STRATEGY
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                SMART SYSTEMS. STEADY LEADS.
              </h3>
              <p className="text-gray-600 mb-6">
                Built a lead generation system that delivers consistent,
                qualified prospects.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Lead Generation</li>
                <li>• Marketing Automation</li>
                <li>• CRM Integration</li>
              </ul>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                VIEW CASE STUDY <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 8 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="text-[#FF6B35] font-semibold mb-4 uppercase text-sm">
                NONPROFIT / SOCIAL IMPACT
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                AMPLIFYING A IMPACT THROUGH DIGITAL.
              </h3>
              <p className="text-gray-600 mb-6">
                Helped a nonprofit reach wider audiences and drive meaningful
                engagement.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Digital Campaigns</li>
                <li>• Community Building</li>
                <li>• Content Marketing</li>
              </ul>
              <a
                href="#"
                className="text-[#FF6B35] font-semibold inline-flex items-center gap-2"
              >
                VIEW CASE STUDY <span>→</span>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/assets/portfolio-8.jpg"
                alt="Project showcase"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            LET'S TALK ABOUT <span className="text-[#FF6B35]">RESULTS.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-gray-400">Campaigns Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-400">Brands Supported</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-gray-400">Years of Impact</div>
            </div>
          </div>

          <p className="text-gray-400 text-lg max-w-3xl">
            Every project is built on strategy, delivered with excellence, and
            measured by what matters most to your business.
          </p>
        </div>
      </section>

      {/* The Work Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            THE WORK IS ONLY HALF THE{" "}
            <span className="text-[#0066CC]">STORY.</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            Behind every campaign is a deep understanding of your audience, your
            market, and your goals. That's where real growth starts.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Strategy First</h3>
              <p className="text-gray-600">
                We don't jump into execution without understanding the bigger
                picture. Every project starts with research, positioning, and a
                clear roadmap.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Built to Scale</h3>
              <p className="text-gray-600">
                Our systems are designed to grow with you - whether you're a
                startup finding product-market fit or an established business
                entering new markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#0066CC] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LET'S BUILD SOMETHING THAT MOVES YOUR BUSINESS FORWARD.
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Ready to see what's possible? Let's talk.
          </p>
          <button className="bg-[#FF6B35] text-white px-10 py-4 rounded-full hover:bg-orange-600 text-lg font-semibold">
            Start a Project
          </button>
        </div>
      </section>
    </div>
  );
}
