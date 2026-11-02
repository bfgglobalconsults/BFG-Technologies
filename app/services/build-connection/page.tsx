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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="#EC550E"
        >
          <path d="M5.23379 7.72989C6.65303 5.48625 9.15342 4 12.0002 4C14.847 4 17.3474 5.48625 18.7667 7.72989L20.4569 6.66071C18.6865 3.86199 15.5612 2 12.0002 2C8.43928 2 5.31393 3.86199 3.54356 6.66071L5.23379 7.72989ZM12.0002 20C9.15342 20 6.65303 18.5138 5.23379 16.2701L3.54356 17.3393C5.31393 20.138 8.43928 22 12.0002 22C15.5612 22 18.6865 20.138 20.4569 17.3393L18.7667 16.2701C17.3474 18.5138 14.847 20 12.0002 20ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 13C14.2091 13 16 14.7909 16 17H8C8 14.7909 9.79086 13 12 13ZM6 12C6 13.6569 4.65685 15 3 15C1.34315 15 0 13.6569 0 12C0 10.3431 1.34315 9 3 9C4.65685 9 6 10.3431 6 12ZM21 15C22.6569 15 24 13.6569 24 12C24 10.3431 22.6569 9 21 9C19.3431 9 18 10.3431 18 12C18 13.6569 19.3431 15 21 15Z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      number: "02",
      title: "Content Marketing",
      description:
        "From blogs to videos, we create valuable content that educates, entertains and keeps your brand top of mind throughout the customer journey.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="#EC550E"
        >
          <path d="M15.2427 4.5115L8.50547 11.2487L7.79836 13.37L6.7574 14.411L9.58583 17.2394L10.6268 16.1985L12.7481 15.4914L19.4853 8.75414L15.2427 4.5115ZM21.6066 8.04704C21.9972 8.43756 21.9972 9.07073 21.6066 9.46125L13.8285 17.2394L11.7071 17.9465L10.2929 19.3607C9.90241 19.7513 9.26925 19.7513 8.87872 19.3607L4.63608 15.１１８１C4.２４５５６ １４．７２７６ ４．２４５５６ １４．０９４４ ４．６３６０８ １３．７０３９L６．０５０３ １２．２８９７L６．７５７４ １０．１６８４L１４．５３５６ ２．３９０１８C１４．９２６１ １．９９９６６ １５．５５９３ １．９９９６６ １５．９４９８ ２．３９０１８L２１．６０６６ ８．０４７０４ZM１５．２４２７ ７．３３９９３L１６．６５６９ ８．７５４１４L１１．７０７１ １３．７０３９L１０．２９２９ １２．２８９７L１５．２４２７ ７．３３９９３ZM４．２８２５３ １６．８８５９L７．１１０９６ １９．７¹⁴³L５．⁶⁹⁶⁷⁴ ²¹․¹²⁸⁵L¹․⁴⁵⁴¹ ⁱ⁹․⁷¹⁴³L⁴․²⁸²⁵³ ⁱ⁶․⁸⁸⁵⁹Z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      number: "03",
      title: "Personal Branding",
      description:
        "We help founders, executives and professionals build a clear, compelling digital presence that positions them as leaders in their field.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="#EC550E"
        >
          <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM14.5946 18.8115C14.5327 18.5511 14.5 18.2794 14.5 18C14.5 17.7207 14.5327 17.449 14.5945 17.1886L13.6029 16.6161L14.6029 14.884L15.5952 15.4569C15.9883 15.0851 16.4676 14.8034 17 14.6449V13.5H19V14.6449C19.5324 14.8034 20.0116 15.0851 20.4047 15.4569L21.3971 14.8839L22.3972 16.616L21.4055 17.1885C21.4673 17.449 21.5 17.7207 21.5 18C21.5 18.2793 21.4673 18.551 21.4055 18.8114L22.3972 19.3839L21.3972 21.116L20.4048 20.543C20.0117 20.9149 19.5325 21.1966 19.0001 21.355V22.5H17.0001V21.3551C16.4677 21.1967 15.9884 20.915 15.5953 20.5431L14.603 21.1161L13.6029 19.384L14.5946 18.8115ZM18 19.5C18.8284 19.5 19.5 18.8284 19.5 18C19.5 17.1716 18.8284 16.5 18 16.5C17.1716 16.5 16.5 17.1716 16.5 18C16.5 18.8284 17.1716 19.5 18 19.5Z"></path>
        </svg>
      ),
    },
    {
      id: 4,
      number: "04",
      title: "Influencer Marketing",
      description:
        "Connect with creators and influencers who can authentically introduce your brand to engaged, ready-to-buy audiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="#EC550E"
        >
          <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711ZM7 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"></path>
        </svg>
      ),
    },
  ];

  const benefits = [
    "Build trust and credibility with your audience",
    "Create content that resonates and engages",
    "Turn followers into customers",
    "Strengthen brand loyalty and advocacy",
  ];

  return (
    <div className="px-6 md:px-15 bg-white">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
              variants={fadeIn}
            >
              TURN ATTENTION
            </motion.h1>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight"
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
