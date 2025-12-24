"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { createOrder } from "../../actions/server/order";

const Checkout = ({ cartItems = [] }) => {
  const [items] = useState(cartItems);
  const session = useSession();
  console.log(session)
  const router = useRouter();
  // 🔹 Total Price
  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  // 🔹 Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      city: form.city.value,
      address: form.address.value,
    };
    console.log(payload);
    const result = await createOrder(payload);

    if (result.success) {
      alert("order added");
      router.push("/");
    } else {
      alert("something went wrong");
      router.push("/cart");
    }
  };
  if (session.status == "loading") {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="mt-4 text-gray-600 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  const shipping = 50;
  const grandTotal = totalPrice + shipping;

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gradient-primary">Checkout</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* LEFT – FORM */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-premium border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
              Billing Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-gray-700">Full Name</span>
                </label>
                <input
                  name="name"
                  defaultValue={session?.data?.user?.name || ""}
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-base-50"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-gray-700">Email</span>
                </label>
                <input
                  name="email"
                  defaultValue={session?.data?.user?.email || ""}
                  type="email"
                  placeholder="your@email.com"
                  className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-base-50"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-gray-700">Phone Number</span>
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+880 1XXX-XXXXXX"
                  className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-base-50"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-gray-700">City</span>
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder="Your city"
                  className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-base-50"
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text font-bold text-gray-700">Full Address</span>
              </label>
              <textarea
                name="address"
                placeholder="Enter your complete address"
                className="textarea textarea-bordered w-full rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-base-50"
                required
              />
            </div>
          </div>

          {/* RIGHT – ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-base-100 p-8 rounded-3xl shadow-premium-lg border-2 border-gray-100 sticky top-24">
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                {items.map((item) => {
                  const itemTotal = item.price * item.quantity;
                  return (
                    <div key={item._id} className="flex justify-between items-start text-sm pb-4 border-b border-gray-200">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 line-clamp-1">{item.title}</p>
                        <p className="text-gray-500 text-xs mt-1">Qty: {item.quantity} × ৳{item.price}</p>
                      </div>
                      <p className="font-black text-gray-900 ml-4">৳{itemTotal.toFixed(2)}</p>
                    </div>
                  );
                })}
              </div>

              <div className="border-t-2 border-gray-200 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span className="font-semibold">Subtotal</span>
                  <span className="font-bold">৳{totalPrice.toFixed(2)}</span>
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

              <button 
                type="submit" 
                className="btn btn-primary w-full rounded-full font-black shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105 text-lg py-4"
              >
                Place Order
              </button>

              <div className="text-center pt-4 border-t border-gray-200 mt-4">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure checkout guaranteed
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
