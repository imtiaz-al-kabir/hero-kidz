import Image from "next/image";
import Link from "next/link";
import { FaEye, FaFire, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { _id, title, image, price, ratings, reviews, sold, discount } =
    product;
  console.log(_id);
  console.log(product);

  const finalPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Badge: Discount */}
      {discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          {discount}% OFF
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1 text-[10px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
            <FaFire size={10} />
            <span>{sold} SOLD</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-gray-600">
            <FaStar className="text-warning" />
            <span>{ratings}</span>
            <span className="text-gray-300 ml-1">({reviews})</span>
          </div>
        </div>

        <h2 className="text-gray-800 font-medium text-sm h-10 line-clamp-2 mb-2 group-hover:text-primary transition-colors cursor-pointer">
          {title}
        </h2>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">৳{finalPrice}</span>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400 font-light">
              ৳{price}
            </span>
          )}
        </div>

        {/* Updated Action Buttons Group */}
        <div className="flex gap-2">
          <Link
            href={`/products/${_id}`}
            className="flex-1 btn btn-outline btn-primary btn-sm rounded-lg flex items-center gap-2 normal-case font-semibold"
          >
            <FaEye />
            View Details
          </Link>

          <button className="flex-1 btn btn-primary btn-sm rounded-lg flex items-center gap-2 normal-case font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
