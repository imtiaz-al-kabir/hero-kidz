"use client";

import { useMemo, useState } from "react";
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

  return (
    <div className="flex">
      <div className="flex-3">
        {items.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      <div className="flex-1 p-4 bg-gray-100 rounded-md">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        {items.map((item) => (
          <div key={item._id} className="mb-3">
            <p><strong>{item.title}</strong></p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)} each</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}

        <div className="mt-4">
          <p className="font-bold">Total Items: {totalItems}</p>
          <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>

        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
