import React from "react";
import Header from "@/components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">About Us</h1>
      <p className="text-gray-700 text-lg text-center max-w-xl">
        MyApp is built to empower creators and professionals. Our mission is to
        simplify digital experiences and deliver exceptional value.
      </p>
    </main>
  );
};

export default AboutPage;
