"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="px-6 md:px-15 bg-white">
      <div className="min-h-screen bg-white">
        {/* <Header /> */}

        {/* Hero Section */}
        <section className="pt-18 md:pt-20 py-12 md:py-22 px-4 md:px-6">
          <motion.div
            className="max-w-7xl mx-auto mt-8 md:mt-16"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="flex gap-2 md:gap-3 items-center text-[#14212DB2] px-0 md:px-6 py-8 md:py-16"
              variants={fadeIn}
            >
              <span className="w-8 md:w-10 h-1 bg-[#EC550E] mb-4"></span>
              <h1 className="text-sm md:text-md font-semibold mb-4">
                OUR STORY
              </h1>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-2 gap-8 md:gap-12"
              variants={fadeIn}
            >
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-4 md:mb-6">
                    BUILT FOR <span className="text-[#0066CC]">AFRICA.</span>
                    <br />
                    DESIGNED FOR <span className="text-[#FF6B35]">GROWTH.</span>
                  </h1>
                  <p className="text-gray-600 text-base md:text-lg">
                    BFG Technologies sits at the intersection of digital
                    marketing, creativity and technology. We don&apos;t believe
                    digital marketing should simply generate impressions, likes
                    or followers. It should build influence. And influence
                    should create measurable opportunities for growth.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-6 md:mt-8 text-xs sm:text-sm md:text-base">
                  <span className="text-gray-400 font-semibold">FOCUS</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-[#FF6B35] font-semibold">
                    INFLUENCE
                  </span>
                  {/* <span className="text-gray-400">→</span>
                  <span className="text-gray-400 font-semibold">CONTENT</span> */}
                  <span className="text-gray-400">→</span>
                  <span className="text-[#0066CC] font-semibold">GROWTH</span>
                </div>
              </div>
              <div>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/ourstory-image.png"
                    alt="Team meeting"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Problem Statement */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6 bg-white relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="absolute right-0 top-0 bottom-0 w-6 opacity-10 hidden md:block">
            <Image
              src="/assets/01.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-1 gap-6 md:gap-12 items-center">
              <div>
                <div className="text-[#FF6B35] text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-wider">
                  01/ WHY WE EXIST
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-4 md:mb-6 leading-tight">
                  AFRICA DOESN&apos;T HAVE A SHORTAGE OF GREAT BUSINESSES.
                  <br className="hidden sm:block" />
                  IT HAS A{" "}
                  <span className="text-[#0066CC]">VISIBILITY PROBLEM.</span>
                </h2>
              </div>
              <div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  Where strong businesses go unseen growth stalls. BFG exists to
                  help them communicate their value clearly, reach the people
                  who need them and compete with confidence in an increasingly
                  digital world.
                </p>

                <h3 className="text-xl md:text-2xl text-black font-bold mb-6">
                  Why BFG Technologies?
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-[#0066CC] text-lg font-semibold  mb-3">
                      We Understand Africa
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      African audiences are not a monolith. Markets, cultures,
                      languages, behaviours and digital habits vary enormously
                      across the continent. We combine local understanding with
                      global digital marketing practices to create strategies
                      relevant to the audiences our clients want to reach.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold text-[#0066CC] mb-3">
                      We Combine Creativity With Technology
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      Technology allows marketers to understand, reach and
                      measure audiences with extraordinary precision. Human
                      creativity gives people a reason to care. We combine both.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold text-[#0066CC] mb-3">
                      We Focus on Influence, Not Just Visibility
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      Being seen is important. Being remembered, trusted and
                      chosen is better. Our goal is to help clients move beyond
                      digital presence towards genuine brand influence.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold text-[#0066CC] mb-3">
                      We Connect Marketing to Business Growth
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      Followers matter. Engagement matters. Reach matters. But
                      ultimately, digital marketing must contribute to
                      meaningful outcomes. We therefore connect marketing
                      activities to enquiries, leads, customers, opportunities,
                      loyalty and long-term brand value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Origin Story */}
        <motion.section
          className="py-12 md:py-20 bg-gray-50 px-4 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="order-2 md:order-1">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/story-image.png"
                    alt="Founders at work"
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-[#0066CC] text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-wider">
                  OUR STORY
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-4 md:mb-6">
                  WE STARTED WITH A{" "}
                  <span className="text-[#0066CC]">SIMPLE BELIEF.</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                  BFG Technologies began with a belief we couldn&apos;t shake:
                  the businesses with the most to offer are rarely the ones
                  people hear about. Great work was everywhere — great
                  visibility was not.
                </p>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                  So we set out to build a different kind of agency, one that
                  treats brand, content and performance as a single system and
                  measures its work by the growth it creates rather than the
                  noise it makes.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Today we partner with ambitious founders and teams across
                  Africa and beyond, pairing sharp strategy with real craft and
                  a stubborn focus on outcomes.
                </p>

                {/* frameworks */}
                <div className="mt-6 md:mt-8 space-y-2 md:space-y-3 divide-y divide-gray-200">
                  <div className="flex items-start gap-3 md:gap-4 py-2 md:py-3">
                    <div className="text-[#FF6B35] text-xl md:text-2xl font-bold min-w-[40px] md:min-w-[60px]">
                      01
                    </div>
                    <div>
                      <p className="font-bold text-black text-base md:text-lg">
                        THE IDEA
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        A studio built to close the gap between strong
                        businesses and the audiences they deserve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 py-2 md:py-3">
                    <div className="text-[#FF6B35] text-xl md:text-2xl font-bold min-w-[40px] md:min-w-[60px]">
                      02
                    </div>
                    <div>
                      <p className="font-bold text-black text-base md:text-lg">
                        THE TEAM
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        Senior strategists, creatives and performance leads
                        working in one team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 py-2 md:py-3">
                    <div className="text-[#FF6B35] text-xl md:text-2xl font-bold min-w-[40px] md:min-w-[60px]">
                      03
                    </div>
                    <div>
                      <p className="font-bold text-black text-base md:text-lg">
                        THE WORK
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        Brand systems, campaigns and products built to travel -
                        and to convert.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 py-2 md:py-3">
                    <div className="text-[#FF6B35] text-xl md:text-2xl font-bold min-w-[40px] md:min-w-[60px]">
                      04
                    </div>
                    <div>
                      <p className="font-bold text-black text-base md:text-lg">
                        THE VISION
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        A digital marketing partner African businesses can be
                        proud to grow with.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6 bg-black text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl">
            <div className="text-[#EC550E] text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-wider">
              WHAT WE BELIEVE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Growth starts with understanding the{" "}
              <span className="text-[#EC550E]">people</span> behind the
              business.
            </h2>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white"></div>
              <p className="text-gray-400 text-sm md:text-base">
                - BFG Technologies Team
              </p>
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-4 md:mb-6 leading-tight uppercase">
              African Focus. Digital Influence.
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0066CC] font-bold mb-8 md:mb-12 leading-tight uppercase">
              Measurable Growth.
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
              BFG Technologies sits at the intersection of digital marketing,
              creativity and technology. We don&apos;t believe digital marketing
              should simply generate impressions, likes or followers. It should
              build influence. And influence should create measurable
              opportunities for growth.
            </p>

            <div className="space-y-8 md:space-y-12 divide-y">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 pb-6 md:pb-4">
                <div className="text-3xl md:text-5xl font-bold text-[#EC550E] flex-shrink-0 w-16 md:w-24">
                  01
                </div>
                <div className="flex-1 space-y-2 md:space-y-0">
                  <h3 className="text-xl md:text-2xl text-black font-bold mb-2 md:mb-3">
                    ATTRACT
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg">
                    Get your brand in front of the people who matter. We combine
                    digital strategy, content, search, paid media and creative
                    campaigns to increase visibility and attract relevant
                    audiences.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 pb-6 md:pb-4 pt-6 md:pt-0">
                <div className="text-3xl md:text-5xl font-bold text-[#EC550E] flex-shrink-0 w-16 md:w-24">
                  02
                </div>
                <div className="flex-1 space-y-2 md:space-y-0">
                  <h3 className="text-xl md:text-2xl text-black font-bold mb-2 md:mb-3">
                    ENGAGE
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg">
                    Turn attention into connection. Through storytelling,
                    valuable content, community building and consistent digital
                    experiences, we help brands create relationships that build
                    familiarity, credibility and trust.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 pb-6 md:pb-4 pt-6 md:pt-0">
                <div className="text-3xl md:text-5xl font-bold text-[#EC550E] flex-shrink-0 w-16 md:w-24">
                  03
                </div>
                <div className="flex-1 space-y-2 md:space-y-0">
                  <h3 className="text-black text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    CONVERT
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg">
                    Turn influence into action. We create conversion-focused
                    campaigns and digital journeys designed to move audiences
                    from awareness to enquiry, purchase, subscription,
                    partnership or another meaningful business outcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-[#0066CC] text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-wider">
              THE PEOPLE BEHIND BFG
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold">
                PEOPLE MAKE <br />
                THE <span className="text-[#0066CC]">DIFFERENCE.</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg md:w-[40%]">
                A team that stays hands-on with every partnership. The people
                you meet are the people who do the work.
              </p>
            </div>

            <div className="mb-8 md:mb-12">
              <div className="rounded-2xl md:rounded-3xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src="/assets/people-image.jpg"
                  alt="Full team"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <Image
                    src="/assets/Festus.png"
                    alt="Team member"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-bold text-lg md:text-xl text-black mb-1">
                    FESTUS BELLO
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Founder and CEO
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <Image
                    src="/assets/Bayo.jpeg"
                    alt="Team member"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-bold text-lg md:text-xl text-black mb-1">
                    Bayo Adebayo
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Digital Marketing Lead
                  </p>
                </div>
              </div>
              1468272 8ko^6TF^
              <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <Image
                    src="/assets/Faith.jpeg"
                    alt="Team member"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-bold text-lg md:text-xl text-black mb-1">
                    Fauth Chidera
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Project & Sales Support
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <Image
                    src="/assets/Peter.png"
                    alt="Team member"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-bold text-lg md:text-xl text-black mb-1">
                    Peter Itodo
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Creative and Media Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Focus Section */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8 md:gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6 md:mb-8 leading-tight">
                  WHAT WE STAND FOR.
                  <br />
                  <span className="text-[#0066CC]">AS AN ORGANIZATION.</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10 px-6">
                {/* Mission Card */}
                <div className="bg-[#EC550E1A] text-[#1A1A1A] rounded-xl border border-[#0000004D] p-12 md:p-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-[#EC550E] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                        fill="white"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17L12 7V11H8L13 16V12Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#EC550E] text-sm">01</p>
                      <h3 className="text-2xl font-bold">OUR MISSION</h3>
                    </div>
                  </div>
                  <p className="text-[#1A1A1A] text-lg leading-relaxed">
                    To help African businesses and individual thought leaders
                    build influential digital brands that attract the right
                    audiences, create meaningful engagement and convert
                    attention into measurable growth.
                  </p>
                </div>

                {/* Vision Card */}
                <div className="bg-[#037BD11A] text-[#1A1A1A] rounded-xl border border-[#0000004D] p-12 md:p-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-[#037BD1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                        fill="white"
                      >
                        <path d="M12 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12 21C6.60756 21 2.12163 17.1202 1.18109 12C2.12163 6.87976 6.60756 3 12 3ZM12 19C16.2359 19 19.8603 16.0537 20.7777 12C19.8603 7.94633 16.2359 5 12 5C7.7641 5 4.13975 7.94633 3.22227 12C4.13975 16.0537 7.7641 19 12 19ZM12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#037BD1] text-sm">02</p>
                      <h3 className="text-2xl font-bold">OUR VISION</h3>
                    </div>
                  </div>
                  <p className="text-[#1A1A1A] text-lg leading-relaxed">
                    To become a leading digital marketing agency shaping the
                    brands and personalities influencing Africa and the world
                  </p>
                </div>
              </div>
              {/* vision, mission  */}

              {/* <div>
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
                      Creating systems that work for you, not just one-off
                      tactics
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0066CC] text-xl">✓</span>
                    <p className="text-gray-600 text-lg">
                      Delivering results you can measure and build on
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        {/* <section className="py-20 px-6 bg-[#0066CC] text-white rounded-3xl my-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let&apos;s build something that moves your business forward.
            </h2>
            <button className="bg-[#FF6B35] text-white px-10 py-4 rounded-lg hover:bg-orange-600 text-lg font-semibold">
              Start a Conversation
            </button>
          </div>
        </section> */}
      </div>
    </div>
  );
}
