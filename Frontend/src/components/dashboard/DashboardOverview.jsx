import React from "react";
import {
  BriefcaseBusiness,
  Heart,
  CalendarCheck,
  UserRound,
} from "lucide-react";

const DashboardOverview = () => {
  return (
    <div>

      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Welcome back, Nikhil 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Find your next opportunity and take the next step in your career.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Applied Jobs */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Applied Jobs
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                12
              </h2>

              <p className="text-xs text-emerald-600 mt-2">
                +2 this week
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
              <BriefcaseBusiness
                size={23}
                className="text-[#10B981]"
              />
            </div>

          </div>
        </div>

        {/* Saved Jobs */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Saved Jobs
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                8
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                Jobs saved
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
              <Heart
                size={23}
                className="text-red-400"
              />
            </div>

          </div>
        </div>

        {/* Interviews */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Interviews
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                3
              </h2>

              <p className="text-xs text-emerald-600 mt-2">
                1 upcoming
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <CalendarCheck
                size={23}
                className="text-blue-500"
              />
            </div>

          </div>
        </div>

        {/* Profile Completion */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Profile
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                80%
              </h2>

              <p className="text-xs text-orange-500 mt-2">
                Complete your profile
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <UserRound
                size={23}
                className="text-orange-500"
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default DashboardOverview;