import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <div className="relative bg-gray-800 text-white py-16">
        <div className="absolute inset-0 z-0">
          <img src="/contactbanner.png" alt="Team working together" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center">
          <div className="bg-blue-900 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Phone size={28} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-2">+91 9381365400</h2>
          <p className="mb-6">Contact Our Agent For Any kind off Business Help (24/7 Available)</p>
          <Link to="/contact-us" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-2 rounded inline-block">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="bg-white p-4 inline-block mb-4">
                <img src="/gennext.png" alt="GE Next Logo" width={120} height={80} />
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/services/recruitment" className="hover:text-white transition-colors">
                    Recruitment
                  </Link>
                </li>
                <li>
                  <Link to="/services/medical-coding" className="hover:text-white transition-colors">
                    Medical Coding
                  </Link>
                </li>
                <li>
                  <Link to="/services/healthcare-hiring" className="hover:text-white transition-colors">
                    Health Care Hiring
                  </Link>
                </li>
                <li>
                  <Link to="/services/entire-recruitment" className="hover:text-white transition-colors">
                    Entire Recruitment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/about-us" className="hover:text-white space-y-2 text-sm transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
             
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex flex-col space-y-2 text-sm text-gray-400">
                <a href="#" className="flex items-center hover:text-white transition-colors">
                  <Facebook size={16} className="mr-2" /> Facebook
                </a>
                <a href="#" className="flex items-center hover:text-white transition-colors">
                  <Linkedin size={16} className="mr-2" /> LinkedIn
                </a>
                <a href="#" className="flex items-center hover:text-white transition-colors">
                  <Instagram size={16} className="mr-2" /> Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-gray-500">
            Copyright © 2023, GE NEXT RECRUITERS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

