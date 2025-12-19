"use client";

import { FaSpinner, FaRocket, FaStar } from "react-icons/fa";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 px-4">
      
      {/* Spinning Main Icon */}
      <FaSpinner className="text-6xl text-primary animate-spin mb-6" />

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 drop-shadow-lg">
        Loading...
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center mb-8 max-w-md">
        Please wait a moment while we fetch your content.
      </p>

      {/* Decorative Animated Icons */}
      <div className="flex gap-6">
        <FaRocket className="text-yellow-400 text-4xl animate-bounce-slow" />
        <FaStar className="text-pink-400 text-4xl animate-pulse" />
        <FaRocket className="text-green-400 text-4xl animate-bounce-slow delay-500" />
      </div>
    </div>
  );
};

export default LoadingPage;
