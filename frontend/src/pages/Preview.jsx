import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import ResumePreview from '../components/ResumePreview';
import { ArrowLeft } from 'lucide-react';
import notFound from '../assets/not_found.jpg';
import api from '../configs/api';

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
  </div>
);

const Preview = () => {
  const { resumeId } = useParams();

  const [isLoading, setIsLoading] = React.useState(true);
  const [resumeData, setResumeData] = React.useState(null);

  const loadResume = async () => {
    try {
      const {data} = await api.get('/api/resumes/public/' + resumeId);
      setResumeData(data.resume);
     
    } catch (error) {
      console.log(error.message);
    }
    finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadResume();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return resumeData ? (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <ResumePreview 
          data={resumeData} 
          template={resumeData.template} 
          accentColor={resumeData.accent_color}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <p className="text-2xl font-semibold text-red-700 mb-4"> 404 - Not Found</p>
      <p className="text-center text-gray-600 mb-6">
        The resume you are looking for does not exist or has been deleted.
      </p>
      <img 
        src={notFound} 
        alt="not found" 
        className="w-100 h-100 object-contain mb-6"
      />
      <Link 
        to="/" 
        className="px-6 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-sm transition flex items-center gap-2"
      >
        <ArrowLeft className="size-4" />
        Go to Homepage
      </Link>
    </div>
  );
};

export default Preview;