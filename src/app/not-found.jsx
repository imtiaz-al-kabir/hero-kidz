import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-9xl font-bold text-gray-100 mb-4">404</h1>

      <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="btn btn-primary rounded-lg px-8 font-medium gap-2 shadow-sm hover:shadow-md transition-all"
      >
        <FaArrowLeft className="text-sm" /> Back to Home
      </Link>
    </div>
  );
}
