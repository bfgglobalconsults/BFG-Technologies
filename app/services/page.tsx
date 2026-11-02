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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(3,123,209,1)"
        >
          <path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"></path>
        </svg>
      ),
      link: "",
    },
    {
      id: 2,
      itemNo: "02",
      title: "PAID ADS",
      details:
        "Reaching the right audience through targeted advertising campaigns.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(3,123,209,1)"
        >
          <path d="M12.598 16 9.39893 8H7.39893L5.39893 13 5.39795 13.002 4.19897 16H6.35303L6.75293 15H10.043L10.443 16H12.598ZM7.552 13 8.39893 10.8851 9.24402 13H7.552ZM17 8H19V16H16C14.3431 16 13 14.6569 13 13 13 11.3431 14.3431 10 16 10H17V8ZM16 12C15.4478 12 15 12.4478 15 13 15 13.5522 15.4478 14 16 14H17V12H16ZM21 3H3C2.44775 3 2 3.44775 2 4V20C2 20.5522 2.44775 21 3 21H21C21.5522 21 22 20.5522 22 20V4C22 3.44775 21.5522 3 21 3ZM4 19V5H20V19H4Z"></path>
        </svg>
      ),
      link: "",
    },
    {
      id: 3,
      itemNo: "03",
      title: "SEO SEARCH",
      details: "Improving your visibility where customers are searching.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(3,123,209,1)"
        >
          <path d="M8 3C4.13401 3 1 6.13401 1 10C1 13.866 4.13401 17 8 17H9.07089C9.02417 16.6734 9 16.3395 9 16C9 15.6605 9.02417 15.3266 9.07089 15H8C5.23858 15 3 12.7614 3 10C3 7.23858 5.23858 5 8 5H16C18.7614 5 21 7.23858 21 10C21 10.3428 20.9655 10.6775 20.8998 11.0008C21.4853 11.5748 21.9704 12.2508 22.3264 13C22.7583 12.0907 23 11.0736 23 10C23 6.13401 19.866 3 16 3H8ZM11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 17.0191 20.6951 17.967 20.1716 18.7574L22.7071 21.2929L21.2929 22.7071L18.7574 20.1716C17.967 20.6951 17.0191 21 16 21C13.2386 21 11 18.7614 11 16Z"></path>
        </svg>
      ),
      link: "",
    },
    {
      id: 4,
      itemNo: "04",
      title: "DIGITAL CAMPAIGNS",
      details:
        "Creating focused campaigns designed to generate attention and action.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(3,123,209,1)"
        >
          <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
        </svg>
      ),
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(3,123,209,1)"
        >
          <path d="M5.23379 7.72989C6.65303 5.48625 9.15342 4 12.0002 4C14.847 4 17.3474 5.48625 18.7667 7.72989L20.4569 6.66071C18.6865 3.86199 15.5612 2 12.0002 2C8.43928 2 5.31393 3.86199 3.54356 6.66071L5.23379 7.72989ZM12.0002 20C9.15342 20 6.65303 18.5138 5.23379 16.2701L3.54356 17.3393C5.31393 20.138 8.43928 22 12.0002 22C15.5612 22 18.6865 20.138 20.4569 17.3393L18.7667 16.2701C17.3474 18.5138 14.847 20 12.0002 20ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 13C14.2091 13 16 14.7909 16 17H8C8 14.7909 9.79086 13 12 13ZM6 12C6 13.6569 4.65685 15 3 15C1.34315 15 0 13.6569 0 12C0 10.3431 1.34315 9 3 9C4.65685 9 6 10.3431 6 12ZM21 15C22.6569 15 24 13.6569 24 12C24 10.3431 22.6569 9 21 9C19.3431 9 18 10.3431 18 12C18 13.6569 19.3431 15 21 15Z"></path>
        </svg>
      ),
      link: "",
    },
    {
      id: 2,
      itemNo: "02",
      title: "CONTENT MARKETING",
      details:
        "Creating useful content that keeps your brand relevant and engaging.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(3,123,209,1)"
        >
          <path d="M15.2427 4.5115L8.50547 11.2487L7.79836 13.37L6.7574 14.411L9.58583 17.2394L10.6268 16.1985L12.7481 15.4914L19.4853 8.75414L15.2427 4.5115ZM21.6066 8.04704C21.9972 8.43756 21.9972 9.07073 21.6066 9.46125L13.8285 17.2394L11.7071 17.9465L10.2929 19.3607C9.90241 19.7513 9.26925 19.7513 8.87872 19.3607L4.63608 15.1181C4.24556 14.7276 4.24556 14.0944 4.63608 13.7039L6.0503 12.2897L6.7574 10.1684L14.5356 2.39018C14.9261 1.99966 15.5593 1.99966 15.9498 2.39018L21.6066 8.04704ZM15.2427 7.33993L16.6569 8.75414L11.7071 13.7039L10.2929 12.2897L15.2427 7.33993ZM4.28253 16.8859L7.11096 19.7143L5.69674 21.1285L1.4541 19.7143L4.28253 16.8859Z"></path>
        </svg>
      ),
      link: "",
    },
    {
      id: 3,
      itemNo: "03",
      title: "PERSONAL BRANDING",
      details:
        "Helping individuals build a clear and recognizable digital presence.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(3,123,209,1)"
        >
          <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM14.5946 18.8115C14.5327 18.5511 14.5 18.2794 14.5 18C14.5 17.7207 14.5327 17.449 14.5945 17.1886L13.6029 16.6161L14.6029 14.884L15.5952 15.4569C15.9883 15.0851 16.4676 14.8034 17 14.6449V13.5H19V14.6449C19.5324 14.8034 20.0116 15.0851 20.4047 15.4569L21.3971 14.8839L22.3972 16.616L21.4055 17.1885C21.4673 17.449 21.5 17.7207 21.5 18C21.5 18.2793 21.4673 18.551 21.4055 18.8114L22.3972 19.3839L21.3972 21.116L20.4048 20.543C20.0117 20.9149 19.5325 21.1966 19.0001 21.355V22.5H17.0001V21.3551C16.4677 21.1967 15.9884 20.915 15.5953 20.5431L14.603 21.1161L13.6029 19.384L14.5946 18.8115ZM18 19.5C18.8284 19.5 19.5 18.8284 19.5 18C19.5 17.1716 18.8284 16.5 18 16.5C17.1716 16.5 16.5 17.1716 16.5 18C16.5 18.8284 17.1716 19.5 18 19.5Z"></path>
        </svg>
      ),
      link: "",
    },
    {
      id: 4,
      itemNo: "04",
      title: "INFLUENCER MARKETING",
      details:
        "Connecting brands with creators who can reach the right audiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(3,123,209,1)"
        >
          <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711ZM7 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"></path>
        </svg>
      ),
      link: "",
    },
  ];

  return (
    <div className="px-6 md:px-15 bg-white">
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
                     {growth.icon}
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
                    {growth.icon}
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
          className="py-20 px-6 bg-black rounded-lg"
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
