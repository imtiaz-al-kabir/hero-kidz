"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ product }) => {
  const router = useRouter();
  const path = usePathname();
  const isLogin = true;
  const add2Cart = () => {
    if (isLogin) alert(product._id);

    router.push(`/login?callbackUrl=${path}`);
  };
  return (
    <button
      onClick={add2Cart}
      className="flex-2 btn btn-primary btn-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 normal-case"
    >
      <FaShoppingCart /> Add to Cart
    </button>
  );
};

export default CartButton;
