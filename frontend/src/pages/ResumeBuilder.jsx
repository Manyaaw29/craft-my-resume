import React, { useState, useEffect } from "react";
import { dummyResumeData } from "../assets/assets";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  Briefcase,
  ChevronLeft,
  FileText,
  FolderIcon,
  GraduationCap,
  Sparkles,
  User,
  ChevronRight,
  Share2Icon,
  EyeIcon,
  EyeOffIcon,
  DownloadIcon,
} from "lucide-react";

import PersonalInfoForm from "../components/PersonalInfoForm";
import ResumePreview from "../components/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";
import ColorPalette from "../components/ColorPalette";
import ProfessionalSummary from "../components/ProfessionalSummary";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Languages from "../components/Languages";

const ResumeBuilder = () => {
  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    languages: [],
    template: "classic",
    accent_color: "#3b82f6",
    public: false,
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Professional Summary", icon: FileText },
    { id: "experience", name: "Professional Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "project", name: "Projects", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkles },
    { id: "languages", name: "Languages", icon: Sparkles },
  ];

  const activeSection = sections[activeSectionIndex];

  const loadExistingResume = async (resumeId) => {
    const resume = dummyResumeData.find((r) => r._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title;
    }
  };

  useEffect(() => {
    loadExistingResume(resumeId);
  }, [resumeId]);

  const changeResumeVisibility = async () => {
    setResumeData({ ...resumeData, public: !resumeData.public });
  };

  const handleShare = () => {
    const shareUrl = window.location.href.split("app/")[0];
    const resumeUrl = shareUrl + "view/" + resumeId;

    if (navigator.share) {
      navigator.share({
        url: resumeUrl,
        text: "Check out my resume!",
      });
    } else {
      alert("Share not supported on this browser.");
    }
  };

  const downloadResume = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* BACK */}
      <Link
        to="/app"
        className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition"
      >
        <ArrowLeftIcon className="size-4" />
        Back to Dashboard
      </Link>

      <div className="grid lg:grid-cols-12 gap-8 mt-4">
        {/* LEFT PANEL */}
        <div className="relative lg:col-span-5">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-4 relative ">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-200" />
            <div
              className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500"
              style={{
                width: `${(activeSectionIndex * 100) / (sections.length - 1)}%`,
              }}
            />

            <div className="border-b border-gray-300 pb-4 mb-5 space-y-4">
              <div className="flex items-start gap-2">
                <TemplateSelector
                  selectedTemplate={resumeData.template}
                  onChange={(template) =>
                    setResumeData((prev) => ({ ...prev, template }))
                  }
                />

                <ColorPalette
                  selectedColor={resumeData.accent_color}
                  onChange={(color) =>
                    setResumeData((prev) => ({ ...prev, accent_color: color }))
                  }
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <activeSection.icon className="size-5 text-purple-600" />
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    {activeSection.name}
                  </h2>
                </div>

                <div className="flex gap-1">
                  {activeSectionIndex !== 0 && (
                    <button
                      onClick={() =>
                        setActiveSectionIndex((prev) => Math.max(prev - 1, 0))
                      }
                      className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm
                        text-purple-600 hover:bg-purple-50 transition"
                    >
                      <ChevronLeft className="size-4" />
                      Prev
                    </button>
                  )}

                  <button
                    onClick={() =>
                      setActiveSectionIndex((prev) =>
                        Math.min(prev + 1, sections.length - 1)
                      )
                    }
                    disabled={activeSectionIndex === sections.length - 1}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition
                      ${
                        activeSectionIndex === sections.length - 1
                          ? "text-slate-400 cursor-not-allowed"
                          : "text-purple-600 hover:bg-purple-50"
                      }`}
                  >
                    Next
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* FORM CONTENT */}
            <div className="space-y-5">
              {activeSection.id === "personal" && (
                <PersonalInfoForm
                  data={resumeData.personal_info}
                  onChange={(data) =>
                    setResumeData((prev) => ({
                      ...prev,
                      personal_info: data,
                    }))
                  }
                  removeBackground={removeBackground}
                  setRemoveBackground={setRemoveBackground}
                />
              )}

              {activeSection.id === "summary" && (
                <ProfessionalSummary
                  data={resumeData.professional_summary}
                  onChange={(data) =>
                    setResumeData((prev) => ({
                      ...prev,
                      professional_summary: data,
                    }))
                  }
                  setResumeData={setResumeData}
                />
              )}
              {activeSection.id === "experience" && (
                <Experience
                  data={resumeData.experience}
                  onChange={(data) =>
                    setResumeData((prev) => ({
                      ...prev,
                      experience: data,
                    }))
                  }
                />
              )}
              {activeSection.id === "education" && (
                <Education
                  data={resumeData.education}
                  onChange={(data) =>
                    setResumeData((prev) => ({
                      ...prev,
                      education: data,
                    }))
                  }
                />
              )}
              {activeSection.id === "project" && (
                <Projects
                  data={resumeData.project}
                  onChange={(data) =>
                    setResumeData((prev) => ({
                      ...prev,
                      project: data,
                    }))
                  }
                />
              )}
              {activeSection.id === "skills" && (
                <Skills
                  data={resumeData.skills}
                  onChange={(data) =>
                    setResumeData((prev) => ({
                      ...prev,
                      skills: data,
                    }))
                  }
                />
              )}
              {activeSection.id === "languages" && (
                <Languages
                  data={resumeData.languages}
                  onChange={(data) =>
                    setResumeData((prev) => ({
                      ...prev,
                      languages: data,
                    }))
                  }
                />
              )}
            </div>

            <button
              className="
            mt-6 px-6 py-2 text-sm font-medium rounded-md
            bg-gradient-to-br from-green-100 to-green-200
            text-green-700
            ring-1 ring-green-300
            hover:ring-green-400
            hover:shadow-sm
            transition-all
            focus:outline-none
            focus-visible:ring-2 focus-visible:ring-green-400
          "
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-7 max-lg:mt-6">
          <div className="relative w-full">
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2">
              {resumeData.public && (
                <button
                  className="
                    flex items-center gap-2 px-3 py-2 text-sm rounded-md
                    bg-purple-50 text-purple-600
                    border border-purple-200
                    hover:bg-purple-100 hover:border-purple-300
                    transition
                  "
                  onClick={handleShare}
                >
                  <Share2Icon className="size-4" />
                  Share
                </button>
              )}

              <button
                className={`
                  flex items-center gap-2 px-3 py-2 text-sm rounded-md
                  border transition
                  ${
                    resumeData.public
                      ? "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                  }
                `}
                onClick={changeResumeVisibility}
              >
                {resumeData.public ? (
                  <EyeIcon className="size-4" />
                ) : (
                  <EyeOffIcon className="size-4" />
                )}
                {resumeData.public ? "Public" : "Private"}
              </button>

              <button
                className="
                  flex items-center gap-2 px-4 py-2 text-sm rounded-md
                  bg-gradient-to-r from-pink-500 to-purple-600
                  text-white
                  hover:from-pink-600 hover:to-purple-700
                  shadow-sm
                  transition
                "
                onClick={downloadResume}
              >
                <DownloadIcon className="size-4" />
                Download
              </button>
            </div>
          </div>
          <ResumePreview
            data={resumeData}
            template={resumeData.template}
            accentColor={resumeData.accent_color}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
