"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "@/app/components/ContactModal";

export default function BuildConnectionPage() {
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
      title: "Social Media",
      description:
        "We help you build an active, authentic presence on the platforms that matter most to your audience—creating content that sparks conversation and drives engagement.",
    },
    {
      id: 2,
      number: "02",
      title: "Content Marketing",
      description:
        "From blogs to videos, we create valuable content that educates, entertains and keeps your brand top of mind throughout the customer journey.",
    },
    {
      id: 3,
      number: "03",
      title: "Personal Branding",
      description:
        "We help founders, executives and professionals build a clear, compelling digital presence that positions them as leaders in their field.",
    },
    {
      id: 4,
      number: "04",
      title: "Influencer Marketing",
      description:
        "Connect with creators and influencers who can authentically introduce your brand to engaged, ready-to-buy audiences.",
    },
  ];

  const benefits = [
    "Build trust and credibility with your audience",
    "Create content that resonates and engages",
    "Turn followers into customers",
    "Strengthen brand loyalty and advocacy",
  ];

  return (
    <div className="px-6 bg-white">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <motion.section
          className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 bg-gradient-to-b from-orange-50 to-white"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex gap-3 items-center text-[#EC550E] mb-6"
              variants={fadeIn}
            >
              <span className="w-10 h-1 bg-[#EC550E]"></span>
              <h2 className="text-sm md:text-base font-semibold tracking-wider">
                02 / BUILD CONNECTION
              </h2>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
              variants={fadeIn}
            >
              TURN ATTENTION
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight"
              variants={fadeIn}
            >
              INTO CONNECTION.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
              variants={fadeIn}
            >
              We build meaningful relationships between your brand and your
              audience through social media, content marketing, personal
              branding and influencer partnerships.
            </motion.p>

            <motion.button
              onClick={() => setIsModalOpen(true)}
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
              alt="Building connections"
              width={1400}
              height={700}
              className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
        </motion.section>

        {/* Connection Section */}
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 uppercase">
                  Attention without connection
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 uppercase">
                  is just <span className="text-[#EC550E]">noise.</span>
                </h2>
              </motion.div>

              <motion.div variants={fadeIn}>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Getting seen is one thing. Building trust, creating
                  conversations and turning attention into loyalty—that&apos;s
                  where real growth happens.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our Build Connection services help you turn visibility into
                  meaningful relationships through social media management,
                  content that resonates and strategic partnerships that expand
                  your reach.
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
              <h3 className="text-sm text-[#EC550E] font-semibold mb-4 tracking-wider uppercase">
                WHAT WE OFFER
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase">
                Four ways to build
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EC550E] uppercase">
                deeper connections.
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
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="#EC550E"
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

        {/* Benefits Section */}
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 uppercase">
                  From awareness
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF6B35] mb-8 uppercase">
                  to advocacy.
                </h2>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeIn}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Strong connections turn casual followers into loyal customers
                  and brand advocates who spread the word for you.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our Build Connection services help you create relationships
                  that drive lasting business value.
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

        {/* Process Section */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 uppercase">
                Consistent content.
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EC550E] uppercase">
                Meaningful engagement.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Listen",
                  description:
                    "Understand your audience, their needs and preferences",
                },
                {
                  step: "02",
                  title: "Create",
                  description:
                    "Develop content that educates, entertains and engages",
                },
                {
                  step: "03",
                  title: "Engage",
                  description:
                    "Build conversations and community around your brand",
                },
                {
                  step: "04",
                  title: "Grow",
                  description: "Expand reach through partnerships and advocacy",
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
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
