import React from "react";
import {
  UserPlus,
  Search,
  BriefcaseBusiness,
} from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={35} className="text-[#10B981]" />,
    title: "Create Account",
    description:
      "Sign up as a student or recruiter and complete your professional profile.",
  },
  {
    icon: <Search size={35} className="text-[#10B981]" />,
    title: "Find Your Dream Job",
    description:
      "Search thousands of jobs and internships using smart filters.",
  },
  {
    icon: <BriefcaseBusiness size={35} className="text-[#10B981]" />,
    title: "Apply & Get Hired",
    description:
      "Submit applications with one click and start your career journey.",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}

      <div className="text-center">
        <h1 className="text-4xl font-bold">
          How CareerConnect Works
        </h1>

        <p className="text-gray-500 mt-3">
          Get started in just three simple steps.
        </p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
          >

            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
              {step.icon}
            </div>

            <h2 className="mt-6 text-2xl font-semibold">
              {step.title}
            </h2>

            <p className="mt-4 text-gray-500 leading-7">
              {step.description}
            </p>

            <div className="mt-6">
              <span className="bg-[#10B981] text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto font-bold">
                {index + 1}
              </span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default HowItWorks;