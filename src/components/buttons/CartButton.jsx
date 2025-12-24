"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import { useCart } from "../../provider/CartProvider";
import { handleCart } from "../../actions/server/cart";

const CartButton = ({ product }) => {
  const router = useRouter();
  const path = usePathname();
  const session = useSession();
  const { refreshCart } = useCart();
  const [loading, setLoading] = useState(false);
  const isLogin = session?.status == "authenticated";
  const add2Cart = async () => {
    if (isLogin) {
      setLoading(true);
      const result = await handleCart(product._id);

      if (result.success) {
        refreshCart();
        Swal.fire({
          title: "Added to Cart!",
          text: `${product?.title} has been added to your cart.`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
      setLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setLoading(false);
    }
  };
  return (
    <button
      disabled={session?.status == "loading" || loading}
      onClick={add2Cart}
      className="btn btn-primary btn-sm h-12 rounded-xl normal-case font-bold text-sm gap-2 px-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
    >
      <FaShoppingCart size={16} /> Add to Cart
    </button>
  );
};

export default CartButton;
