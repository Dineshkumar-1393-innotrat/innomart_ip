


import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, UserCircle2 } from "lucide-react";
import Notifications from "./Notifications";
import logo from "../assets/logo.png"; // ✅ Import your logo

function Navbar({ title }) {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        
        {/* ✅ Logo only */}
        <div
          className="cursor-pointer flex items-center"
          onClick={() => navigate("/home")}
        >
          <img
            src={logo}
            alt="Innomart Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate("/legal-review-status")}
            className="px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            IP Legal Reviews
          </button>
          <button
            onClick={() => navigate("/services")}
            className="px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            Services
          </button>
        </div>

        {/* Notifications and Profile */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
            </button>
            {showNotifications && <Notifications />}
          </div>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() =>
                setShowProfileDropdown((open) => !open)
              }
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md transition-all hover:bg-blue-700"
              aria-label="Profile"
            >
              <UserCircle2 className="w-5 h-5" />
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg py-1 z-50 border border-gray-100">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setShowProfileDropdown(false);
                  }}
                  className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
