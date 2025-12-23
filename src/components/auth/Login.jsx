"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import SocialButton from "./SocialButton";
const Login = () => {
  const router = useRouter();
  const params=useSearchParams()
  const callbackUrl=params.get("callbackUrl")||"/"
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (!result.ok) {
      alert("email password dont match");
    } else {
      alert("welcome ");
      router.push(callbackUrl);
    }
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaEnvelope />
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="email@example.com"
                />
              </label>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaLock />
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="••••••••"
                />
              </label>
            </div>

            <button className="btn btn-primary w-full">Login</button>
          </form>

          <div className="divider">OR</div>

          {/* Google Login */}
          <SocialButton />

          <p className="text-center text-sm mt-4">
            Don’t have an account?
            <Link href="/register" className="ml-1 text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
