"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone } from "lucide-react"

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path ? "border-b-2 border-blue-900" : ""
  }

  return (
    <header className="bg-white py-4 px-6 shadow-sm relative">
      <div className="flex justify-between items-center">
        {/* Company Name - Left Section */}
        <div className="font-bold text-lg">
          <Link to="/">GENEXT RECRUITMENT</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        {/* Desktop Navigation - Center Section */}
        <nav className="hidden md:flex items-center justify-center space-x-8">
          <Link to="/" className={`hover:text-blue-800 ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/about-us" className={`hover:text-blue-800 ${isActive("/about-us")}`}>
            About Us
          </Link>
          <div className="relative group">
            <Link to="/services" className={`hover:text-blue-800 flex items-center ${isActive("/services")}`}>
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            {/* Added padding-top to create a buffer zone for hover */}
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md z-10 min-w-[200px] pt-2">
              <div className="py-1">
                <Link to="/services/medical-coding" className="block px-4 py-2 hover:bg-gray-100 text-left">
                  Medical Coding
                </Link>
                <Link to="/services/healthcare-hiring" className="block px-4 py-2 hover:bg-gray-100 text-left">
                  Healthcare Hiring
                </Link>
                <Link to="/services/recruitment" className="block px-4 py-2 hover:bg-gray-100 text-left">
                  Recruitment
                </Link>
                <Link to="/services/entire-recruitment" className="block px-4 py-2 hover:bg-gray-100 text-left">
                  Entire Recruitment
                </Link>
              </div>
            </div>
          </div>
          <Link to="/contact-us" className={`hover:text-blue-800 ${isActive("/contact-us")}`}>
            Contact us
          </Link>
        </nav>

        {/* Desktop Contact Info - Right Section */}
        <div className="hidden md:flex items-center text-blue-900">
          <div className="flex flex-col items-end">
            <div className="text-xs">Call us anytime</div>
            <div className="font-bold">+91 9381365400</div>
          </div>
          <div className="ml-2 bg-blue-900 rounded-full p-2">
            <Phone size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full width dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 top-full z-50 shadow-md">
          <nav className="flex flex-col py-4 px-6">
            <Link
              to="/"
              className={`py-2 hover:text-blue-800 text-left ${isActive("/")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`py-2 hover:text-blue-800 text-left ${isActive("/about-us")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`py-2 hover:text-blue-800 text-left ${isActive("/services")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <div className="pl-4 border-l-2 border-gray-200 ml-2 mt-1">
              <Link
                to="/services/medical-coding"
                className="block py-2 hover:text-blue-800 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Medical Coding
              </Link>
              <Link
                to="/services/healthcare-hiring"
                className="block py-2 hover:text-blue-800 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Healthcare Hiring
              </Link>
              <Link
                to="/services/recruitment"
                className="block py-2 hover:text-blue-800 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Recruitment
              </Link>
              <Link
                to="/services/entire-recruitment"
                className="block py-2 hover:text-blue-800 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Entire Recruitment
              </Link>
            </div>
            <Link
              to="/contact-us"
              className={`py-2 hover:text-blue-800 text-left ${isActive("/contact-us")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>

            {/* Mobile Contact Info */}
            <div className="flex items-center text-blue-900 mt-4 border-t pt-4">
              <div className="bg-blue-900 rounded-full p-2 mr-2">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs">Call us anytime</div>
                <div className="font-bold">+91 9381365400</div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

