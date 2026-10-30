"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const GrowVisibility = [
    {
      id: 1,
      itemNo: "01",
      title: "DIGITAL STRATEGY",
      details: "Building a clear digital direction around your business goals.",
      icon: "",
      link: "",
    },
    {
      id: 2,
      itemNo: "02",
      title: "PAID ADS",
      details:
        "Reaching the right audience through targeted advertising campaigns.",
      icon: "",
      link: "",
    },
    {
      id: 3,
      itemNo: "03",
      title: "SEO SEARCH",
      details: "Improving your visibility where customers are searching.",
      icon: "",
      link: "",
    },
    {
      id: 4,
      itemNo: "04",
      title: "DIGITAL CAMPAIGNS",
      details:
        "Creating focused campaigns designed to generate attention and action.",
      icon: "",
      link: "",
    },
  ];

  const BuildConnection = [
    {
      id: 1,
      itemNo: "01",
      title: "SOCIAL MEDIA",
      details:
        "Building an active presence and meaningful audience connections.",
      icon: "",
      link: "",
    },
    {
      id: 2,
      itemNo: "02",
      title: "CONTENT MARKETING",
      details:
        "Creating useful content that keeps your brand relevant and engaging.",
      icon: "",
      link: "",
    },
    {
      id: 3,
      itemNo: "03",
      title: "PERSONAL BRANDING",
      details:
        "Helping individuals build a clear and recognizable digital presence.",
      icon: "",
      link: "",
    },
    {
      id: 4,
      itemNo: "04",
      title: "INFLUENCER MARKETING",
      details:
        "Connecting brands with creators who can reach the right audiences.",
      icon: "",
      link: "",
    },
  ];

  return (
    <div className="px-6 bg-white">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}

        {/* Main Content Section */}
        <motion.section
          className="pt-18 md:pt-20 py-12 md:py-22 px-4 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <div className="max-w-7xl mx-auto mt-8 md:mt-16">
            <motion.div
              className="flex gap-2 md:gap-3 items-center text-[#14212DB2] px-0 md:px-6 py-8 md:py-16"
              variants={fadeIn}
            >
              <span className="w-8 md:w-10 h-1 bg-[#EC550E] mb-4"></span>
              <h1 className="text-sm md:text-md font-semibold mb-4">
                OUR SERVICES
              </h1>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-2 gap-8 md:gap-12"
              variants={fadeIn}
            >
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-4 md:mb-6 leading-tight">
                  DIGITAL WORK DESIGNED TO MOVE YOUR BUSINESS{" "}
                  <span className="text-[#FF6B35]">FORWARD.</span>
                </h1>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-gray-600 text-base md:text-lg max-w-3xl">
                  From strategy and visibility to audience connection and
                  measurable results, our services are designed to support the
                  different stages of digital growth.
                </p>
                <hr className="my-4 md:my-6 text-gray-600" />
                <div className="flex flex-wrap gap-6 md:gap-0 md:justify-between mt-3 md:mt-4">
                  <div className="flex items-center">
                    <span className="text-3xl md:text-4xl font-bold text-[#037BD1]">
                      10
                    </span>
                    <span className="text-base md:text-xl font-semibold text-gray-400 ml-2">
                      SERVICES
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl md:text-4xl font-bold text-[#037BD1]">
                      3
                    </span>
                    <span className="text-base md:text-xl font-semibold text-gray-400 ml-2">
                      GROWTH STAGES
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="mt-6 md:mt-8" variants={fadeIn}>
              <Image
                src="/assets/services-hero.jpg"
                alt="Team collaboration"
                width={1200}
                height={600}
                className="rounded-xl md:rounded-2xl w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* From Getting Seen to Getting Results */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-[#FF6B35] text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-wider">
              HOW WE HELP
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-3 md:mb-4">
              FROM GETTING SEEN TO
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-12">
              GETTING <span className="text-[#0066CC]">RESULTS.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl">
              Whether you need more visibility, stronger connections, or proven
              systems that convert - we&apos;ve got the tools, the talent, and
              the track record to help you grow.
            </p>
          </div>
        </motion.section>

        {/* Three Stages Section */}
        <motion.section
          className="py-12 md:py-20 px-4 md:px-6 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="max-w-7xl mx-auto" variants={staggerContainer}>
            <div className="text-[#0066CC] text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-wider">
              THE GROWTH SYSTEM
            </div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-2 md:mb-4"
              variants={fadeIn}
            >
              THREE STAGES. ONE
            </motion.h2>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-16"
              variants={fadeIn}
            >
              CONNECTED GROWTH SYSTEM.
            </motion.h2>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
            >
              <Link href="/services/grow-visibility">
                <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-gray-200 hover:border-[#037BD1] transition-colors cursor-pointer">
                  <div className="text-[#14212D33] text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                    01
                  </div>
                  <h3 className="text-xl md:text-2xl text-black font-bold mb-3 md:mb-4">
                    GROW VISIBILITY
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Build the strategic foundation and visibility needed to
                    reach the right audience and create demand.
                  </p>
                </div>
              </Link>

              <Link href="/services/build-connection">
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#EC550E] transition-colors cursor-pointer">
                  <div className="text-[#14212D33] text-3xl  font-bold mb-4">
                    02
                  </div>
                  <h3 className="text-2xl text-black font-bold mb-4">
                    BUILD CONNECTION
                  </h3>
                  <p className="text-gray-600">
                    Turn attention into an active presence meaningful
                    conversations and stronger relationships.
                  </p>
                </div>
              </Link>

              <Link href="/services/drive-results">
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#FF6B35] transition-colors cursor-pointer">
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
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Be Seen Section */}
        <motion.section
          className="py-20 px-6 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
              01 / GROW VISIBILITY
            </div>
            <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">
              BE SEEN BY THE
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-10">
              PEOPLE WHO MATTER.
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl py-3">
              Build the strategic foundation and visibility needed to reach the
              right audience and create demand.
            </p>

            {/* services card */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GrowVisibility.map((growth) => (
                <div
                  key={growth.id}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
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
                    <span className="text-2xl font-semibold text-black">
                      {growth.itemNo}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {growth.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {growth.details}
                  </p>
                  {/* <Link
                  href=""
                  className="inline-flex items-center gap-2 text-[#EC550E] font-semibold text-sm"
                >
                  READ MORE
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
                </div>
              ))}
            </div>
            {/* growvisibility detail page */}
            <div className="mt-12 text-center">
              <Link href="/services/grow-visibility">
                <button className="bg-[#037BD1] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0266a8] transition-colors inline-flex items-center gap-2">
                  VIEW SERVICES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="white"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Turn Attention Section */}
        <motion.section
          className="py-20 px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl text-black mx-auto">
            <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
              02 / BUILD CONNECTION
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              TURN ATTENTION
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-10">
              INTO CONNECTION.
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl py-3">
              Build an active presence, create meaningful conversations and
              develop stronger relationships with the people who matter to your
              business.
            </p>
            {/* services card */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BuildConnection.map((growth) => (
                <div
                  key={growth.id}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
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
                    <span className="text-2xl font-semibold text-black">
                      {growth.itemNo}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {growth.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {growth.details}
                  </p>
                  {/* <Link
                  href=""
                  className="inline-flex items-center gap-2 text-[#EC550E] font-semibold text-sm"
                >
                  READ MORE
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
                </div>
              ))}
            </div>
            {/* build connection detail page */}
            <div className="mt-12 text-center">
              <Link href="/services/build-connection">
                <button className="bg-[#EC550E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d64a0c] transition-colors inline-flex items-center gap-2">
                  VIEW SERVICES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="white"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Turn Digital Activity Section */}
        <motion.section
          className="py-20 px-6 bg-black"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-[#FF6B35] text-sm font-semibold mb-4 uppercase tracking-wider">
              03 / DRIVE RESULTS
            </div>
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
              TURN DIGITAL ACTIVITY INTO
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-10">
              BUSINESS RESULTS.
            </h2>

            <p className="text-white text-lg mb-12 max-w-3xl py-3">
              Measure what matters, strengthen customer relationships and use
              performance data to make better decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-t border-t-white">
                <div className="text-white text-3xl font-bold mb-4">01</div>
                <h3 className="text-2xl text-white font-bold mb-3">
                  EMAIL MARKETING{" "}
                </h3>
                <p className="text-gray-400 mb-2">
                  Turning direct communication into stronger customer
                  relationships.
                </p>
                <Link href="" className="my-4">
                  <div className="flex gap-3">
                    <p className="text-[#EC550E]">EXPLORE SERVICE</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(236,85,14,1)"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </div>
                </Link>
              </div>

              <div className="border-t border-t-white">
                <div className="text-white text-3xl font-bold mb-4">02</div>
                <h3 className="text-2xl text-white font-bold mb-3">
                  ANALYTICS & INSIGHTS
                </h3>
                <p className="text-gray-400 mb-2">
                  Using data to understand performance and improve decisions.
                </p>
                <Link href="" className="my-4">
                  <div className="flex gap-3">
                    <p className="text-[#EC550E]">EXPLORE SERVICE</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(236,85,14,1)"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            {/* drive results detail page */}
            <div className="mt-12 text-center">
              <Link href="/services/drive-results">
                <button className="bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e55a2a] transition-colors inline-flex items-center gap-2">
                  VIEW SERVICES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="white"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </motion.section>
        {/* Think Deeply Section */}
        <motion.section
          className="py-20 px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-7xl text-black mx-auto">
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
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision Section */}
        <motion.section
          className="grid md:grid-cols-2 gap-10 px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
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
                <span className="text-[#EC550E] text-sm">01</span>
                <h3 className="text-2xl font-bold">OUR MISSION</h3>
              </div>
            </div>
            <p className="text-[#1A1A1A] text-lg leading-relaxed">
              To help businesses use digital marketing to become more visible,
              more connected and more effective.
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
                <span className="text-[#037BD1] text-sm">02</span>
                <h3 className="text-2xl font-bold">OUR VISION</h3>
              </div>
            </div>
            <p className="text-[#1A1A1A] text-lg leading-relaxed">
              To build a digital marketing agency that helps African businesses
              connect, grow and thrive in an increasingly digital world.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
