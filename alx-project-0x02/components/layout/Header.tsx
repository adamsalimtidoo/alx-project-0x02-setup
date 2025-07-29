import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <link href="/home" className="hover:text-white-500">Home</link>
        <link href="/about" className="hover:text-white-500">About</link>
      </nav>
    </header>
  );
};

export default Header;
