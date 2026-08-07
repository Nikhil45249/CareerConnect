import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [role, setRole] = useState("student");

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      {/* Card */}

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo */}

        <div className="text-center">

          <h1 className="text-3xl font-bold">
            Career
            <span className="text-[#10B981]">
              Connect
            </span>
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account
          </p>

        </div>

        {/* Tabs */}

        <div className="flex mt-8 border-b">

          <button
          type="button"
            onClick={() => setRole("student")}
            className={`flex-1 py-3 font-semibold transition ${role === "student"
                ? "text-[#10B981] border-b-2 border-[#10B981]"
                : "text-gray-500"
              }`}
          >
            Student
          </button>

          <button
          type="button"
            onClick={() => setRole("recruiter")}
            className={`flex-1 py-3 font-semibold transition ${role === "recruiter"
                ? "text-[#10B981] border-b-2 border-[#10B981]"
                : "text-gray-500"
              }`}
          >
            Recruiter
          </button>

        </div>

        {/* Form */}

        <form className="mt-6 space-y-5">

          {
            role === "student" ? (

              <>
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name" required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email" required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password" required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm your password" required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

              </>

            ) : (

              <>
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter company name" required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

                {/* Recruiter Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Recruiter Name
                  </label>

                  <input
                    type="text" required
                    placeholder="Enter recruiter name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

                {/* Official Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Official Email
                  </label>

                  <input
                    type="email" required
                    placeholder="Enter official email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>

                  <input
                    type="password" required
                    placeholder="Enter password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirm Password
                  </label>

                  <input
                    type="password" required
                    placeholder="Confirm password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

              </>

            )
          }

          {/* Register Button */}

          <button
            type="submit"
            className="w-full bg-[#10B981] hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition active:scale-95"
          >
            Register
          </button>

        </form>

        {/* Login */}

        <p className="text-center mt-6 text-gray-600">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-[#10B981] font-semibold hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Register;