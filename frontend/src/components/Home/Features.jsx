import { Zap } from 'lucide-react';


const Features = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      title: "AI Enhancement & Background Removal",
      description: "Smart AI content generation with one-click photo background removal",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: "4 ATS-Ready Templates",
      description: "Professional, ATS-optimized templates that impress recruiters",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      icon: (
        <svg
          className="size-6 stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
        </svg>
      ),
      title: "Export & Share Seamlessly",
      description: "Download as PDF or share instantly via direct link",
      gradient: "from-purple-600 to-purple-400"
    }
  ];

  return (
    <div id="features" className="py-20 px-6 md:px-16 lg:px-24 xl:px-40 bg-gradient-to-br from-purple-50 via-pink-50 to-white scroll-mt-12">
      

      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 bg-purple-100 rounded-full px-4 py-2 mb-10">
          <Zap className="size-4" />
          <span>Powerful Features</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Everything you need to
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            stand out
          </span>
        </h2>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Build professional resumes with AI assistance in minutes
        </p>
      </div>

 
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-200/50 hover:border-purple-300 overflow-hidden"
          >
            {/* Animated Gradient Background */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            {/* Icon Container with Glow Effect */}
            <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {feature.icon}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-300`}></div>
            </div>
            
            {/* Title */}
            <h3 className="relative text-xl font-semibold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="relative text-slate-600 leading-relaxed">
              {feature.description}
            </p>

            {/* Corner Accent */}
            <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>

   


      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Features;