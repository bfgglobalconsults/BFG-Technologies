import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 items-center px-6 py-16 text-[#14212DB2]">
            <span className="w-10 h-1 bg-[#EC550E] mb-4"></span>
            <h1 className="text-md font-semibold mb-4">PORTFOLIO/CLIENTS</h1>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-5xl md:text-6xl text-black font-bold mb-6">
                WORK THAT MOVES BUSINESS{" "}
                <span className="text-[#FF6B35]">FORWARD.</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-gray-600 text-lg max-w-3xl">
                Explore selected projects, campaigns and client stories showing
                how BFG Technology approaches digital growth.
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
      </section>

      {/* Every Project Starts With A Question */}
      <section className="py-20 px-6 bg-gray-50">
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
      </section>

      <section className="py-20 px-6 bg-[#F4F6F8]">
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
        {/* Case Study 1 */}
        <section className="py-20 px-6 bg-[#F4F6F8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/assets/portfolio-1.png"
                  alt="Project showcase"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <div className="text-[#14212D33] font-semibold mb-4 uppercase text-sm">
                  <span className="text-lg">01</span> [CLIENT NAME]
                </div>
                <h3 className="text-4xl md:text-5xl/15 text-black font-bold mb-4">
                  DIGITAL GROWTH CAMPAIGN
                </h3>

                <div className="flex justify-between gap-12 my-6 text-black">
                  <div>
                    <span className="text-sm text-[#14212DB2]">MARKET</span>
                    <p>Financial Services</p>
                  </div>
                  <div>
                    <span className="text-sm text-[#14212DB2]">FOCUS</span>
                    <p>Brand Visibility</p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="my-6 text-black">
                  <div>
                    <span className="text-sm text-[#14212DB2]">OBJECTIVE</span>
                    <p>[Insert approved project objective]</p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="my-6 text-black">
                  <div>
                    <span className="text-sm text-[#14212DB2]">
                      WHAT WE DELIVERED
                    </span>
                    <p>[Insert approved project description]</p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="my-6 text-black">
                  <div>
                    <span className="text-sm text-[#14212DB2]">OUTCOME</span>
                    <p>[Insert approved project outcome]</p>
                  </div>
                </div>
                <Link href="#">
                  <button className="text-[#FF6B35] font-semibold inline-flex items-center gap-2 p-3 border border-[#FF6B35] rounded-lg hover:bg-[#FF6B35] hover:text-white">
                    VIEW CASE STUDY <span>→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 2 */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-[#14212D33] font-semibold mb-4 uppercase text-sm">
                  <span className="text-lg">02</span> [CLIENT NAME]
                </div>
                <h3 className="text-4xl md:text-5xl/15 text-black font-bold mb-4">
                  PERFORMANCE SCALE PROGRAMME
                </h3>

                <div className="flex justify-between gap-12 my-6 text-black">
                  <div>
                    <span className="text-sm text-[#14212DB2]">MARKET</span>
                    <p>Financial Services</p>
                  </div>
                  <div>
                    <span className="text-sm text-[#14212DB2]">FOCUS</span>
                    <p>Brand Visibility</p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="my-6 text-black">
                  <div>
                    <span className="text-sm text-[#14212DB2]">OBJECTIVE</span>
                    <p>[Insert approved project objective]</p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="my-6 text-black">
                  <div>
                    <span className="text-sm text-[#14212DB2]">
                      WHAT WE DELIVERED
                    </span>
                    <p>[Insert approved project description]</p>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="my-6 text-black">
                  <div>
                    <span className="text-sm text-[#14212DB2]">OUTCOME</span>
                    <p>[Insert approved project outcome]</p>
                  </div>
                </div>
                <Link href="#">
                  <button className="text-[#FF6B35] font-semibold inline-flex items-center gap-2 p-3 border border-[#FF6B35] rounded-lg hover:bg-[#FF6B35] hover:text-white">
                    VIEW CASE STUDY <span>→</span>
                  </button>
                </Link>
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
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-black text-white">
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
      </section>

      {/* The Work Section */}
      <section className="py-20 px-6">
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
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">01</div>
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
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">02</div>
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
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">03</div>
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
                <div className="text-[#FF6B35] text-2xl font-bold mb-4">04</div>
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
      </section>
    </div>
  );
}
