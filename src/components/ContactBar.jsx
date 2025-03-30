import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactBar() {
  return (
    <div className="bg-black text-white px-4 py-2 flex justify-between items-center text-xs sm:text-sm">
      <div className="sm:inline">
        {/* Conditional rendering for small screens */}
        <span className="hidden sm:inline">Are you ready to grow up your career?</span>
        <Link
          to="/contact-us"
          className={`rounded px-2 py-0.5 ml-2 text-xs transition-colors ${
            window.innerWidth < 480 ? "bg-white text-black" : "border border-white hover:bg-white hover:text-black"
          }`}
        >
          Contact us
        </Link>
      </div>

      {/* Social media links and Visit Us section */}
      <div
        className={`flex items-center gap-2 w-auto sm:w-auto ${
          window.innerWidth < 480 ? "justify-end" : "sm:ml-auto sm:justify-end"
        }`}
      >
        <span className="mr-2 hidden sm:inline">Visit Us:</span>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Facebook size={16} />
          <span className="sr-only">Facebook</span>
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Instagram size={16} />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Linkedin size={16} />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}