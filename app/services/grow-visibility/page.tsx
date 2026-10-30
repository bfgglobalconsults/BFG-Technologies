"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GrowVisibilityPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    {
      id: 1,
      number: "01",
      title: "Digital Strategy",
      description:
        "We start every project by understanding your goals and your market. Then we build a digital strategy that connects the two, with clear direction on what to do, where to focus and why it matters.",
    },
    {
      id: 2,
      number: "02",
      title: "Paid Ads",
      description:
        "From Google Ads to Meta campaigns, we create ads that reach the right people, in the right place, at the right time with messaging that drives clicks, conversions and ROI.",
    },
    {
      id: 3,
      number: "03",
      title: "SEO Search",
      description:
        "We help your website rank higher, load faster and show up where customers are searching. From technical audits to keyword optimization, we build visibility that lasts.",
    },
    {
      id: 4,
      number: "04",
      title: "Digital Campaigns",
      description:
        "Launch focused, results-driven campaigns that generate attention and action. Whether it's a product launch, seasonal push or brand awareness drive, we bring creative ideas and execution that works.",
    },
  ];

  const benefits = [
    "Be found by the right audience",
    "Build demand for your product or service",
    "Outperform competitors in search and ads",
    "Create a strategic foundation for growth",
  ];

  return (
    <div className="px-6 bg-white">
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex gap-3 items-center text-[#037BD1] mb-6"
            variants={fadeIn}
          >
            <span className="w-10 h-1 bg-[#037BD1]"></span>
            <h2 className="text-sm md:text-base font-semibold tracking-wider">
              01 / GROW VISIBILITY
            </h2>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
            variants={fadeIn}
          >
            DIGITAL MARKETING
          </motion.h1>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight"
            variants={fadeIn}
          >
            STRATEGY.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
            variants={fadeIn}
          >
            We create visibility that matters—by connecting strategy, search,
            and paid advertising to help your business get found by the people
            who need what you offer.
          </motion.p>

          <motion.button
            className="bg-[#EC550E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d64a0c] transition-colors"
            variants={fadeIn}
          >
            START A PROJECT
          </motion.button>
        </div>
      </motion.section>

      {/* Hero Image */}
      <motion.section
        className="px-4 md:px-6 pb-12 md:pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <Image
            src="/assets/services-hero.jpg"
            alt="Digital marketing strategy"
            width={1400}
            height={700}
            className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>
      </motion.section>

      {/* Marketing Decision Section */}
      <motion.section
        className="py-12 md:py-20 px-4 md:px-6 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                Every marketing decision
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                needs a <span className="text-[#037BD1]">direction.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeIn}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We don&apos;t just run campaigns - we build strategies. Clear
                direction on where to show up, who to target and how to position
                your business in a crowded market.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From search visibility and paid advertising to digital campaign
                planning, every service in this stage is designed to get your
                business in front of the right people.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="py-12 md:py-20 px-4 md:px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-12" variants={fadeIn}>
            <h3 className="text-sm text-[#037BD1] font-semibold mb-4 tracking-wider">
              WHAT WE OFFER
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Four ways to grow
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#037BD1]">
              your visibility.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:shadow-lg transition-shadow"
                variants={fadeIn}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="#037BD1"
                    >
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM8.82843 10.5858L7.41421 12L12 16.5858L16.5858 12L15.1716 10.5858L13 12.7574V6H11V12.7574L8.82843 10.5858Z"></path>
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-gray-300">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                {/* <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#EC550E] font-semibold hover:gap-3 transition-all"
                >
                  LEARN MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="#EC550E"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </Link> */}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Business Goals Section */}
      <motion.section
        className="py-12 md:py-20 px-4 md:px-6 bg-black text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                From business goals
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF6B35] mb-8">
                to a clear direction.
              </h2>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeIn}>
              <p className="text-gray-300 text-lg leading-relaxed">
                Visibility isn&apos;t about being everywhere - it&apos;s about
                being seen in the right places, by the right people, with the
                right message.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our Grow Visibility services help you build a strategic
                foundation that drives real business outcomes.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">What you get:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="#FF6B35"
                        className="flex-shrink-0 mt-1"
                      >
                        <path d="M10 15.172L19.192 5.979L20.607 7.393L10 18L3.636 11.636L5.05 10.222L10 15.172Z"></path>
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Strategy Section */}
      <motion.section
        className="py-12 md:py-20 px-4 md:px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              One strategy.
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#037BD1]">
              Connected execution.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Research",
                description:
                  "Understand your market, competitors and opportunities",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Build a clear plan based on your business goals",
              },
              {
                step: "03",
                title: "Execute",
                description: "Launch campaigns across search, social and ads",
              },
              {
                step: "04",
                title: "Optimize",
                description: "Track performance and refine for better results",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl"
                variants={fadeIn}
              >
                <div className="text-4xl font-bold text-gray-200 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
    </div>
    </div>
  );
}
