import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import NextAuthProvider from "../provider/NextAuthProvider";
import { CartProvider } from "../provider/CartProvider";
import "./globals.css";
import { outfit } from "./fonts";

export const metadata = {
  title: {
    default: "Kidz Zone | Premium Kids Store",
    template: "%s | Kidz Zone",
  },
  description: "Premium quality toys, clothing, and accessories for the modern child.",
  keywords: ["kids store", "premium toys", "kidz zone", "fashion"],
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <CartProvider>
        <html lang="en" data-theme="light">
          <body className={`${outfit.variable} antialiased bg-base-100 text-neutral font-sans overflow-x-hidden`}>
            <Navbar />

            <main className="w-full min-h-[calc(100vh-350px)]">
              {/* Removed the wrapper div here to allow full-width sections (like Hero) 
                  while individual components will handle their own constraining */}
              {children}
            </main>

            <footer className="w-full bg-neutral text-neutral-content">
              <Footer />
            </footer>
          </body>
        </html>
      </CartProvider>
    </NextAuthProvider>
  );
}
