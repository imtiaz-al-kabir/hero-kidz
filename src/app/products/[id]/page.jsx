import Image from "next/image";
import {
  FaChevronRight,
  FaShieldAlt,
  FaStar,
  FaTruck,
  FaWhatsapp,
} from "react-icons/fa";
import { getSingleProduct } from "../../../actions/server/product";
import CartButton from "../../../components/buttons/CartButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | Kidz Zone",
    };
  }

  return {
    title: `${product.title} | Kidz Zone`,
    description:
      product.description?.slice(0, 160) ||
      "Explore this amazing product at Kidz Zone!",
    openGraph: {
      title: product.title,
      description: product.description?.slice(0, 160),
      images: [product.image],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description?.slice(0, 160),
      images: [product.image],
    },
  };
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product) throw new Error("Product not found");
  const discount = product.discount || 0;
  const finalPrice = Math.round(
    product.price - (product.price * discount) / 100
  );

  return (
    <div className="w-full py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
      {/* Premium Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-8 flex items-center gap-2 font-medium">
        <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
        <FaChevronRight size={10} className="text-gray-400" />
        <span className="hover:text-primary cursor-pointer transition-colors">Products</span>
        <FaChevronRight size={10} className="text-gray-400" />
        <span className="text-gray-900 font-bold truncate">
          {product.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-gray-100 bg-gradient-to-br from-base-200 to-base-100 shadow-premium-lg group">
            <Image
              src={product.image}
              alt={product.title}
              height={700}
              width={950}
              className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider border border-primary/30">
              In Stock
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mt-4 leading-tight">
              {product.title}
            </h1>
            <p className="text-xl text-gray-600 font-semibold mt-2">
              {product.bangla}
            </p>
          </div>

          {/* Rating & Stats */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b-2 border-gray-100">
            <div className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-full">
              <FaStar className="text-warning fill-warning" size={18} />
              <span className="font-black text-lg">{product.ratings}</span>
              <span className="text-gray-500 font-medium">({product.reviews} reviews)</span>
            </div>
            <div className="h-6 w-[1px] bg-gray-300"></div>
            <span className="text-gray-700 font-bold text-lg">
              {product.sold} Sold
            </span>
          </div>

          {/* Pricing */}
          <div className="mb-10">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-5xl font-black text-gray-900">
                ৳{finalPrice}
              </span>
              {product.discount > 0 && (
                <>
                  <span className="text-2xl text-gray-400 line-through font-semibold">
                    ৳{product.price}
                  </span>
                  <span className="badge badge-error text-white font-black text-base px-4 py-2 rounded-full">
                    SAVE {product.discount}%
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Key Features (Info) */}
          <div className="mb-10 space-y-3 bg-base-200/50 p-6 rounded-2xl">
            <h3 className="font-black text-gray-900 uppercase text-sm tracking-widest mb-4">
              Key Highlights
            </h3>
            {product?.info?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto mb-8">
            <CartButton product={product} />
            <button className="flex-1 btn btn-outline btn-success btn-lg rounded-xl normal-case font-bold border-2 hover:bg-success hover:text-white transition-all duration-300 hover:scale-105">
              <FaWhatsapp size={18} /> Order via WhatsApp
            </button>
          </div>

          {/* Shipping Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t-2 border-gray-100">
            <div className="flex items-center gap-3 text-sm text-gray-700 bg-base-200/50 p-4 rounded-xl font-semibold">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FaTruck className="text-primary" size={20} />
              </div>
              <span>Fast Delivery in Bangladesh</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700 bg-base-200/50 p-4 rounded-xl font-semibold">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FaShieldAlt className="text-primary" size={20} />
              </div>
              <span>Non-Toxic & Safe Material</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Description & Q&A */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-premium">
          <h3 className="text-3xl font-black mb-8 border-l-4 border-primary pl-4 text-gray-900">
            Product Description
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line font-medium">
            {product.description}
          </div>
        </div>

        <div className="bg-gradient-to-br from-base-200 to-base-100 rounded-3xl p-8 h-fit shadow-premium border border-white/50">
          <h3 className="text-2xl font-black mb-8 text-gray-900">Questions & Answers</h3>
          <div className="space-y-6">
            {product?.qna?.map((item, idx) => (
              <div key={idx} className="space-y-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-black text-gray-900 text-sm">
                  Q: {item.question}
                </p>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  A: {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
