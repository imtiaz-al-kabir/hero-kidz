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
      className={`font-medium ${isActive ? "text-primary" : "text-gray-800"} hover:text-primary transition-colors`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
