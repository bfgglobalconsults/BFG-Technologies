"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="px-6  bg-white">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <motion.section
          className="pt-18 md:pt-20 py-12 md:py-22 px-4 md:px-6"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-3 items-center px-6 py-16 text-[#14212DB2]">
              <span className="w-10 h-1 bg-[#EC550E] mb-4"></span>
              <h1 className="text-md font-semibold mb-4">PORTFOLIO/CLIENTS</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-4 md:mb-6">
                  WORK THAT MOVES BUSINESS{" "}
                  <span className="text-[#FF6B35]">FORWARD.</span>
                </h1>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-gray-600 text-lg max-w-3xl">
                  Explore selected projects, campaigns and client stories
                  showing how BFG Technology approaches digital growth.
                </p>
                <hr className="my-6 text-gray-600" />
                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-gray-400 ml-2">
                      PROJECTS
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-gray-400 ml-2">
                      CASE STUDIES
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-semibold text-gray-400 ml-2">
                      CLIENT STORIES
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Image
                src="/assets/portfolio-img.jpg"
                alt="Team collaboration"
                width={1200}
                height={600}
                className="rounded-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Every Project Starts With A Question */}
        <motion.section
          className="py-20 px-6 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-[#FF6B35] text-sm font-semibold mb-4 uppercase tracking-wider">
              THE WORK
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl/15 text-black font-bold mb-4">
                  EVERY PROJECT STARTS WITH A{" "}
                  <span className="text-[#0066CC]">BUSINESS PROBLEM.</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  From building visibility to creating stronger audience
                  connections and improving marketing performance our work is
                  shaped around the goals of each client.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-20 px-6 bg-[#F4F6F8]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <section className="">
            <div className="max-w-7xl mx-auto">
              <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
                SELECTED WORK
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl md:text-5xl/15 text-black font-bold mb-4">
                    PROJECT BUILT AROUND REAL{" "}
                    <span className="text-[#0066CC]">GOALS.</span>
                  </h2>
                </div>
                <div></div>
              </div>
            </div>
          </section>
          {/* Case Study 1 - IWE Advisory */}
          <section className="py-20 px-6 bg-[#F4F6F8]">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/assets/portfolio-1.png"
                    alt="IWE Advisory"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <div className="text-[#14212D33] font-semibold mb-4 uppercase text-sm">
                    <span className="text-lg">01</span> IWE ADVISORY
                  </div>
                  <h3 className="text-3xl md:text-4xl text-black font-bold mb-4">
                    UK BRAND & WEBSITE LAUNCH
                  </h3>

                  <div className="grid grid-cols-2 gap-6 my-6 text-black">
                    <div>
                      <span className="text-sm text-[#14212DB2] block mb-2">
                        MARKET
                      </span>
                      <p className="font-semibold">United Kingdom</p>
                    </div>
                    <div>
                      <span className="text-sm text-[#14212DB2] block mb-2">
                        PROJECT
                      </span>
                      <p className="font-semibold">
                        Digital Brand & Website Launch
                      </p>
                    </div>
                  </div>
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      FOCUS
                    </span>
                    <p>
                      Brand Launch • Website • Digital Presence • Market Entry
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      THE OBJECTIVE
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      IWE Advisory required a professional digital presence to
                      support the launch of its advisory brand in the United
                      Kingdom. BFG Technologies was engaged to establish the
                      company&apos;s primary digital platform and position the
                      business for its introduction to the market.
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      WHAT WE DELIVERED
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      BFG Technologies planned and executed the company&apos;s
                      website launch, creating the digital platform through
                      which prospective clients could discover the business,
                      understand its services and engage with the brand.
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-3">
                      MEASURABLE OUTCOME
                    </span>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 1 Complete Corporate Website Launched</li>
                      <li>• 1 New Digital Brand Presence Established</li>
                      <li>• UK Market Launch Successfully Delivered</li>
                      <li>
                        • 100% of Core Advisory Services Digitally Presented
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://iweadvisory.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0066CC] hover:underline font-semibold"
                    >
                      Visit: iweadvisory.com →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 2 - FJ Global Properties */}
          <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="text-[#14212D33] font-semibold mb-4 uppercase text-sm">
                    <span className="text-lg">02</span> FJ GLOBAL PROPERTIES
                    LIMITED
                  </div>
                  <h3 className="text-3xl md:text-4xl text-black font-bold mb-4">
                    2026 LONDON INVESTMENT OUTREACH CAMPAIGN
                  </h3>

                  <div className="grid grid-cols-2 gap-6 my-6 text-black">
                    <div>
                      <span className="text-sm text-[#14212DB2] block mb-2">
                        MARKET
                      </span>
                      <p className="font-semibold">London, United Kingdom</p>
                    </div>
                    <div>
                      <span className="text-sm text-[#14212DB2] block mb-2">
                        PROJECT
                      </span>
                      <p className="font-semibold">
                        Investor Outreach & Lead Generation
                      </p>
                    </div>
                  </div>
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      FOCUS
                    </span>
                    <p>
                      Audience Targeting • Investor Outreach • Lead Generation •
                      Conversion
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      THE OBJECTIVE
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      FJ Global Properties Limited sought to expand the reach of
                      its 2026 investment programme and connect directly with
                      prospective investors in London. BFG Technologies was
                      engaged to lead the outreach campaign and convert targeted
                      market exposure into identifiable investor opportunities.
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      WHAT WE DELIVERED
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      We developed and executed a targeted investment outreach
                      campaign focused on identifying and engaging qualified
                      investors through strategic digital channels.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="/assets/portfolio-2.png"
                    alt="Project showcase"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 3 - BFG Global Consulting */}
          <section className="py-20 px-6 bg-[#F4F6F8]">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/assets/portfolio-3.png"
                    alt="BFG Global Consulting"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <div className="text-[#14212D33] font-semibold mb-4 uppercase text-sm">
                    <span className="text-lg">03</span> BFG GLOBAL CONSULTING
                    LIMITED
                  </div>
                  <h3 className="text-3xl md:text-4xl text-black font-bold mb-4">
                    2026 MARKET RESEARCH CAMPAIGN
                  </h3>

                  <div className="grid grid-cols-2 gap-6 my-6 text-black">
                    <div>
                      <span className="text-sm text-[#14212DB2] block mb-2">
                        PROJECT
                      </span>
                      <p className="font-semibold">
                        Digital Market Research & Survey Acquisition Campaign
                      </p>
                    </div>
                  </div>
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      FOCUS
                    </span>
                    <p>
                      Audience Acquisition • Survey Conversion • Data Collection
                      • Market Intelligence
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      THE OBJECTIVE
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      BFG Global Consulting Limited required a substantial
                      volume of primary audience data to strengthen market
                      research and support evidence-based business decisions.
                      The challenge was therefore not simply to create awareness
                      around a survey. The campaign needed to convert digital
                      audiences into actual research participants.
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      WHAT WE DELIVERED
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      BFG Technologies led the digital acquisition and
                      conversion campaign, using targeted outreach and campaign
                      messaging to drive audiences towards participation in the
                      market research survey. Campaign performance was centred
                      on completed audience responses and the volume of usable
                      market information generated.
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-3">
                      MEASURABLE OUTCOME
                    </span>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • 1,000+ User Survey Responses / Data Points Generated
                      </li>
                      <li>
                        • 1 Large-Scale Digital Research Campaign Executed
                      </li>
                      <li>• 1 Actionable Market Dataset Created</li>
                    </ul>
                  </div>
                  <hr className="my-4" />
                  <div className="my-6 text-black">
                    <span className="text-sm text-[#14212DB2] block mb-2">
                      RESULT
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      The campaign successfully generated more than 1,000 user
                      survey responses/data points, providing BFG Global
                      Consulting Limited with a substantial pool of primary
                      market information for analysis and more informed
                      decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.section>

        {/* Results Section */}
        <motion.section
          className="py-20 px-6 bg-black text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-[#FF6B35] text-sm font-semibold mb-4 uppercase tracking-wider">
              THE OUTCOME
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              RESULTS ONLY <br /> WHEN THEY ARE VERIFIED.
              {/* <span className="text-[#FF6B35]">RESULTS.</span> */}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              Every project is built on strategy, delivered with excellence, and
              measured by what matters most to your business.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="border-t p-4">
                <div className="">OUTCOME METRIC</div>
                <div className="text-3xl font-bold my-4">
                  [INSERT CONFIRMED RESULT]
                </div>
              </div>
              <div className="border-t p-4">
                <div className="">OUTCOME METRIC</div>

                <div className="text-3xl font-bold my-4">
                  [INSERT CONFIRMED RESULT]
                </div>
              </div>
              <div className="border-t p-4">
                <div className="">OUTCOME METRIC</div>

                <div className="text-3xl font-bold my-4">
                  [INSERT CONFIRMED RESULT]
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Work Section */}
        <motion.section
          className="py-20 px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-7xl text-black mx-auto">
            <div className="text-[#0066CC] text-sm font-semibold mb-4 uppercase tracking-wider">
              CLIENT STORIES
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              THE WORK IS ONLY PART OF THE{" "}
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-16">
              STORY.
            </h2>

            <p className="text-gray-600 my-3">
              Build the strategic foundation and visibility needed to reach the
              right audience and create demand.
            </p>
            <div className="space-y-6 divide-y divide-gray-200">
              <div className="flex justify-between bg-white p-8">
                {" "}
                <div className="flex gap-8">
                  <div className="text-[#FF6B35] text-2xl font-bold mb-4">
                    01
                  </div>
                  <h3 className="text-uppercase font-bold mb-3">
                    [Approved testimonial to be added]
                  </h3>
                </div>
                <div>
                  <p className="text-black">[Client name]</p>
                  <p className="text-gray-600">
                    Build an active presence and meaningful connections.
                  </p>
                </div>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(20,33,45,0.6980392156862745)"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </Link>
              </div>

              <div className="flex justify-between bg-white p-8">
                {" "}
                <div className="flex gap-8">
                  <div className="text-[#FF6B35] text-2xl font-bold mb-4">
                    02
                  </div>
                  <h3 className="text-uppercase font-bold mb-3">
                    [Approved testimonial to be added]
                  </h3>
                </div>
                <div>
                  <p className="text-black">[Client name]</p>
                  <p className="text-gray-600">
                    Build an active presence and meaningful connections.
                  </p>
                </div>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(20,33,45,0.6980392156862745)"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </Link>
              </div>

              <div className="flex justify-between bg-white p-8">
                {" "}
                <div className="flex gap-8">
                  <div className="text-[#FF6B35] text-2xl font-bold mb-4">
                    03
                  </div>
                  <h3 className="text-uppercase font-bold mb-3">
                    [Approved testimonial to be added]
                  </h3>
                </div>
                <div>
                  <p className="text-black">[Client name]</p>
                  <p className="text-gray-600">
                    Build an active presence and meaningful connections.
                  </p>
                </div>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(20,33,45,0.6980392156862745)"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </Link>
              </div>

              <div className="flex justify-between bg-white p-8">
                {" "}
                <div className="flex gap-8">
                  <div className="text-[#FF6B35] text-2xl font-bold mb-4">
                    04
                  </div>
                  <h3 className="text-uppercase font-bold mb-3">
                    [Approved testimonial to be added]
                  </h3>
                </div>
                <div>
                  <p className="text-black">[Client name]</p>
                  <p className="text-gray-600">
                    Build an active presence and meaningful connections.
                  </p>
                </div>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(20,33,45,0.6980392156862745)"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
