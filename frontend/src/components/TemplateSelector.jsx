import { Check, Layout } from "lucide-react";
import React from "react";

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "A traditional, recruiter-friendly layout with clear sections and a professional tone.",
    },
    {
      id: "modern",
      name: "Modern",
      preview:
        "A bold, contemporary design with strong headings and color accents.",
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "A clean, text-focused resume with plenty of white space.",
    },
    {
      id: "minimal-image",
      name: "Minimal with Image",
      preview: "A sleek minimal layout with a profile photo section.",
    },
  ];

  return (
    <div className="relative">
      
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex items-center gap-2 text-sm
          text-purple-700
          bg-gradient-to-r from-pink-100 to-purple-100
          border border-purple-200 hover:border-purple-300
          hover:from-pink-200 hover:to-purple-200
          transition-all px-3 py-2 rounded-lg
        "
      >
        <Layout size={14} />
        <span className="max-sm:hidden">Template</span>
      </button>

    
      {isOpen && (
        <div
          className="
            absolute top-full left-0 mt-2
            min-w-[18rem] max-w-[90vw]
            p-3 space-y-2
            z-50
            bg-white rounded-lg
            border border-purple-200
            shadow-lg shadow-purple-100
            origin-top-left
          "
        >
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsOpen(false);
              }}
              className={`
                relative p-3 rounded-md cursor-pointer transition-all
                ${
                  selectedTemplate === template.id
                    ? "border border-purple-400 bg-gradient-to-r from-pink-50 to-purple-50"
                    : "border border-gray-200 hover:border-purple-300 hover:bg-purple-50/40"
                }
              `}
            >
              <div className="flex justify-between items-start gap-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {template.name}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed italic">
                    {template.preview}
                  </p>
                </div>

                {selectedTemplate === template.id && (
                  <div className="size-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
