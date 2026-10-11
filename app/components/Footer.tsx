import React from "react";

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <div className="px-15 bg-white py-20 ">
      <section className="py-20 px-6 bg-[#0066CC] rounded-2xl text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let&apos;s build something that moves your business forward.
          </h2>
          <button className="bg-[#FF6B35] text-white px-10 py-4 rounded-lg hover:bg-orange-600 text-lg font-semibold">
            Start a Conversation
          </button>
        </div>
      </section>
</div>
      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4">Logo</div>
              <p className="text-gray-400 text-sm">
                Digital marketing agency for African businesses
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    SEO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Content
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Social Media
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 BFG Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
