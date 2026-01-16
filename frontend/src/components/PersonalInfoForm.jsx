import {
  BriefcaseBusiness,
  Linkedin,
  MailIcon,
  MapPin,
  Phone,
  User,
  Globe,
  Github,
} from "lucide-react";
import React from "react";

const PersonalInfoForm = ({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const fields = [
    {
      key: "full_name",
      label: "Full Name",
      icon: User,
      type: "text",
      required: true,
    },
    {
      key: "email",
      label: "Email Address",
      icon: MailIcon,
      type: "email",
      required: true,
    },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
    { key: "location", label: "Location", icon: MapPin, type: "text" },
    {
      key: "profession",
      label: "Profession",
      icon: BriefcaseBusiness,
      type: "text",
    },
    { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
    { key: "website", label: "Personal Website", icon: Globe, type: "url" },
    { key: "github", label: "GitHub Profile", icon: Github, type: "url" },
  ];

  return (
    <div>
      <p className="text-sm text-slate-500">
        Get started with your personal information
      </p>

      {/* IMAGE UPLOAD */}
      <div className="flex items-center gap-4 mt-4">
        <label className="cursor-pointer">
          {data.image ? (
            <img
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="user"
              className="w-16 h-16 object-cover rounded-full ring-2 ring-purple-300 hover:opacity-80 transition"
            />
          ) : (
            <div className="inline-flex items-center gap-2 text-slate-600 hover:text-purple-600 transition">
              <User className="size-10 p-2.5 rounded-full border border-slate-300" />
              <span className="text-sm">Upload your image</span>
            </div>
          )}

          <input
            type="file"
            accept="image/jpeg,image/png,image/jpg"
            className="hidden"
            onChange={(e) => handleChange("image", e.target.files[0])}
          />
        </label>

        {/* REMOVE BG TOGGLE */}
        {typeof data.image === "object" && data.image && (
          <div className="flex flex-col gap-1">
            <p className="text-sm text-slate-600">Remove Background</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={removeBackground}
                onChange={() => setRemoveBackground((prev) => !prev)}
              />
              <div className="w-9 h-5 bg-slate-300 rounded-full peer peer-checked:bg-purple-500 transition">
                <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4"></span>
              </div>
            </label>
          </div>
        )}
      </div>

      {/* INPUT FIELDS */}
      {fields.map((field) => {
        const Icon = field.icon;
        return (
          <div key={field.key} className="space-y-1 mt-5">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Icon className="size-4 text-purple-500" />
              {field.label}
              {field.required && <span className="text-pink-500">*</span>}
            </label>

            <input
              type={field.type}
              value={data[field.key] || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
              placeholder={`Enter your ${field.label.toLowerCase()}`}
              required={field.required}
              className="w-full px-3 py-2 rounded-lg border border-slate-300
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                text-sm transition"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfoForm;
