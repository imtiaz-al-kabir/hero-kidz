import Products from "../../components/home/Products";

export const metadata = {
  title: "Kidz Zone | Products",
  description:
    "Explore our exclusive collection of kids' products. From trendy clothing to fun toys, find everything your little hero needs at Kidz Zone.",
  keywords: [
    "kids store",
    "children clothing",
    "toys",
    "kids accessories",
    "hero kidz",
    "online shopping",
  ],
  openGraph: {
    title: "All Products | Hero Kidz",
    description:
      "Explore our exclusive collection of kids' products. From trendy clothing to fun toys, find everything your little hero needs at Hero Kidz.",
    type: "website",
    locale: "en_US",
    siteName: "Hero Kidz",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Products | Hero Kidz",
    description:
      "Explore our exclusive collection of kids' products. From trendy clothing to fun toys, find everything your little hero needs at Hero Kidz.",
  },
};

const ProductPage = () => {
  return (
    <div className="w-full">
      <Products />
    </div>
  );
};

export default ProductPage;
