"use client";

import Link from "next/link";
import { FaExclamationCircle, FaHome, FaRocket } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 px-4">
      {/* Floating Icon */}
      <div className="relative mb-6">
        <FaExclamationCircle className="text-9xl text-red-500 animate-bounce" />
        <FaRocket className="absolute -top-6 -right-12 text-yellow-400 text-4xl animate-spin-slow" />
      </div>

      {/* Heading */}
      <h1 className="text-7xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-md">
        Oops! You seem to have taken a wrong turn. This page doesn’t exist. 
        But don’t worry, we’ll get you back on track!
      </p>

      {/* Home Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-full font-bold flex items-center gap-3 hover:bg-primary/90 transition-transform transform hover:scale-105 shadow-lg shadow-primary/30"
      >
        <FaHome className="text-xl" />
        Go Back Home
      </Link>

      {/* Optional Extra Decoration */}
      <div className="absolute top-10 left-10 text-yellow-300 text-3xl animate-bounce-slow">
        💫
      </div>
      <div className="absolute bottom-10 right-10 text-pink-300 text-3xl animate-bounce-slow">
        ✨
      </div>
    </div>
  );
};

export default Error404;
