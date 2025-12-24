import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  const { _id, title, image, price, ratings, discount } = product;

  const finalPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden p-4">
        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-20 shadow-sm">
            -{discount}%
          </span>
        )}

        {/* Product Image */}
        <Link href={`/products/${_id}`} className="block w-full h-full relative z-10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>

      {/* Info Container */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Title & Rating */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <FaStar className="text-amber-400 text-xs" />
            <span className="text-xs text-gray-500 font-medium">{ratings}</span>
          </div>

          <Link href={`/products/${_id}`} className="group-hover:text-primary transition-colors">
            <h3 className="text-base font-semibold text-gray-800 leading-snug line-clamp-2">
              {title}
            </h3>
          </Link>
        </div>

        {/* Price & Action */}
        <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">৳{finalPrice}</span>
            {discount > 0 && (
              <span className="text-xs text-gray-400 line-through font-medium">৳{price}</span>
            )}
          </div>

          {/* Action Button */}
          <div className="transform md:translate-x-2 md:opacity-80 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-200">
            <CartButton product={{ ...product, _id: _id.toString() }} minimal={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
