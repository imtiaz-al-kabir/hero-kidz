export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white gap-4">
      {/* Professional Spinner */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Minimal Status Text */}
      <p className="text-gray-400 text-sm font-medium tracking-wide animate-pulse">
        Loading...
      </p>
    </div>
  );
}
