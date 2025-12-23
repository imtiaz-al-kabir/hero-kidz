"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { handleCart } from "../../actions/server/cart";

const CartButton = ({ product }) => {
  const router = useRouter();
  const path = usePathname();
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const isLogin = session?.status == "authenticated";
  const add2Cart = async () => {
    if (isLogin) {
      setLoading(true);
      const result = await handleCart({ product, inc: true });

      if (result.success) {
        alert("Added to Cart", product?.title, "success");
      } else {
        alert("something went wrong");
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
      className="flex-2 btn btn-primary btn-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 normal-case"
    >
      <FaShoppingCart /> Add to Cart
    </button>
  );
};

export default CartButton;
