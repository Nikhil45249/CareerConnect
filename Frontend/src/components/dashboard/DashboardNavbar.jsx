import React from "react";
import { Search, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <header className="h-20 shrink-0 bg-white border-b border-gray-200 px-6 flex items-center justify-between">

      {/* Search */}
      <div className="w-full max-w-lg">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">

          <Search
            size={20}
            className="text-gray-400 shrink-0"
          />

          <input
            type="text"
            placeholder="Search jobs, companies..."
            className="w-full ml-3 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
          />

        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 ml-6">

        {/* Notification */}
        <button
          type="button"
          className="relative p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Bell
            size={21}
            className="text-gray-600"
          />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <Link
            to="/profile"
            className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition"
          >
            <User
              size={21}
              className="text-[#10B981]"
            />
          </Link>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Nikhil
            </p>

            <p className="text-xs text-gray-500">
              Student
            </p>
          </div>

        </div>

      </div>

    </header>
  );
};

export default DashboardNavbar;