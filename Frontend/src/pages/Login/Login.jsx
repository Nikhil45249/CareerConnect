import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Career<span className="text-[#10B981]">Connect</span>
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email" required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password" required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#10B981]"
              />
              Remember Me
            </label>

            <a
              href="#"
              className="text-[#10B981] hover:underline font-medium"
            >
              Forgot Password?
            </a>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#10B981] hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition active:scale-95"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#10B981] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </section>
  );
};

export default Login;