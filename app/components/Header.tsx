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
            <button className="flex gap-3 px-2 py-2 rounded-md border-2 border-[#FF6B35] text-black hover:bg-[#FF6B35] hover:text-white font-semibold">
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
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
