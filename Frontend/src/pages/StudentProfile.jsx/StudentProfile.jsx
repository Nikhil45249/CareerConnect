import React from "react";
import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Code2,
  Pencil,
} from "lucide-react";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";

const StudentProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 min-w-0">

        {/* Navbar */}
        <DashboardNavbar />

        {/* Content */}
        <main className="p-6 lg:p-8 xl:p-10">
          <div className="max-w-7xl mx-auto">

            {/* Page Heading */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#10B981]">
                ACCOUNT
              </p>

              <h1 className="text-3xl font-bold text-gray-900 mt-1">
                My Profile
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your personal information and career profile.
              </p>
            </div>

            {/* Profile Header */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                <div className="flex items-center gap-5">

                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center">
                    <UserRound
                      size={36}
                      className="text-[#10B981]"
                    />
                  </div>

                  {/* User Info */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Nikhil Singh
                    </h2>

                    <p className="text-gray-600 mt-1">
                      Software Developer
                    </p>

                    <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-2">
                      <MapPin size={15} />
                      Greater Noida, India
                    </div>
                  </div>

                </div>

                {/* Edit Button */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold transition active:scale-95"
                >
                  <Pencil size={17} />
                  Edit Profile
                </button>

              </div>

            </div>

            {/* Personal Information */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 mt-6">

              <h2 className="text-xl font-bold text-gray-900">
                Personal Information
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Your basic contact information.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                {/* Full Name */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <UserRound
                      size={18}
                      className="text-[#10B981]"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Full Name
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      Nikhil Singh
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail
                      size={18}
                      className="text-blue-500"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Email
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      nikhil@example.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                    <Phone
                      size={18}
                      className="text-orange-500"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Phone
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                    <MapPin
                      size={18}
                      className="text-purple-500"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Location
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      Greater Noida, India
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Skills & Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

              {/* Skills */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Code2
                      size={20}
                      className="text-[#10B981]"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Skills
                    </h2>

                    <p className="text-sm text-gray-500">
                      Your technical skills
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">

                  {[
                    "C++",
                    "Python",
                    "JavaScript",
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Git",
                    "DSA",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-lg bg-emerald-50 text-[#10B981] text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* Education */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <GraduationCap
                      size={20}
                      className="text-blue-500"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Education
                    </h2>

                    <p className="text-sm text-gray-500">
                      Your academic information
                    </p>
                  </div>
                </div>

                <div className="mt-6">

                  <h3 className="font-bold text-gray-900">
                    B.Tech in Computer Science
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Data Science
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    GL Bajaj Institute of Technology and Management
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    2023 - 2027
                  </p>

                </div>

              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
};

export default StudentProfile;