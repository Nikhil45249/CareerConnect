import React from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-gradient-to-r from-[#10B981] to-emerald-600 rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl">

        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Build
            <br />
            Your Dream Career?
          </h1>

          <p className="text-emerald-100 mt-5 text-lg max-w-xl">
            Join thousands of students and professionals who have
            already found their dream opportunities through
            CareerConnect.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-4">

          <button className="bg-white text-[#10B981] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition active:scale-95">
            Get Started
          </button>

          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-[#10B981] transition active:scale-95">
            Browse Jobs
            <ArrowRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTA;