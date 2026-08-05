import React from "react";
import {
  
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Github from "../../assets/images/github.png";
import Linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}

        <div>
          <h1 className="text-3xl font-bold text-white">
            Career<span className="text-[#10B981]">Connect</span>
          </h1>

          <p className="mt-5 leading-7 text-gray-400">
            Connecting talented students with top companies and helping
            recruiters find the perfect candidates.
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-[#10B981] transition"
            >
                <img src={Facebook} alt="" srcset="" />
              {/* <Facebook size={18} /> */}
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-[#10B981] transition"
            >
                <img src={Instagram} alt="" srcset="" />
              {/* <Instagram size={18} /> */}
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-[#10B981] transition"
            >
                <img src={Linkedin} alt="" srcset="" />
              {/* <Linkedin size={18} /> */}
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-[#10B981] transition"
            >
                <img src={Github} alt="" srcset="" />
              {/* <Github size={18} /> */}
            </a>

          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h2 className="text-xl font-semibold text-white">
            Quick Links
          </h2>

          <ul className="space-y-3 mt-5">

            <li>
              <a href="#" className="hover:text-[#10B981] transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#10B981] transition">
                Jobs
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#10B981] transition">
                Companies
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#10B981] transition">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#10B981] transition">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* For Candidates */}

        <div>
          <h2 className="text-xl font-semibold text-white">
            For Candidates
          </h2>

          <ul className="space-y-3 mt-5">

            <li>
              <a href="#" className="hover:text-[#10B981] transition">
                Browse Jobs
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#10B981] transition">
                Internship
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#10B981] transition">
                Career Tips
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#10B981] transition">
                Resume Builder
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}

        <div>

          <h2 className="text-xl font-semibold text-white">
            Contact Us
          </h2>

          <div className="space-y-4 mt-5">

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#10B981]" />
              <span>support@careerconnect.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#10B981]" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#10B981]" />
              <span>Noida, Uttar Pradesh, India</span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} CareerConnect. All rights reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">

            <a href="#" className="hover:text-[#10B981]">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#10B981]">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;