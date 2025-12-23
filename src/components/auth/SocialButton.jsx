"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
const SocialButton = () => {
  const params = useSearchParams();
  const handleSignIn = async () => {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "",
    });
    if (result.ok) {
      alert("succes");
    } else {
      alert("sorry");
    }
  };
  return (
    <button
      onClick={handleSignIn}
      className="btn btn-outline w-full flex items-center gap-2"
    >
      <FaGoogle className="text-red-500" />
      Continue with Google
    </button>
  );
};

export default SocialButton;
