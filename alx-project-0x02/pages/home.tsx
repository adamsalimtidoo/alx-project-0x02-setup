import React from "react";
import Card from "@/components/common/Card";
import Link from "next/link";


const HomePage: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-white-50 gap-10.5">
      <h1 className="text-4xl font-bold text-blue-600">Home</h1>
      <div>
        <Card
        title="Welcome to your home-away-from-home"
        content="Enjoy the luxury of your home at your conviniencee"/>
        <Card
        title="What is your expectation?"
        content="We have luxury awaiting you at all times"/>
        <Card
        title="What is the cost?"
        content="We have properties for all budjets"/>
      </div>
    </main>
  );
};


export default HomePage;
