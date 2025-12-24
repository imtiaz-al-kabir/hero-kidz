"use client";

import Image from "next/image";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  decreaseitemDB,
  deleteCart,
  increaseitemDB,
} from "../../actions/server/cart";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../../provider/CartProvider";

const CartItem = ({ item, removeItem, updateQuantity }) => {
  const { image, title, price, quantity, _id } = item;
  const { refreshCart } = useCart();
  const [loading, setLoading] = useState(false);
  const handleDeleteCart = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await deleteCart(_id);
      removeItem(_id);
      refreshCart();
      Swal.fire("Deleted!", "Item has been removed.", "success");
    }
  };

  const onIncrease = async () => {
    setLoading(true);
    const result = await increaseitemDB(_id, quantity);
    if (result.success) {
      updateQuantity(_id, quantity + 1);
      refreshCart();
    } else {
      Swal.fire("Error", "Could not increase quantity", "error");
    }
    setLoading(false);
  };

  const onDecrease = async () => {
    setLoading(true);
    const result = await decreaseitemDB(_id, quantity);

    if (result.success) {
      updateQuantity(_id, quantity - 1);
      refreshCart();
    } else {
      Swal.fire("Error", "Could not decrease quantity", "error");
    }
    setLoading(false);
  };
  const itemTotal = price * quantity;

  return (
    <div className="bg-gradient-to-br from-white to-base-50 rounded-2xl p-5 shadow-premium border border-gray-100 hover:shadow-premium-lg transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Image */}
        <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-base-200 to-base-100 flex-shrink-0 border-2 border-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Info & Actions */}
        <div className="flex flex-col sm:flex-row flex-1 gap-4">
          {/* Product Info */}
          <div className="flex-1">
            <Link href={`/products/${_id}`}>
              <h2 className="font-black text-lg text-gray-900 line-clamp-2 mb-2 hover:text-primary transition-colors duration-300">
                {title}
              </h2>
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-black text-gray-900">৳{price}</span>
              <span className="text-sm text-gray-500">per item</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">
              Total: <span className="text-lg font-black text-primary">৳{itemTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Quantity Control */}
            <div className="flex items-center gap-3 bg-base-200 rounded-xl p-2">
              <button
                onClick={onDecrease}
                className="btn btn-sm btn-ghost rounded-lg w-10 h-10 p-0 hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50"
                disabled={quantity <= 1 || loading}
              >
                <FaMinus size={12} />
              </button>

              <span className="font-black text-lg text-gray-900 min-w-[2rem] text-center">{quantity}</span>

              <button
                disabled={quantity > 10 || loading}
                onClick={onIncrease}
                className="btn btn-sm btn-ghost rounded-lg w-10 h-10 p-0 hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                <FaPlus size={12} />
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={handleDeleteCart}
              className="btn btn-sm btn-error btn-outline rounded-xl font-bold border-2 hover:bg-error hover:text-white transition-all duration-300 hover:scale-105"
            >
              <FaTrash size={14} />
              <span className="hidden sm:inline">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
