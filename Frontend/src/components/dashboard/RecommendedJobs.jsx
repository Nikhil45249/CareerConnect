import React from "react";
import {
  MapPin,
  BriefcaseBusiness,
  Bookmark,
  ArrowRight,
} from "lucide-react";

const jobs = [
  {
    company: "Google",
    role: "Frontend Developer",
    location: "Bangalore",
    type: "Full Time",
    salary: "₹12 - 18 LPA",
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    location: "Hyderabad",
    type: "Full Time",
    salary: "₹15 - 22 LPA",
  },
  {
    company: "Amazon",
    role: "Backend Developer",
    location: "Bangalore",
    type: "Full Time",
    salary: "₹14 - 20 LPA",
  },
];

const RecommendedJobs = () => {
  return (
    <section className="mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Recommended Jobs
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Jobs matching your skills and interests
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-sm font-semibold text-[#10B981] hover:text-emerald-600 transition"
        >
          View All
          <ArrowRight size={16} />
        </button>

      </div>


      {/* Jobs */}
      <div className="space-y-4">

        {jobs.map((job) => (

          <div
            key={`${job.company}-${job.role}`}
            className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
          >

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

              {/* Job Information */}
              <div className="flex items-start gap-4">

                {/* Company Logo Placeholder */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <BriefcaseBusiness
                    size={22}
                    className="text-[#10B981]"
                  />
                </div>

                <div>

                  <h3 className="font-bold text-gray-900">
                    {job.role}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    {job.company}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">

                    <span className="flex items-center gap-1">
                      <MapPin size={15} />
                      {job.location}
                    </span>

                    <span className="flex items-center gap-1">
                      <BriefcaseBusiness size={15} />
                      {job.type}
                    </span>

                    <span className="font-semibold text-[#10B981]">
                      {job.salary}
                    </span>

                  </div>

                </div>

              </div>


              {/* Actions */}
              <div className="flex items-center gap-3">

                <button
                  type="button"
                  className="p-2.5 rounded-lg border border-gray-200 text-gray-500 hover:text-[#10B981] hover:border-emerald-200 transition"
                >
                  <Bookmark size={19} />
                </button>

                <button
                  type="button"
                  className="bg-[#10B981] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition active:scale-95"
                >
                  Apply Now
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RecommendedJobs;