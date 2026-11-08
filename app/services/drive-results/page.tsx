"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "@/app/components/ContactModal";

export default function DriveResultsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title: "Email Marketing",
      description:
        "Build direct relationships with your audience through personalized email campaigns that nurture leads, drive conversions and create loyal customers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="#FF6B35"
        >
          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
        </svg>
      ),
    },

    {
      id: 2,
      number: "02",
      title: "Analytics & Insights",
      description:
        "Turn data into actionable insights. We track, measure and report on what matters most—giving you clarity on performance and confidence in your decisions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(236,85,14,1)"
        >
          <path d="M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z"></path>
        </svg>
      ),
    },
  ];

  const benefits = [
    "Measure ROI across all marketing channels",
    "Make data-driven decisions with confidence",
    "Improve customer retention and lifetime value",
    "Optimize campaigns for better performance",
  ];

  const metrics = [
    {
      title: "Conversion Tracking",
      description: "Monitor how visitors become customers",
    },
    {
      title: "Campaign Performance",
      description: "Understand what drives results",
    },
    {
      title: "Customer Behavior",
      description: "Learn what your audience responds to",
    },
    {
      title: "Revenue Attribution",
      description: "Connect marketing spend to business outcomes",
    },
  ];

  return (
    <div className="px-6 md:px-15 bg-white">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <motion.section
          className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 bg-gradient-to-b from-purple-50 to-white"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex gap-3 items-center text-[#FF6B35] mb-6"
              variants={fadeIn}
            >
              <span className="w-10 h-1 bg-[#FF6B35]"></span>
              <h2 className="text-sm md:text-base font-semibold tracking-wider">
                03 / DRIVE RESULTS
              </h2>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
              variants={fadeIn}
            >
              EVERY MARKETING
            </motion.h1>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight"
              variants={fadeIn}
            >
              ACTIVITY NEEDS A PURPOSE.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
              variants={fadeIn}
            >
              We help you measure what matters, optimize performance and turn
              marketing activity into measurable business results through email
              marketing and data-driven insights.
            </motion.p>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#EC550E] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#d64a0c] transition-colors"
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
              alt="Driving results"
              width={1400}
              height={700}
              className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
        </motion.section>

        {/* Purpose Section */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 uppercase">
                  Marketing without measurement
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 uppercase">
                  is just <span className="text-[#FF6B35]">guessing.</span>
                </h2>
              </motion.div>

              <motion.div variants={fadeIn}>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Great marketing isn&apos;t just about creativity and
                  reach—it&apos;s about delivering measurable outcomes that
                  matter to your business.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our Drive Results services help you track performance,
                  understand customer behavior and use data to make smarter
                  decisions that improve ROI.
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
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="mb-12" variants={fadeIn}>
              <h3 className="text-sm text-[#FF6B35] font-semibold mb-4 tracking-wider">
                WHAT WE OFFER
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase">
                Two ways to turn activity
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF6B35] uppercase">
                into results.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:shadow-lg transition-shadow"
                  variants={fadeIn}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                      {service.icon}
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

        {/* Metrics Section */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6 bg-black rounded-2xl text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="mb-12" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 uppercase">
                What we measure.
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF6B35] mb-8 uppercase">
                What matters.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-8 rounded-xl border border-gray-800"
                  variants={fadeIn}
                >
                  <div className="w-12 h-12 bg-[#FF6B35] bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="#FF6B35"
                    >
                      <path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{metric.title}</h3>
                  <p className="text-gray-400">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 uppercase">
                  From activity
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#037BD1] mb-8 uppercase">
                  to outcomes.
                </h2>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeIn}>
                <p className="text-gray-600 text-lg leading-relaxed">
                  When you know what&apos;s working and why, you can do more of
                  it. Our Drive Results services give you the insights you need
                  to grow with confidence.
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
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 uppercase">
                Track. Analyze.
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF6B35] uppercase">
                Improve. Repeat.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Set Goals",
                  description:
                    "Define what success looks like for your business",
                },
                {
                  step: "02",
                  title: "Track Data",
                  description: "Monitor performance across all channels",
                },
                {
                  step: "03",
                  title: "Analyze",
                  description: "Turn numbers into insights and recommendations",
                },
                {
                  step: "04",
                  title: "Optimize",
                  description: "Refine strategies based on what works",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200"
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
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
