import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 dark:text-blue-400 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 dark:text-white shadow-md transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
          EduPlatform
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/courses" className={navLinkClass}>Courses</NavLink>
          <NavLink to="/quizzes" className={navLinkClass}>Quizzes</NavLink>
          <NavLink to="/progress" className={navLinkClass}>Progress</NavLink>
          <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            title="Toggle theme"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Profile Dropdown */}
          {user && (
            <div className="relative">
              <img
                src={`https://ui-avatars.com/api/?name=${user.name || "User"}&background=0D8ABC&color=fff`}
                alt="avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={() => setAvatarOpen(!avatarOpen)}
              />
              {avatarOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow rounded-md z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700 dark:text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 font-medium">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/courses" className={navLinkClass} onClick={() => setIsOpen(false)}>Courses</NavLink>
          <NavLink to="/quizzes" className={navLinkClass} onClick={() => setIsOpen(false)}>Quizzes</NavLink>
          <NavLink to="/progress" className={navLinkClass} onClick={() => setIsOpen(false)}>Progress</NavLink>
          <NavLink to="/profile" className={navLinkClass} onClick={() => setIsOpen(false)}>Profile</NavLink>

          <button onClick={toggleTheme} className="block text-left text-sm">
            Toggle Theme: {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>

          {user && (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="w-full text-left bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
