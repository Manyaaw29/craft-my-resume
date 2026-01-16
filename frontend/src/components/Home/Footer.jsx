import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-4">
          <img src={logo} alt="Craft My Resume" className="h-11" />
          <span className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Craft My Resume
          </span>
        </div>

        {/* Text */}
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed text-gray-400">
          Professional templates · AI assistance · ATS-friendly resumes
        </p>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm font-normal text-gray-500">
          © 2025 <span className="text-gray-300">Craft My Resume</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}