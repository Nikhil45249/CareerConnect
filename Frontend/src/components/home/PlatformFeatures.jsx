import React from "react";
import {
  Search,
  FileText,
  BriefcaseBusiness,
  BarChart3,
  Building2,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: <Search size={30} className="text-[#10B981]" />,
    title: "Job Search",
    description:
      "Search and explore jobs and internships with simple filters.",
  },
  {
    icon: <FileText size={30} className="text-[#10B981]" />,
    title: "Resume Upload",
    description:
      "Upload your resume and apply to jobs directly through the platform.",
  },
  {
    icon: <BriefcaseBusiness size={30} className="text-[#10B981]" />,
    title: "Easy Job Application",
    description:
      "Apply to your desired jobs quickly with a simple application process.",
  },
  {
    icon: <BarChart3 size={30} className="text-[#10B981]" />,
    title: "Application Tracking",
    description:
      "Track the status of every application from your dashboard.",
  },
  {
    icon: <Building2 size={30} className="text-[#10B981]" />,
    title: "Job Management",
    description:
      "Recruiters can create, edit, update, and manage job postings.",
  },
  {
    icon: <UserCheck size={30} className="text-[#10B981]" />,
    title: "Applicant Management",
    description:
      "View applicants and manage applications for every posted job.",
  },
];

const PlatformFeatures = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Platform Features
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Everything you need to find jobs, hire talent, and manage applications.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-7 border border-gray-100"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
              {feature.icon}
            </div>

            <h2 className="mt-6 text-xl font-semibold">
              {feature.title}
            </h2>

            <p className="mt-3 text-gray-500 leading-7">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformFeatures;