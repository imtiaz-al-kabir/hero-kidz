"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { postUser } from "../../actions/server/auth";

const Register = () => {
  const router = useRouter();
  const params = useSearchParams();

  const callbackUrl = params.get("callbackUrl") || "/";

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const result = await postUser(form);
    if (result.acknowledged) {
      alert("please login");
      // router.push("/login");
      const result =await signIn("credentials", {
        email: form.email,
        password: form.password,
        callbackUrl: callbackUrl,
      });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaUser />
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                />
              </label>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
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
                  type="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </label>
            </div>

            <button className="btn btn-primary w-full">Register</button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?
            <Link
              href="/auth/login"
              className="ml-1 text-primary font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
