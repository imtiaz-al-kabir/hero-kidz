"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";
import CartItem from "../cards/CardItems";

const Cart = ({ cartItem = [] }) => {
  const [items, setItems] = useState(cartItem);

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const subtotal = totalPrice;
  const shipping = 50; // Fixed shipping cost
  const grandTotal = subtotal + shipping;

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const updateQuantity = (id, q) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: q } : item
      )
    );
  };

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-premium-lg p-16 text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaShoppingBag className="text-6xl text-primary/50" />
          </div>
          <h3 className="text-3xl font-black text-gray-900 mb-4">Your cart is empty</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
          </p>
          <Link
            href="/products"
            className="btn btn-primary btn-lg rounded-full px-10 font-bold shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
          >
            Continue Shopping
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-3xl shadow-premium p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-gray-900">
                Shopping Cart
              </h3>
              <span className="text-gray-600 font-semibold">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
            
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  removeItem={removeItem}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
          </div>

          {/* Continue Shopping Link */}
          <Link
            href="/products"
            className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors duration-300"
          >
            <FaArrowRight className="rotate-180" />
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-white to-base-100 rounded-3xl shadow-premium-lg p-8 border-2 border-gray-100 sticky top-24">
            <h3 className="text-2xl font-black text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
              Order Summary
            </h3>

            {/* Order Details */}
            <div className="space-y-4 mb-6">
              {items.map((item) => {
                const itemTotal = item.price * item.quantity;
                return (
                  <div key={item._id} className="flex justify-between items-start text-sm">
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 line-clamp-1">{item.title}</p>
                      <p className="text-gray-500">Qty: {item.quantity} × ৳{item.price}</p>
                    </div>
                    <p className="font-bold text-gray-900 ml-4">৳{itemTotal.toFixed(2)}</p>
                  </div>
                );
              })}
            </div>

            <div className="border-t-2 border-gray-200 pt-4 space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">Subtotal</span>
                <span className="font-bold">৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">Shipping</span>
                <span className="font-bold">৳{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t-2 border-gray-200">
                <span className="text-xl font-black text-gray-900">Total</span>
                <span className="text-2xl font-black text-gradient-primary">৳{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Link
              href={"/checkout"}
              className="btn btn-primary btn-lg w-full rounded-full font-black shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105 mb-4"
            >
              Proceed to Checkout
              <FaArrowRight className="ml-2" />
            </Link>

            {/* Security Badge */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure checkout guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
