import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/home" className="hover:text-white-500">Home</Link>
        <Link href="/about" className="hover:text-white-500">About</Link>
        <h1>Hallo</h1>
      </nav>
    </header>
  );
};
["posts"]

export default Header;
