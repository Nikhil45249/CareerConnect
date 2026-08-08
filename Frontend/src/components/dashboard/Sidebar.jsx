import React from "react";
import {
  LayoutDashboard,
  Search,
  FileText,
  Heart,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 min-h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-100">
        <Link to="/" className="text-2xl font-bold">
          Career<span className="text-[#10B981]">Connect</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-7">

        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-4">
          Menu
        </p>

        <div className="space-y-2">

          <Link
            to="/userdashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 text-[#10B981] font-semibold"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/jobs"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-[#10B981] transition"
          >
            <Search size={20} />
            Find Jobs
          </Link>

          <Link
            to="/student/applied-jobs"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-[#10B981] transition"
          >
            <FileText size={20} />
            Applied Jobs
          </Link>

          <Link
            to="/student/saved-jobs"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-[#10B981] transition"
          >
            <Heart size={20} />
            Saved Jobs
          </Link>

        </div>

        {/* Account */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mt-9 mb-4">
          Account
        </p>

        <div className="space-y-2">

          <Link
            to="/student/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-[#10B981] transition"
          >
            <User size={20} />
            Profile
          </Link>

          <Link
            to="/student/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-[#10B981] transition"
          >
            <Settings size={20} />
            Settings
          </Link>

        </div>

      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">

        <button
          type="button"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-500 transition"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;