import BFGLogo from "../../public/assets/BFG-logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
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
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/our-story"
              className="text-gray-600 hover:text-gray-900"
            >
              Our Story
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-600 hover:text-gray-900"
            >
              Portfolio
            </Link>
          </nav>
          <Link href="/contact">
            <button className="px-2 py-2 rounded-md border-2 border-[#FF6B35] text-black font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
