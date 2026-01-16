import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = { name: "Kinshuk Jakhar" };
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 text-slate-800">
        
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
          <span className="hidden sm:inline text-lg font-semibold tracking-wide bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Craft My Resume
          </span>
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden text-slate-600">
            Hi, <span className="font-medium text-slate-800">{user?.name}</span>
          </p>

          <button
            onClick={logoutUser}
            className="px-4 py-1.5 rounded-full text-sm font-medium
            text-purple-600 border border-purple-300
            hover:bg-purple-50 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
