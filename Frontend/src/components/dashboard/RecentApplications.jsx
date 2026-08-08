import React from "react";
import { Clock3, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const applications = [
  {
    company: "Google",
    role: "Frontend Developer",
    date: "Aug 5, 2026",
    status: "Under Review",
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    date: "Aug 3, 2026",
    status: "Shortlisted",
  },
  {
    company: "Amazon",
    role: "Backend Developer",
    date: "Jul 30, 2026",
    status: "Applied",
  },
  {
    company: "Adobe",
    role: "UI/UX Designer",
    date: "Jul 28, 2026",
    status: "Rejected",
  },
];

const RecentApplications = () => {
  const getStatusStyle = (status) => {
    if (status === "Shortlisted") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "Rejected") {
      return "bg-red-50 text-red-500";
    }

    if (status === "Under Review") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-gray-100 text-gray-600";
  };

  const getStatusIcon = (status) => {
    if (status === "Shortlisted") {
      return <CheckCircle2 size={15} />;
    }

    if (status === "Rejected") {
      return <XCircle size={15} />;
    }

    return <Clock3 size={15} />;
  };

  return (
    <section className="mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Recent Applications
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Track the status of your recent applications
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

      {/* Applications */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        {/* Desktop Header */}
        <div className="hidden md:grid grid-cols-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          <span>Company</span>
          <span>Position</span>
          <span>Applied Date</span>
          <span>Status</span>
        </div>

        {/* Rows */}
        {applications.map((application, index) => (
          <div
            key={`${application.company}-${application.role}`}
            className={`px-6 py-5 flex flex-col gap-3 md:grid md:grid-cols-4 md:items-center ${
              index !== applications.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >

            {/* Company */}
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {application.company}
              </p>
            </div>

            {/* Position */}
            <div>
              <p className="text-sm text-gray-600">
                {application.role}
              </p>
            </div>

            {/* Date */}
            <div>
              <p className="text-sm text-gray-500">
                {application.date}
              </p>
            </div>

            {/* Status */}
            <div>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                  application.status
                )}`}
              >
                {getStatusIcon(application.status)}
                {application.status}
              </span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default RecentApplications;