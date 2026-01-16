import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen pb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden">
        {/* Professional Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, #8b5cf6 1px, transparent 1px),
              linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Subtle Gradient Overlays */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-100/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-pink-100/40 to-transparent"></div>

        {/* Navbar - Sticky */}
        <nav className="fixed  top-0 z-50 flex items-center  justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm bg-gradient-to-r from-pink-100/60 via-purple-100/60 to-white/60 backdrop-blur-md border-b border-purple-200/40 shadow-sm">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/logo.svg"
                alt="Craft My Resume Logo"
                className="h-11 w-auto transition-transform group-hover:scale-110 duration-300"
              />
            </div>
            <span className="text-lg font-semibold tracking-wide bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Craft My Resume
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
            <a href="#" className="hover:text-purple-600 transition-colors">
              Home
            </a>
            <a
              href="#features"
              className="hover:text-purple-600 transition-colors"
            >
              Features
            </a>
            
            <a href="#cta" className="hover:text-purple-600 transition-colors">
              Get Started
            </a>
          </div>

          <div className="flex gap-2">
            <Link
              to="/app?state=register"
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 active:scale-95 transition-all rounded-full text-white shadow-lg"
            >
              Build my resume
            </Link>

            <Link
              to="/app?state=login"
              className="hidden md:block px-6 py-2 border-2 border-purple-300/60 active:scale-95 hover:bg-purple-50/80 transition-all rounded-full text-slate-700 hover:text-slate-900"
            >
              Sign in
            </Link>
          </div>

          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="/" className="text-white">
            Home
          </a>
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#cta" className="text-white">
            Get Started
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="size-10 bg-purple-600 hover:bg-purple-700 text-white rounded-md flex items-center justify-center"
          >
            X
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative grid lg:grid-cols-2 gap-12 items-center px-6 md:px-16 lg:px-24 xl:px-40 mt-24 lg:mt-28">
          {/* Left Content */}
          <div className="space-y-8">
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-purple-300/30 rounded-full shadow-lg"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-60"></div>
                <svg
                  className="relative w-4 h-4 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ✨ AI-Powered Resume Builder
              </span>
              <span className="px-2 py-0.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full">
                NEW
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Craft
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-slate-900">Resumes</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              Create resumes with expertly designed templates powered by AI
              assistance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                to="/app"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white rounded-full px-9 h-12 flex items-center active:scale-95 transition-all font-medium"
              >
                Start Building
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <button className="flex items-center gap-2 border hover:bg-purple-50 transition rounded-full px-7 h-12 text-slate-700 active:scale-95">
                View Templates
              </button>
            </motion.div>
          </div>

          {/* Right - Resume Mockup */}
          <div className="relative lg:ml-auto mr-20">
            {/* Circular Concentric Pink Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[450px] h-[450px] bg-pink-600/40 rounded-full blur-3xl"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[380px] h-[380px] bg-purple-600/30 rounded-full blur-2xl"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[320px] h-[320px] bg-pink-700/35 rounded-full blur-xl"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[260px] h-[260px] bg-purple-700/25 rounded-full blur-lg"
              ></motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-slate-100"
            >
              {/* Floating Shapes on the card */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ zIndex: 50 }}
                className="absolute top-0 -right-3 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-xl"
              ></motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
                style={{ zIndex: 50 }}
                className="absolute top-1/2 right-2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-pink-400 shadow-xl"
              ></motion.div>

              <motion.div
                animate={{
                  x: [0, 15, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{ zIndex: 50 }}
                className="absolute top-2/3 -left-3 w-5 h-5 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-xl"
              ></motion.div>

              {/* Resume Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
                ></motion.div>
                <div className="flex-1 space-y-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8rem" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="h-3 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full"
                  ></motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6rem" }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="h-2 bg-orange-200 rounded-full"
                  ></motion.div>
                </div>
              </div>

              {/* Resume Content Blocks */}
              <div className="space-y-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="h-2 bg-slate-200 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "83.333333%" }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="h-2 bg-slate-200 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "66.666667%" }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="h-2 bg-slate-200 rounded-full"
                ></motion.div>

                <div className="pt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7rem" }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="h-3 bg-gradient-to-r from-purple-400 to-purple-300 rounded-full mb-3"
                  ></motion.div>
                  <div className="flex gap-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.3 }}
                      whileHover={{ scale: 1.1 }}
                      className="h-2 bg-purple-200 rounded-full w-16"
                    ></motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.4 }}
                      whileHover={{ scale: 1.1 }}
                      className="h-2 bg-pink-200 rounded-full w-20"
                    ></motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 }}
                      whileHover={{ scale: 1.1 }}
                      className="h-2 bg-orange-200 rounded-full w-16"
                    ></motion.div>
                  </div>
                </div>

                <div className="pt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8rem" }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="h-3 bg-gradient-to-r from-pink-400 to-pink-300 rounded-full mb-3"
                  ></motion.div>
                  <div className="space-y-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.6, delay: 1.7 }}
                      className="h-2 bg-slate-200 rounded-full"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "91.666667%" }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="h-2 bg-slate-200 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          * { font-family: 'Poppins', sans-serif; }
        `}
      </style>
    </>
  );
};

export default Hero;