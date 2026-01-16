import { Rocket } from 'lucide-react';
import ctaIllustration from "../../assets/cta-illustration.webp";

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 bg-purple-100 rounded-full px-4 py-2">
          <Rocket className="size-4" />
          <span>Craft your Resume</span>
        </div>
      </div>

      <div id="cta" className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 md:p-14 shadow-sm flex items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Ready to craft your{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                perfect resume
              </span>
              ?
            </h2>

            <p className="text-slate-600 mt-3">
              Build a clean, ATS-friendly resume that helps you stand out and land
              interviews faster.
            </p>

            <div className="mt-6">
              <button className="inline-flex items-center justify-center px-10 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition">
                Get Started
              </button>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <img
              src={ctaIllustration}
              alt="Resume illustration"
              className="w-48 lg:w-56 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}