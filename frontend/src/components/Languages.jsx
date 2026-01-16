import { Plus, Languages as LanguagesIcon, XIcon } from "lucide-react";
import React from "react";

const Languages = ({ data = [], onChange }) => {
  const [newLanguage, setNewLanguage] = React.useState({
    name: "",
    proficiency: "Fluent",
  });

  const proficiencyOptions = [
    "Native",
    "Fluent",
    "Professional",
    "Conversational",
    "Basic",
  ];

  const addLanguage = () => {
    const name = newLanguage.name.trim();
    if (name) {
      onChange([...data, { name, proficiency: newLanguage.proficiency }]);
      setNewLanguage({ name: "", proficiency: "Fluent" });
    }
  };

  const removeLanguage = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addLanguage();
    }
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-500">
        Add languages you can speak and your proficiency level.
      </p>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Language (e.g. English, Spanish)"
          className="
            w-full px-3 py-2 text-sm rounded-lg
            border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-purple-400
            focus:border-purple-500
          "
          value={newLanguage.name}
          onChange={(e) =>
            setNewLanguage({ ...newLanguage, name: e.target.value })
          }
          onKeyDown={handleKeyDown}
        />

        <select
          className="
            w-full px-3 py-2 text-sm rounded-lg
            border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-purple-400
            focus:border-purple-500
          "
          value={newLanguage.proficiency}
          onChange={(e) =>
            setNewLanguage({ ...newLanguage, proficiency: e.target.value })
          }
        >
          {proficiencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={addLanguage}
          disabled={!newLanguage.name.trim()}
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
          Add Language
        </button>
      </div>

      {data.length > 0 ? (
        <div className="space-y-2">
          {data.map((lang, index) => (
            <div
              key={index}
              className="
                px-3 py-2 text-sm
                bg-purple-50 text-purple-700
                border border-purple-200
                rounded-lg
                flex items-center justify-between
              "
            >
              <span>
                {lang.name} ({lang.proficiency})
              </span>
              <button
                type="button"
                onClick={() => removeLanguage(index)}
                className="text-purple-500 hover:text-purple-700 transition"
              >
                <XIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 space-y-4">
          <LanguagesIcon className="w-10 h-10 mx-auto text-purple-400" />
          <p className="text-sm font-medium text-gray-600">
            No languages added yet
          </p>
        </div>
      )}
    </div>
  );
};

export default Languages;
