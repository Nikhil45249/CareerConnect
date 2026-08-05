import React from "react";
import {
  CodeXml,
  Pencil,
  Megaphone,
  ChartColumnIncreasing,
  CircleDollarSign,
  GraduationCap,
} from "lucide-react";

const categories = [
  {
    icon: <CodeXml size={28} className="text-blue-600" />,
    title: "Development",
    jobs: "2,543 Jobs",
  },
  {
    icon: <Pencil size={28} className="text-indigo-600" />,
    title: "Design",
    jobs: "1,234 Jobs",
  },
  {
    icon: <Megaphone size={28} className="text-green-500" />,
    title: "Marketing",
    jobs: "987 Jobs",
  },
  {
    icon: <ChartColumnIncreasing size={28} className="text-emerald-500" />,
    title: "Data Science",
    jobs: "1,876 Jobs",
  },
  {
    icon: <CircleDollarSign size={28} className="text-yellow-500" />,
    title: "Finance",
    jobs: "785 Jobs",
  },
  {
    icon: <GraduationCap size={28} className="text-slate-700" />,
    title: "Internship",
    jobs: "3,421 Jobs",
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}

      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Explore Top Categories
        </h1>

        <p className="text-gray-500 mt-3">
          Find the perfect opportunity in your field
        </p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

        {categories.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center">
              {item.icon}
            </div>

            <h2 className="mt-5 font-semibold text-lg">
              {item.title}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              {item.jobs}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Categories;