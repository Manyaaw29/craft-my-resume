import { Plus, GraduationCap, Trash2 } from "lucide-react";
import React from "react";

const Education = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      score: "",
      score_type: "percentage", 
    };

    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
     
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Add your educational background
        </p>

        <button
          type="button"
          onClick={addEducation}
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
          Add Education
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No education added yet</p>
          <p className="text-sm text-gray-400">
            Add your educational qualifications to showcase your academic background
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((edu, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-4"
            >
              
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-800">
                  Education #{index + 1}
                </h4>

                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {/* Institution + Degree */}
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  placeholder="Institution / School Name"
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                  "
                />

                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  placeholder="Degree / Board"
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                  "
                />
              </div>

            
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                  placeholder="Field of Study"
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                  "
                />

                <input
                  type="month"
                  value={edu.graduation_date}
                  onChange={(e) =>
                    updateEducation(index, "graduation_date", e.target.value)
                  }
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                  "
                />
              </div>

           
              <div className="grid md:grid-cols-2 gap-3">
                <select
                  value={edu.score_type}
                  onChange={(e) =>
                    updateEducation(index, "score_type", e.target.value)
                  }
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    bg-white
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
                  "
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="cgpa">CGPA</option>
                </select>

                <input
                  type="text"
                  value={edu.score}
                  onChange={(e) =>
                    updateEducation(index, "score", e.target.value)
                  }
                  placeholder={
                    edu.score_type === "cgpa"
                      ? "CGPA (optional)"
                      : "Percentage (optional)"
                  }
                  className="
                    px-3 py-2 text-sm rounded-lg border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-purple-400
                    focus:border-purple-500
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

export default Education;
