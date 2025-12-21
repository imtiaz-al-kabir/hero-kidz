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
      title: "Product Not Found | Hero Kidz",
    };
  }

  return {
    title: `${product.title} | Hero Kidz`,
    description:
      product.description?.slice(0, 160) ||
      "Explore this amazing product at Hero Kidz!",
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
  const finalPrice = Math.round(
    product.price - (product.price * product.discount) / 100
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white min-h-screen">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <span className="hover:text-primary cursor-pointer">Home</span>
        <FaChevronRight size={10} />
        <span className="hover:text-primary cursor-pointer">Learning Toys</span>
        <FaChevronRight size={10} />
        <span className="text-gray-900 font-medium truncate">
          {product.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-inner">
            <Image
              src={product.image}
              alt={product.title}
              height={700}
              width={950}
              className="object-contain  p-4"
             
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              In Stock
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-3">
              {product.title}
            </h1>
            <p className="text-xl text-gray-500 font-medium mt-1">
              {product.bangla}
            </p>
          </div>

          {/* Rating & Stats */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-1">
              <FaStar className="text-warning" />
              <span className="font-bold">{product.ratings}</span>
              <span className="text-gray-400">({product.reviews} reviews)</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <span className="text-gray-600 font-medium">
              {product.sold} Sold
            </span>
          </div>

          {/* Pricing */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-extrabold text-gray-900">
                ৳{finalPrice}
              </span>
              {product.discount > 0 && (
                <span className="text-lg text-gray-400 line-through">
                  ৳{product.price}
                </span>
              )}
              <span className="badge badge-error text-white font-bold">
                SAVE {product.discount}%
              </span>
            </div>
          </div>

          {/* Key Features (Info) */}
          <div className="mb-8 space-y-2">
            <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-3">
              Key Highlights
            </h3>
            {product?.info?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <CartButton product={product} />
            <button className="flex-1 btn btn-outline btn-success btn-lg rounded-xl normal-case">
              <FaWhatsapp /> Order via WhatsApp
            </button>
          </div>

          {/* Shipping Info */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <FaTruck className="text-primary" size={20} />
              <span>Fast Delivery in Bangladesh</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <FaShieldAlt className="text-primary" size={20} />
              <span>Non-Toxic & Safe Material</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Description & Q&A */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
            Product Description
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            {product.description}
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 h-fit">
          <h3 className="text-xl font-bold mb-6">Questions & Answers</h3>
          <div className="space-y-6">
            {product?.qna?.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <p className="font-bold text-gray-900 text-sm">
                  Q: {item.question}
                </p>
                <p className="text-gray-600 text-sm bg-white p-3 rounded-lg border border-gray-200">
                  A: {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
