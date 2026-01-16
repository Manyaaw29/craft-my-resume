import { Palette, Check } from "lucide-react";
import React from "react";

const ColorPalette = ({ selectedColor, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const colors = [
    { name: "Blue", code: "#3b82f6" },
    { name: "Indigo", code: "#6366f1" },
    { name: "Purple", code: "#a855f7" },
    { name: "Pink", code: "#ec4899" },
    { name: "Rose", code: "#f43f5e" },
    { name: "Orange", code: "#f97316" },
    { name: "Amber", code: "#f59e0b" },
    { name: "Green", code: "#10b981" },
    { name: "Emerald", code: "#059669" },
    { name: "Teal", code: "#14b8a6" },
    { name: "Cyan", code: "#06b6d4" },
    { name: "Slate", code: "#64748b" },
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
        <Palette size={14} />
        <span className="max-sm:hidden">Accent</span>
      </button>

      {isOpen && (
        <div
          className="
            absolute top-full left-0 mt-2
            min-w-[16rem] max-w-[90vw]
            p-3
            z-50
            bg-white rounded-lg
            border border-purple-200
            shadow-lg shadow-purple-100
            origin-top-left
          "
        >
          <div className="grid grid-cols-4 gap-3">
            {colors.map((color) => (
              <div
                key={color.code}
                onClick={() => {
                  onChange(color.code);
                  setIsOpen(false);
                }}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div
                  className={`relative w-12 h-12 rounded-full transition-all
                    ${
                      selectedColor === color.code
                        ? "ring-2 ring-purple-500 ring-offset-2"
                        : "ring-1 ring-gray-200 group-hover:ring-purple-300"
                    }`}
                  style={{ backgroundColor: color.code }}
                >
                  {selectedColor === color.code && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white drop-shadow" />
                    </div>
                  )}
                </div>
                <span className="text-xs text-gray-600 mt-1">
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPalette;
