import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSun, 
  FiMoon, 
  FiMenu, 
  FiX, 
  FiChevronDown, 
  FiLogOut, 
  FiUser,
  FiHome,
  FiBook,
  FiAward,
  FiBarChart2,
  FiSettings,
  FiClock
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAvatarOpen(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Scroll effect for glass morphism
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // Navigation items config
  const navItems = [
    { path: "/", name: "Home", icon: <FiHome className="mr-2" /> },
    { path: "/courses", name: "Courses", icon: <FiBook className="mr-2" /> },
    { path: "/quizzes", name: "Quizzes", icon: <FiAward className="mr-2" /> },
    { path: "/progress", name: "Progress", icon: <FiBarChart2 className="mr-2" /> },
    { path: "/exams", name: "Exams", icon: <FiClock className="mr-2" /> },
    { path: "/results", name: "Results", icon: <FiBarChart2 className="mr-2" /> },
  ];

  // Link styles
  const navLinkClass = ({ isActive }) =>
    `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center px-4 py-3 rounded-lg transition-colors ${
      isActive
        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={`sticky top-0 z-50 border-b ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-gray-200/80 dark:border-gray-800/50"
            : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
        } transition-all duration-300`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <NavLink
                to="/"
                className="flex items-center text-2xl font-bold"
                aria-label="Home"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mr-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg"
                >
                  🎓
                </motion.span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EduPlatform
                </span>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="flex space-x-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={navLinkClass}
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="ml-4 flex items-center space-x-2">
                {/* Theme Toggle */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                >
                  {darkMode ? (
                    <FiSun className="w-5 h-5" />
                  ) : (
                    <FiMoon className="w-5 h-5" />
                  )}
                </motion.button>

                {/* Profile Dropdown */}
                {user ? (
                  <div className="relative ml-2" ref={dropdownRef}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setAvatarOpen(!avatarOpen)}
                      className="flex items-center space-x-1 focus:outline-none"
                      aria-haspopup="true"
                      aria-expanded={avatarOpen}
                      aria-label="User menu"
                    >
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.displayName || "User"
                        )}&background=0D8ABC&color=fff`}
                        alt="User avatar"
                        className="w-8 h-8 rounded-full border-2 border-blue-500 dark:border-blue-400"
                        width={32}
                        height={32}
                      />
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          avatarOpen ? "rotate-180" : ""
                        }`}
                      />
                    </motion.button>

                    <AnimatePresence>
                      {avatarOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-[60] overflow-hidden border border-gray-200 dark:border-gray-700"
                          role="menu"
                        >
                          <div className="py-1">
                            <NavLink
                              to="/profile"
                              className="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              role="menuitem"
                            >
                              <FiUser className="mr-3" />
                              <span>Profile</span>
                            </NavLink>
                            <NavLink
                              to="/settings"
                              className="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              role="menuitem"
                            >
                              <FiSettings className="mr-3" />
                              <span>Settings</span>
                            </NavLink>
                            <button
                              onClick={handleLogout}
                              className="w-full flex items-center px-4 py-3 text-left text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              role="menuitem"
                            >
                              <FiLogOut className="mr-3" />
                              <span>Logout</span>
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="flex space-x-2 ml-2">
                    <NavLink
                      to="/login"
                      className="px-4 py-2 text-sm font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay - Higher z-index than navbar but lower than sidebar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[49] md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Sidebar - Highest z-index */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30, bounce: 0.1 }}
              className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-[60] shadow-2xl"
            >
              <div className="flex flex-col h-full overflow-y-auto">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center">
                    <span className="mr-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg">
                      🎓
                    </span>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      EduPlatform
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label="Close menu"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-2 py-4 space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={mobileNavLinkClass}
                    >
                      {item.icon}
                      {item.name}
                    </NavLink>
                  ))}
                  {user && (
                    <>
                      <NavLink
                        to="/profile"
                        className={mobileNavLinkClass}
                      >
                        <FiUser className="mr-2" />
                        Profile
                      </NavLink>
                      <NavLink
                        to="/settings"
                        className={mobileNavLinkClass}
                      >
                        <FiSettings className="mr-2" />
                        Settings
                      </NavLink>
                    </>
                  )}
                </nav>

                {/* Bottom Actions */}
                <div className="px-2 py-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <span>Theme</span>
                    {darkMode ? (
                      <span className="flex items-center">
                        <FiSun className="mr-2" />
                        Light Mode
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <FiMoon className="mr-2" />
                        Dark Mode
                      </span>
                    )}
                  </motion.button>

                  {user ? (
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={handleLogout}
                      className="w-full flex items-center justify-between px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <span>Logout</span>
                      <FiLogOut />
                    </motion.button>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <NavLink
                        to="/login"
                        className="px-4 py-2 text-center border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/register"
                        className="px-4 py-2 text-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
                      >
                        Register
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;