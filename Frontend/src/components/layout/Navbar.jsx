import React from "react";
import {Moon} from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-2xl font-bold">
                    <h1>
                        Career
                        <span className="text-[#10B981]">Connect</span>
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                    <a href="#" className="hover:text-[#10B981] transition">
                        Jobs
                    </a>
                    <a href="#" className="hover:text-[#10B981] transition">
                        Companies
                    </a>
                    <a href="#" className="hover:text-[#10B981] transition">
                        About
                    </a>
                    <a href="#" className="hover:text-[#10B981] transition">
                        Contact
                    </a>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                        <Moon size={20} />
                    </button>

                    <button className="border border-[#10B981] text-[#10B981] px-4 py-2 rounded-lg  
                     transition active:scale-95">
                        Login
                    </button>

                    <button className="bg-[#10B981] text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition active:scale-95">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;