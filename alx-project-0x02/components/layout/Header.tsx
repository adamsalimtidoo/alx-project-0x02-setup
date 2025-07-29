"use client";

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">MyApp</Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/home" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition">
          About
        </Link>
        <Link href="/posts" className="hover:text-blue-600 transition">
          Posts
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Placeholder (Optional for future expansion) */}
      <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
