"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleRTL = () => {
    setIsRTL(!isRTL);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
    document.body.dir = isRTL ? "rtl" : "ltr";
  }, [isDarkMode, isRTL]);

  const cards = [
    {
      id: 1,
      title: "Feature 1",
      text: "Explore our amazing features.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Feature 2",
      text: "Discover new possibilities.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Feature 3",
      text: "Join our community today.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Feature 4",
      text: "Innovate with us.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop",
    },
    {
      id: 5,
      title: "Feature 5",
      text: "Build the future.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop",
    },
    {
      id: 6,
      title: "Feature 6",
      text: "Start your journey.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div
      className={`min-h-screen p-5 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Head>
        <title>Responsive UI Showcase</title>
        <meta
          name="description"
          content="A responsive UI page with hero, cards, theme toggle, and RTL support"
        />
      </Head>

      {/* Theme and RTL Toggles */}
      <div className="fixed top-5 right-5 flex gap-2 z-50">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button
          onClick={toggleRTL}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {isRTL ? "LTR" : "RTL"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center py-16 mb-10">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome to Our Platform
        </h1>
        <p
          className={`text-lg md:text-xl mb-6 opacity-80 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Discover a world of possibilities with our innovative solutions.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </section>

      {/* Card Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-lg shadow-md p-5 text-center hover:-translate-y-1 transition-transform ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {card.title}
            </h2>
            <p
              className={`mb-4 opacity-70 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {card.text}
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
