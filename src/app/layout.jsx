import localFont from "next/font/local";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import "./globals.css";
const poppins = {
  weight: ["100", "200", "400", "500", "600", "800"],
};

export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
});

export const metadata = {
  title: {
    default: "Hero Kidz | Best Online Kids Store",
    template: "%s | Hero Kidz",
  },
  description:
    "Shop the best toys, clothing, and accessories for kids at Hero Kidz. Premium quality, fast delivery across Bangladesh.",
  keywords: ["kids store", "toys", "baby clothes", "online shopping bd", "hero kidz"],
  openGraph: {
    title: "Hero Kidz | Best Online Kids Store",
    description:
      "Shop the best toys, clothing, and accessories for kids at Hero Kidz. Premium quality, fast delivery across Bangladesh.",
    url: "https://herokidz.com",
    siteName: "Hero Kidz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Best Online Kids Store",
    description:
      "Shop the best toys, clothing, and accessories for kids at Hero Kidz. Premium quality, fast delivery across Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>

        <main className="py-2 w-full md:w-11/12 mx-auto min-h-[calc(100vh-303px)]">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
