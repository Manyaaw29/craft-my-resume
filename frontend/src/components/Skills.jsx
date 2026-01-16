import { Plus, Sparkles, XIcon } from "lucide-react";
import React from "react";

const Skills = ({ data = [], onChange }) => {
  const [newSkill, setNewSkill] = React.useState("");

  const addSkill = () => {
    const skill = newSkill.trim();
    if (skill && !data.includes(skill)) {
      onChange([...data, skill]);
      setNewSkill("");
    }
  };

  const removeSkill = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-500">
        Add your technical and soft skills to highlight your strengths.
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a skill (e.g. JavaScript, Leadership)"
          className="
            flex-1 px-3 py-2 text-sm rounded-lg
            border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-purple-400
            focus:border-purple-500
          "
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          type="button"
          onClick={addSkill}
          disabled={!newSkill.trim()}
          className="
            flex items-center gap-2 px-4 py-2 text-sm rounded-lg
            bg-gradient-to-r from-pink-500 to-purple-600
            text-white
            hover:from-pink-600 hover:to-purple-700
            transition
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          <Plus className="size-4" />
          Add
        </button>
      </div>

      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill, index) => (
            <span
              key={index}
              className="
                px-3 py-1 text-sm
                bg-purple-50 text-purple-700
                border border-purple-200
                rounded-full
                flex items-center gap-2
              "
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="text-purple-500 hover:text-purple-700 transition"
              >
                <XIcon className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 space-y-4">
          <Sparkles className="w-10 h-10 mx-auto text-purple-400" />
          <p className="text-sm font-medium text-gray-600">
            No skills added yet
          </p>

        </div>
      )}
      
          <div
            className="
                mt-4
                px-4 py-3
                rounded-lg
                bg-amber-50
                border border-amber-200
                text-sm text-amber-800
              "
                      
          >
           <p className="text-xs"> <strong>Tip:</strong> Aim for 8–12 relevant skills, including both
            technical and soft skills such as programming languages, tools,
            communication, and leadership.
            </p>
          </div>
    </div>
  );
};

export default Skills;
