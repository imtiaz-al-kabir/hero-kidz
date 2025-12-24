import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-neutral-content/10 pb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo />
            {/* <h2 className="text-2xl font-bold text-white tracking-tight">
              Kidz Zone.
            </h2> */}
            <p className="text-neutral-content/60 leading-relaxed text-sm">
              Premium quality for your little ones. We believe in comfort,
              style, and sustainability for the future generation.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-neutral-content/60 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-content/60 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-content/60 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-content/60 hover:text-white transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-neutral-content/60">
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="hover:text-primary transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/best-sellers"
                  className="hover:text-primary transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/sale"
                  className="hover:text-primary transition-colors"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-neutral-content/60">
              <li>
                <Link
                  href="/track-order"
                  className="hover:text-primary transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-primary transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-neutral-content/60">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0" />
                <span>
                  123 Kids Street, Dhaka,
                  <br />
                  Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0" />
                <span>hello@kidzzone.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-content/40">
          <p>
            &copy; {new Date().getFullYear()} Kidz Zone. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
