import React from "react";
import { Search, MapPin, Building2, BriefcaseBusiness, User, Target } from "lucide-react";
import HeroImage from "../../assets/images/hero.png"; // Your generated image

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                {/* Left Section */}
                <div className="flex-1">

                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        Find Your{" "}
                        <span className="text-[#10B981]">Dream Job</span>
                        <br />
                        Build Your Future
                    </h1>

                    <p className="text-gray-600 mt-6 text-lg leading-8">
                        Discover thousands of opportunities and kickstart your
                        career today.
                    </p>

                    {/* Search Bar */}

                    <div className="mt-8 bg-white shadow-lg rounded-xl p-2 flex items-center">

                        <div className="flex items-center flex-1 px-3">
                            <Search size={18} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Job title or company"
                                className="outline-none px-3 w-full"
                            />
                        </div>

                        <div className="hidden md:flex items-center border-l px-3">
                            <MapPin size={18} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location"
                                className="outline-none px-2 w-32"
                            />
                        </div>

                        <button className="bg-[#10B981] hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition">
                            Search Jobs
                        </button>

                    </div>

                    {/* Popular Search */}

                    <div className="mt-6 flex flex-wrap gap-3 items-center">
                        <span className="text-gray-500">Popular Search</span>

                        {["React", "Node.js", "Dev", "UI/UX", "Python", "Data Science"].map(
                            (item) => (
                                <span
                                    key={item}
                                    className="bg-emerald-100 text-[#10B981] px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {item}
                                </span>
                            )
                        )}
                    </div>

                    {/* Stats */}

                    {/* Stats */}

                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition">
                            <Building2 className="text-[#10B981]" size={32} />
                            <div>
                                <h2 className="font-bold text-2xl">500+</h2>
                                <p className="text-gray-500 text-sm">Companies</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition">
                            <BriefcaseBusiness className="text-[#10B981]" size={32} />
                            <div>
                                <h2 className="font-bold text-2xl">10K+</h2>
                                <p className="text-gray-500 text-sm">Job Opportunities</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition">
                            <User className="text-[#10B981]" size={32} />
                            <div>
                                <h2 className="font-bold text-2xl">25K+</h2>
                                <p className="text-gray-500 text-sm">Active Users</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition">
                            <Target className="text-[#10B981]" size={32} />
                            <div>
                                <h2 className="font-bold text-2xl">95%</h2>
                                <p className="text-gray-500 text-sm">Success Rate</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Right Section */}

                <div className="flex-1 flex justify-center">
                    <img
                        src={HeroImage}
                        alt="Hero"
                        className="w-full max-w-xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;