import React from "react";
import { Mail, Phone, Youtube, Linkedin, Instagram, AtSign } from "lucide-react";
import footerBulbImage from "../assets/footer image_bulb.png";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-gray-100 relative overflow-hidden">
      {/* Decorative Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={footerBulbImage} 
          alt="" 
          className="absolute right-0 bottom-0 w-96 h-96 object-contain" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="InnoMART" className="h-14 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-gray-300 mb-4 max-w-md">
              Confidently upload your invention, design, manuscript, or code to our secure, encrypted portal. Our platform initiates an immediate, in-depth AI analysis to assess its novelty, market potential, and commercial viability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-b-2 border-blue-400 inline-block pb-2">Quick Links</h3>
            <ul className="space-y-2.5">
              {/* <li>
                <a href="/services" className="text-sm hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:w-3 transition-all"></span>
                  Our Services
                </a>
              </li> */}
              <li>
                <a href="/legal-review-status" className="text-sm hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:w-3 transition-all"></span>
                  IP Legal Reviews
                </a>
              </li>
              <li>
                <a href="/expert-consultation" className="text-sm hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:w-3 transition-all"></span>
                  Expert Consultation
                </a>
              </li>
              <li>
                <a href="/profile" className="text-sm hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:w-3 transition-all"></span>
                  My Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-b-2 border-blue-400 inline-block pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-blue-300 flex-shrink-0" />
                <a href="tel:+917749087730" className="text-sm hover:text-blue-300 transition-colors duration-200">
                  +91 7749-087730
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-blue-300 flex-shrink-0" />
                <div className="text-sm">
                  {/* <a href="mailto:Sanjana@innotrat.in" className="hover:text-blue-300 transition-colors duration-200 block">
                    Sanjana@innotrat.in
                  </a> */}
                  <a href="mailto:Sravya@innotrat.in" className="hover:text-blue-300 transition-colors duration-200 block">
                    Sravya@innotrat.in
                  </a>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3 ">Follow Us</h4>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="relative group">
                  <a 
                    href="https://www.instagram.com/innotrat_labs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-pink-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Instagram
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </div>
                
                <div className="relative group">
                  <a 
                    href="https://www.youtube.com/@innotratlabs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    YouTube
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </div>
                
                <div className="relative group">
                  <a 
                    href="https://in.linkedin.com/company/innotrat-labs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    LinkedIn
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </div>
                
                <div className="relative group">
                  <a 
                    href="https://www.threads.com/@innotrat_labs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Threads"
                  >
                    <AtSign className="w-5 h-5 text-white" />
                  </a>
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Threads
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700/50 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} InnoMART. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/PrivacyPolicy" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/TermsAndConditions" className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
