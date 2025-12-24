"use client";
import { useCart } from "../../provider/CartProvider";
import Link from "next/link";
import Logo from "./Logo";
import { FiShoppingCart, FiPhone, FiMail, FiMapPin, FiSearch } from "react-icons/fi";
import AuthButtons from "../buttons/AuthButtons";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full z-50 relative">

      {/* Top Utility Bar - Professional Dark Strip */}
      <div className="bg-neutral text-white py-2 text-[11px] md:text-xs font-medium tracking-wide">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 opacity-90">
            <span className="flex items-center gap-1.5"><FiPhone size={12} /> +880 1234-567890</span>
            <span className="hidden md:flex items-center gap-1.5"><FiMail size={12} /> support@kidzzone.com</span>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <span className="hidden md:inline">Free Shipping on Orders Over ৳2000</span>
            <div className="h-3 w-px bg-white/20 hidden md:block"></div>
            <Link href="/track-order" className="hover:text-primary transition-colors">Track Order</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <div className={`w-full bg-white transition-all duration-300 border-b border-gray-100 ${scrolled ? 'fixed top-0 shadow-md py-2' : 'relative py-4'}`}>
        <div className="navbar w-11/12 mx-auto px-0 min-h-0">

          {/* Logo Section */}
          <div className="navbar-start">
            <div className="dropdown lg:hidden mr-2">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItems.map((item) => (
                  <li key={item.name}><Link href={item.href} className={pathname === item.href ? "text-primary font-bold" : ""}>{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <Logo />
          </div>

          {/* Desktop Nav Links */}
          <div className="navbar-center hidden lg:flex">
            <div className="flex items-center gap-1 bg-gray-50/50 p-1 rounded-full border border-gray-100">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="navbar-end flex items-center gap-2">
            <button className="btn btn-ghost btn-circle btn-sm hidden sm:flex hover:bg-gray-100 text-gray-600">
              <FiSearch size={20} />
            </button>

            <Link href="/cart" className="btn btn-ghost btn-circle btn-sm hover:bg-gray-100 relative text-gray-600">
              <div className="indicator">
                <FiShoppingCart size={20} />
                {cartCount > 0 && <span className="badge badge-error badge-xs indicator-item text-white border-none h-4 w-4 p-0">{cartCount}</span>}
              </div>
            </Link>

            <div className="ml-2">
              <AuthButtons />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
