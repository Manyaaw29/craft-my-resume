import { Plus, Briefcase, Trash2, Sparkles, Loader2 } from "lucide-react";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import api from "../configs/api";

const Experience = ({ data, onChange }) => {
  const { token } = useSelector((state) => state.auth);
  const [generatingIndex, setGeneratingIndex] = useState(-1);

  const addExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      description: "",
      is_current: false,
    };

    onChange([...data, newExperience]);
  };

  const removeExperience = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

 const generateJobDescription = async (index) => {
    setGeneratingIndex(index);
    const experience = data[index];
    const prompt = `enhance this job description for a resume: ${experience.description} for the position of ${experience.position} at ${experience.company}`;
    try {
      const response = await api.post(
        `/api/openai/enhance-job-description`,
        { userContent: prompt },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      updateExperience(index, "description", response.data.enhancedContent);
      toast.success("Job description enhanced successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setGeneratingIndex(-1);
    }
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Add your job experience here</p>

        <button
          type="button"
          onClick={addExperience}
          className="
            flex items-center gap-2 px-4 py-2 text-sm rounded-md
            bg-gradient-to-r from-purple-100 to-pink-100
            text-purple-700
            hover:from-purple-200 hover:to-pink-200
            transition
            border border-purple-200
        "
        >
          <Plus className="size-4" />
          Add Experience
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <Briefcase className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No experience added yet</p>
          <p className="text-sm text-gray-400">
            Click “Add Experience” to get started
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((exp, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-4"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-800">
                  Experience #{index + 1}
                </h4>

                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(index, "company", e.target.value)
                  }
                  placeholder="Company Name"
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                  "
                />

                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) =>
                    updateExperience(index, "position", e.target.value)
                  }
                  placeholder="Job Title"
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                  "
                />

                <input
                  type="month"
                  value={exp.start_date}
                  onChange={(e) =>
                    updateExperience(index, "start_date", e.target.value)
                  }
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                  "
                />

                <input
                  type="month"
                  value={exp.end_date}
                  disabled={exp.is_current}
                  onChange={(e) =>
                    updateExperience(index, "end_date", e.target.value)
                  }
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    disabled:bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                  "
                />
              </div>

              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={exp.is_current}
                  onChange={(e) =>
                    updateExperience(index, "is_current", e.target.checked)
                  }
                  className="
                    rounded border-gray-300
                    text-purple-600
                    focus:ring-purple-500
                  "
                />
                I currently work here
              </label>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Job Description
                  </label>

                  <button
                    type="button"
                    onClick={() => generateJobDescription(index)}
                    disabled={
                      generatingIndex === index ||
                      !exp.position ||
                      !exp.company
                    }
                    className="
                      flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full
                      text-purple-600
                      bg-purple-50
                      hover:bg-purple-100
                      transition-colors
                      disabled:opacity-50
                      
                       "
                  >
                    {generatingIndex === index ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <Sparkles className="w-3 h-3" />
                    )}
                  {generatingIndex === index ? "Enhancing..." : "Enhance with AI"}
                  </button>
                </div>

                <textarea
                  rows={4}
                  value={exp.description}
                  onChange={(e) =>
                    updateExperience(index, "description", e.target.value)
                  }
                  placeholder="Describe your responsibilities, achievements, and impact…"
                  className="
                    w-full p-3 text-sm rounded-lg
                    border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                    resize-none
                  "
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
