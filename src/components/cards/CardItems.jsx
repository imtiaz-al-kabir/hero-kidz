"use client";

import Image from "next/image";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  decreaseitemDB,
  deleteCart,
  increaseitemDB,
} from "../../actions/server/cart";
import { useState } from "react";

const CartItem = ({ item, removeItem, updateQuantity }) => {
  const { image, title, price, quantity, _id } = item;
const [loading,setLoading]=useState(false)
  const handleDeleteCart = async () => {
    alert("are you sure,you want to delete?");
    await deleteCart(_id);
    removeItem(_id);
  };

  const onIncrease = async () => {
    setLoading(true)
    const result = await increaseitemDB(_id, quantity);
    alert("success", "quantity increase");
    if (result.success) {
      updateQuantity(_id, quantity + 1);
    }
    setLoading(false)
  };

  const onDecrease = async () => {
    setLoading(true)
    const result = await decreaseitemDB(_id, quantity);

    alert("success", "quantity increase");
    if (result.success) {
      updateQuantity(_id, quantity - 1);
    }
    setLoading(false)
  };
  return (
    <div className="card card-side bg-base-100 shadow-md p-4 gap-4">
      {/* Image */}
      <figure className="w-24 h-24 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </figure>

      {/* Info */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="font-semibold text-lg line-clamp-1">{title}</h2>
          <p className="text-primary font-bold mt-1">৳ {price}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-3">
          {/* Quantity Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={onDecrease}
              className="btn btn-sm btn-outline"
              disabled={quantity <= 1||loading}
            >
              <FaMinus />
            </button>

            <span className="font-semibold">{quantity}</span>

            <button
            disabled={quantity > 10||loading}
            onClick={onIncrease} className="btn btn-sm btn-outline">
              <FaPlus />
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={handleDeleteCart}
            className="btn btn-sm btn-error btn-outline"
          >
            <FaTrash />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
