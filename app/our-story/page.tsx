"use client";

import Image from "next/image";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function OurStory() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="px-15 bg-white">
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <motion.div 
            className="max-w-7xl mx-auto mt-16"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div 
              className="flex gap-3 items-center text-[#14212DB2] px-6 py-16"
              variants={fadeIn}
            >
              <span className="w-10 h-1 bg-[#EC550E] mb-4"></span>
              <h1 className="text-md font-semibold mb-4">OUR STORY</h1>
            </motion.div>
            <motion.div className="grid md:grid-cols-2 gap-12" variants={fadeIn}>
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-5xl md:text-6xl text-black font-bold mb-6">
                    BUILT FOR <span className="text-[#0066CC]">AFRICA.</span>
                    <br />
                    DESIGNED FOR <span className="text-[#FF6B35]">GROWTH.</span>
                  </h1>
                  <p className="text-gray-600 text-lg">
                    We help businesses across Africa unlock their full potential
                    through strategic digital marketing that drives real,
                    measurable results.
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-8">
                  <span className="text-gray-400 font-semibold">STRATEGY</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-[#FF6B35] font-semibold">CREATIVE</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-400 font-semibold">CONTENT</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-[#0066CC] font-semibold">GROWTH</span>
                </div>
              </div>
              <div>
                {" "}
                <div className="rounded-3xl ">
                  <Image
                    src="/assets/ourstory-image.png"
                    alt="Team meeting"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <motion.section 
          className="py-20 px-6 bg-gray-50 relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
            <Image
              src="/assets/01.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-1 gap-12 items-center">
              <div>
                <div className="text-[#FF6B35] text-sm font-semibold mb-4 uppercase tracking-wider">
                  01/ WHY WE EXIST
                </div>
                <h2 className="text-4xl md:text-5xl text-black font-bold mb-6">
                  AFRICA DOESN&apos;T HAVE A SHORTAGE OF GREAT BUSINESSES.
                  <br />
                  IT HAS A{" "}
                  <span className="text-[#0066CC]">VISIBILITY PROBLEM.</span>
                </h2>
              </div>
              <div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Where strong businesses go unseen growth stalls. BFG exists to
                  help them communicate their value clearly, reach the people
                  who need them and compete with confidence in an increasingly
                  digital world.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Origin Story */}
        <motion.section 
          className="py-20 px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/story-image.png"
                    alt="Founders at work"
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
                  OUR STORY
                </div>
                <h2 className="text-4xl md:text-5xl text-black font-bold mb-6">
                  WE STARTED WITH A{" "}
                  <span className="text-[#0066CC]">SIMPLE BELIEF.</span>
                </h2>
                <p className="text-gray-600 text-md mb-6 leading-relaxed">
                  BFG Technology began with a belief we couldn&apos;t shake: the
                  businesses with the most to offer are rarely the ones people
                  hear about. Great work was everywhere — great visibility was
                  not.
                </p>
                <p className="text-gray-600 text-md mb-6 leading-relaxed">
                  So we set out to build a different kind of agency, one that
                  treats brand, content and performance as a single system and
                  measures its work by the growth it creates rather than the
                  noise it makes.
                </p>
                <p className="text-gray-600 text-md leading-relaxed">
                  Today we partner with ambitious founders and teams across
                  Africa and beyond, pairing sharp strategy with real craft and
                  a stubborn focus on outcomes.
                </p>

                {/* frameworks */}
                <div className="mt-4 space-y-3 divide-y  divide-gray-200">
                  <div className="flex items-start gap-4 py-3">
                    <div className="text-[#FF6B35] text-2xl font-bold min-w-[60px]">
                      01
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">THE IDEA</p>
                      <p className="text-gray-400 text-sm">
                        A studio built to close the gap between strong
                        businesses and the audiences they deserve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-3">
                    <div className="text-[#FF6B35] text-2xl font-bold min-w-[60px]">
                      02
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">THE TEAM</p>
                      <p className="text-gray-400 text-sm">
                        Senior strategists, creatives and performance leads
                        working in one team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-3">
                    <div className="text-[#FF6B35] text-2xl font-bold min-w-[60px]">
                      03
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">THE WORK</p>
                      <p className="text-gray-400 text-sm">
                        Brand systems, campaigns and products built to travel -
                        and to convert.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-3">
                    <div className="text-[#FF6B35] text-2xl font-bold min-w-[60px]">
                      04
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">THE VISION</p>
                      <p className="text-gray-400 text-sm">
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
          className="py-20 px-6 bg-black text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Growth starts with understanding the{" "}
              <span className="text-[#EC550E]">people</span> behind the
              business.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white"></div>
              <p className="text-gray-400">- BFG Technologies Team</p>
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section 
          className="py-20 px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-black font-bold mb-12">
              THINK DEEPLY.
              <br />
              <span className="text-[#0066CC]">MAKE BODLY.</span>
              <br />
              GROW INTENTIONALLY.
            </h2>

            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="text-5xl font-bold text-[#EC550E] flex-shrink-0 w-24">
                  01
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-black font-bold mb-3">
                    Strategy
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We start with your business, your customers and the outcomes
                    that actually matter.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="text-5xl font-bold text-[#EC550E] flex-shrink-0 w-24">
                  02
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-black font-bold mb-3">CRAFT</h3>
                  <p className="text-gray-600 text-lg">
                    We turn strategy into clear, compelling digital experiences
                    and content.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="text-5xl font-bold text-[#EC550E] flex-shrink-0 w-24">
                  03
                </div>
                <div className="flex-1">
                  <h3 className="text-black text-2xl font-bold mb-3">
                    PERFORMANCE
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We measure what matters and keep improving.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          className="py-20 px-6 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
              THE PEOPLE BEHIND BFG
            </div>
            <div className="flex  justify-between">
              <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">
                PEOPLE MAKE <br />
                THE <span className="text-[#0066CC]">DIFFERENCE.</span>
              </h2>
              <p className="w-[40%] text-gray-600 text-lg mb-12">
                A small, senior team that stays hands-on with every partnership.
                The people you meet are the people who do the work.
              </p>
            </div>

            <div className="mb-12">
              <div className="rounded-3xl h-[600px] overflow-hidden">
                <Image
                  src="/assets/people-image.jpg"
                  alt="Full team"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <Image
                    src="/assets/Festus.png"
                    alt="Team member"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-black mb-1">
                    FESTUS BELLO
                  </h3>
                  <p className="text-gray-600 mb-2">Founder and CEO</p>
                  {/* <p className="text-sm text-gray-500">
                    Brief bio or area of expertise
                  </p> */}
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <Image
                    src="/assets/Bayo.jpeg"
                    alt="Team member"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-black mb-1">
                    Bayo Adebayo
                  </h3>
                  <p className="text-gray-600 mb-2">Digital Marketing Lead</p>
                  {/* <p className="text-sm text-gray-500">
                    Brief bio or area of expertise
                  </p> */}
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <Image
                    src="/assets/Faith.jpeg"
                    alt="Team member"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-black mb-1">
                    Fauth Chidera
                  </h3>
                  <p className="text-gray-600 mb-2">Project & Sales Support</p>
                  {/* <p className="text-sm text-gray-500">
                    Brief bio or area of expertise
                  </p> */}
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gray-200">
                  <Image
                    src="/assets/Peter.png"
                    alt="Team member"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-black mb-1">
                    Peter Itodo
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Creative and Media Support
                  </p>
                  {/* <p className="text-sm text-gray-500">
                    Brief bio or area of expertise
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Focus Section */}
        <motion.section 
          className="py-20 px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols gap-12">
              <div>
                <h2 className="text-4xl text-black md:text-5xl font-bold mb-6">
                  WHAT WE STAND FOR.
                  <br />
                  <span className="text-[#0066CC]">AS AN ORGANIZATION.</span>
                </h2>
              </div>
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
        </section>

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
