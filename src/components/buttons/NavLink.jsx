"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  let isActive = false;
  if (href === "/") {
    isActive = path === "/"; // Home must match exactly
  } else {
    isActive = path.startsWith(href); // Nested paths are fine
  }

  return (
    <Link
      href={href}
      className={`font-bold text-base ${isActive ? "text-primary" : "text-gray-700"} hover:text-primary transition-all duration-300 relative group`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></span>
      )}
      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
    </Link>
  );
};

export default NavLink;
