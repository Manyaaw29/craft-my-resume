import { Plus, Trash2, Folder, Link as LinkIcon } from "lucide-react";
import React from "react";

const Projects = ({ data, onChange }) => {
  const addProject = () => {
    const newProject = {
      name: "",
      description: "",
      link: "",
    };

    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Add your projects</p>

        <button
          type="button"
          onClick={addProject}
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
          Add Project
        </button>
      </div>

      {/* Empty state */}
      {data.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <Folder className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No projects added yet</p>
          <p className="text-sm text-gray-400">
            Click “Add Project” to get started
          </p>
        </div>
      ) : (
        <div className="space-y-4 mt-6">
          {data.map((project, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-4"
            >
              {/* Title + Delete */}
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-800">
                  Project #{index + 1}
                </h4>

                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {/* Project Name */}
              <input
                type="text"
                value={project.name}
                onChange={(e) =>
                  updateProject(index, "name", e.target.value)
                }
                placeholder="Project name"
                className="
                  w-full px-3 py-2 text-sm rounded-lg
                  border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-purple-400
                  focus:border-purple-500
                "
              />

              {/* Description */}
              <textarea
                rows={4}
                value={project.description}
                onChange={(e) =>
                  updateProject(index, "description", e.target.value)
                }
                placeholder="Describe what you built, technologies used, and impact"
                className="
                  w-full px-3 py-2 text-sm rounded-lg
                  border border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-purple-400
                  focus:border-purple-500
                  resize-none
                "
              />

              {/* Link */}
              <div>
                <div
                  className="
                    flex items-center gap-2
                    px-3 py-2 rounded-lg
                    border border-gray-300
                    focus-within:ring-2 focus-within:ring-purple-400
                    focus-within:border-purple-500
                    transition
                  "
                >
                  <LinkIcon size={16} className="text-gray-400 shrink-0" />

                  <input
                    type="url"
                    value={project.link}
                    onChange={(e) =>
                      updateProject(index, "link", e.target.value)
                    }
                    placeholder="Project link (GitHub / Live demo)"
                    className="
                      w-full text-sm
                      bg-transparent border-none outline-none
                      focus:ring-0
                    "
                  />
                </div>

              
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
