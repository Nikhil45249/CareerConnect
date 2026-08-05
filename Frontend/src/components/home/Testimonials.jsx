import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer Intern",
    company: "Google",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "CareerConnect made my internship search simple. Within two weeks, I received interview calls from multiple companies.",
  },
  {
    name: "Priya Verma",
    role: "Data Analyst",
    company: "Infosys",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The platform is easy to use and the job recommendations were highly relevant. I landed my first job after graduation.",
  },
  {
    name: "Aman Gupta",
    role: "Backend Developer",
    company: "Amazon",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The application process was smooth and the recruiter dashboard kept me updated throughout my hiring journey.",
  },
  {
  name: "Sneha Patel",
  role: "UI/UX Designer",
  company: "Adobe",
  image: "https://i.pravatar.cc/150?img=47",
  review:
    "I loved the clean interface and easy application process. CareerConnect helped me secure my dream UI/UX internship with Adobe.",
},
{
  name: "Vikram Singh",
  role: "Software Engineer",
  company: "Microsoft",
  image: "https://i.pravatar.cc/150?img=53",
  review:
    "The platform made job searching effortless. The personalized recommendations matched my skills perfectly, leading me to my first software engineering role.",
},
{
  name: "Ananya Roy",
  role: "Machine Learning Engineer",
  company: "TCS",
  image: "https://i.pravatar.cc/150?img=25",
  review:
    "CareerConnect's simple interface and verified job listings saved me a lot of time. I received multiple interview opportunities within days.",
},
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}

      <div className="text-center">
        <h1 className="text-4xl font-bold">
          What Our Users Say
        </h1>

        <p className="text-gray-500 mt-3">
          Trusted by thousands of students and recruiters.
        </p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {testimonials.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
          >

            {/* Stars */}

            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>

            {/* Review */}

            <p className="text-gray-600 mt-5 leading-7">
              "{item.review}"
            </p>

            {/* User */}

            <div className="flex items-center gap-4 mt-8">

              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h2 className="font-semibold">
                  {item.name}
                </h2>

                <p className="text-gray-500 text-sm">
                  {item.role}
                </p>

                <p className="text-[#10B981] text-sm font-medium">
                  {item.company}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;