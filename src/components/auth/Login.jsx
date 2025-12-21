"use client";

import Link from "next/link";
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form className="space-y-4 mt-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaEnvelope />
                <input type="email" placeholder="email@example.com" />
              </label>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaLock />
                <input type="password" placeholder="••••••••" />
              </label>
            </div>

            <button className="btn btn-primary w-full">Login</button>
          </form>

          <div className="divider">OR</div>

          {/* Google Login */}
          <button className="btn btn-outline w-full flex items-center gap-2">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

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
