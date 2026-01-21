import { Loader2, Sparkles } from "lucide-react";

import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import api from "../configs/api";


const ProfessionalSummary = ({ data, onChange , setResumeData}) => {

  const {token}= useSelector((state) => state.auth);;
  const [isGenerating, setIsGenerating] = useState(false);
  
  const generateSummary = async () => {
    try {
      setIsGenerating(true);
      const prompt = `enhance this professional summary for a resume: ${data}`;
      const response = await api.post(`/api/openai/enhance-professional-summary`, { userContent: prompt }, {
        headers: {
          Authorization: token,
        },  
      });
      setResumeData(prev => ({...prev, professional_summary: response.data.enhancedContent}));
      toast.success("Summary enhanced successfully!");
    
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
    finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="space-y-4">
    
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Add your professional summary here
        </p>

        <button
          type="button"
          className="
            flex items-center gap-2 px-3 py-1 text-sm rounded-md
            bg-gradient-to-r from-pink-100 to-purple-100
            text-purple-700
            hover:from-pink-200 hover:to-purple-200
            transition-colors
            disabled:opacity-50
          "
          disabled={isGenerating}
          onClick={generateSummary}
        >
          {isGenerating ? (<Loader2 className="size-4 animate-spin" />) : (<Sparkles className="size-4" />
          )}
          {isGenerating  ? "Enhancing..." : "AI Enhance" }
      
        </button>
      </div>

    
      <div>
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          placeholder="Write a brief summary about your professional background, key strengths and career goals..."
          className="
            w-full p-3 text-sm
            border border-gray-300 rounded-lg
            outline-none resize-none
            transition
            focus:border-purple-500
            focus:ring-2 focus:ring-purple-400
          "
        />
      </div>

          <div
        className="
          mt-3
          px-4 py-3
          rounded-lg
          bg-amber-50
          border border-amber-200
          text-sm text-amber-800
          max-w-[90%]
          mx-auto
          text-center
        "
      >
 <p className="text-xs"> <strong>Tip:</strong> Keep it concise and focused on your key achievements and
  skills.</p>
</div>

    </div>
  );
};

export default ProfessionalSummary;
