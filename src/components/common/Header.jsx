// src/components/Header.jsx (adjust path as needed)
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // or wherever ArrowLeft comes from
import React from "react";

const Header = ({ title = "Title" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 mb-6 bg-whitesmoke dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="p-2 rounded-full hover:bg-blue-100/50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300"
      >
        <ArrowLeft size={20} />
      </button>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h1>
    </div>
  );
};

export default Header;
