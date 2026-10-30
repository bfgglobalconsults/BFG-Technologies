"use client";

import { useState } from "react";
import BFGLogo from "../../public/assets/BFG-logo.png";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "./ContactModal";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-[80px] md:w-[100px] lg:w-[120px] h-auto">
            <Link href="/">
              <Image
                src={BFGLogo}
                className="w-full h-full"
                alt="BFG Logo"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/our-story"
              className={`text-gray-600 hover:text-[#0066CC] transition-colors relative group ${
                pathname === "/our-story" ? "text-[#0066CC] font-semibold" : ""
              }`}
            >
              Our Story
              <span
                className={`absolute left-0 bottom-[-8px] h-0.5 bg-[#0066CC] transition-all ${
                  pathname === "/our-story"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/services"
              className={`text-gray-600 hover:text-[#0066CC] transition-colors relative group ${
                pathname === "/services" || pathname?.startsWith("/services/")
                  ? "text-[#0066CC] font-semibold"
                  : ""
              }`}
            >
              Services
              <span
                className={`absolute left-0 bottom-[-8px] h-0.5 bg-[#0066CC] transition-all ${
                  pathname === "/services" || pathname?.startsWith("/services/")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/portfolio"
              className={`text-gray-600 hover:text-[#0066CC] transition-colors relative group ${
                pathname === "/portfolio" ? "text-[#0066CC] font-semibold" : ""
              }`}
            >
              Portfolio
              <span
                className={`absolute left-0 bottom-[-8px] h-0.5 bg-[#0066CC] transition-all ${
                  pathname === "/portfolio"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </nav>

          {/* Desktop Contact Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex gap-3 px-2 py-2 rounded-md border-2 border-[#FF6B35] text-black hover:bg-[#FF6B35] hover:text-white font-semibold"
          >
            <span>Contact Sales</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[83px] bg-white z-40 px-6 py-8">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-4 border-b border-gray-200 transition-colors ${
                  pathname === "/"
                    ? "text-[#0066CC] font-semibold"
                    : "text-gray-900 hover:text-[#0066CC]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/our-story"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-4 border-b border-gray-200 transition-colors ${
                  pathname === "/our-story"
                    ? "text-[#0066CC] font-semibold"
                    : "text-gray-900 hover:text-[#0066CC]"
                }`}
              >
                Our Story
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-4 border-b border-gray-200 transition-colors ${
                  pathname === "/services" || pathname?.startsWith("/services/")
                    ? "text-[#0066CC] font-semibold"
                    : "text-gray-900 hover:text-[#0066CC]"
                }`}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-4 border-b border-gray-200 transition-colors ${
                  pathname === "/portfolio"
                    ? "text-[#0066CC] font-semibold"
                    : "text-gray-900 hover:text-[#0066CC]"
                }`}
              >
                Portfolio
              </Link>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full mt-8 bg-[#FF6B35] text-white px-8 py-4 rounded-full hover:bg-orange-600 font-semibold text-lg flex items-center justify-center gap-2"
              >
                <span>Contact Sales</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </button>
            </nav>
          </div>
        )}
      </header>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
