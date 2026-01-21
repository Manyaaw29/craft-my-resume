import {
  FilePenIcon,
  PlusIcon,
  UploadIcon,
  TrashIcon,
  PencilIcon,
  XIcon,
  UploadCloud,
  LoaderCircleIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import pdfToText from "react-pdftotext";

import api from "../configs/api";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user, token } = useSelector((state) => state.auth);

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const pastelThemes = [
    "from-[#FFE5E5] to-[#FFD1D1]",
    "from-[#E5F3FF] to-[#D1E7FF]",
    "from-[#F0E5FF] to-[#E1D1FF]",
    "from-[#FFF5E5] to-[#FFE8D1]",
    "from-[#E5FFF0] to-[#D1FFE1]",
    "from-[#FFE5F5] to-[#FFD1E8]",
    "from-[#E5F9FF] to-[#D1F0FF]",
    "from-[#FFF0E5] to-[#FFE5D1]",
  ];

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get("/api/users/resumes", {
        headers: {
          Authorization: token,
        },
      });
      setAllResumes(data.resumes);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  const createResume = async (e) => {
    try {
      e.preventDefault();
      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      setAllResumes([...allResumes, data.resume]);
      setTitle("");
      setShowCreateResume(false);
      navigate(`/app/builder/${data.resume._id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const uploadResume = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const resumeText = await pdfToText(resume);
      const { data } = await api.post(
        "/api/openai/upload-resume",
        { title, resumeText },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      setTitle("");
      setResume(null);
      setShowUploadResume(false);
      navigate(`/app/builder/${data.resume._id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
    setIsLoading(false);
  };

  const [editResumeId, setEditResumeId] = useState(null);

  const editTitle = async (e) => {
    try {
      e.preventDefault();
      const { data } = await api.put(
        "/api/resumes/update",
        { resumeId: editResumeId, resumeData: { title } },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      setAllResumes(
        allResumes.map((resume) =>
          resume._id === editResumeId ? { ...resume, title: title } : resume,
        ),
      );
      setEditResumeId(null);
      setTitle("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const deleteResume = async (resumeId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this resume?",
    );

    if (confirm) {
      try {
        const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, {
          headers: {
            Authorization: token,
          },
        });
        setAllResumes(allResumes.filter((resume) => resume._id !== resumeId));
        toast.success(data.message);
      } catch (error) {
        toast.error(error?.response?.data?.message || error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Welcome to your dashboard!
          </h1>
          <p className="text-slate-600 text-lg">
            Create, manage, and customize your professional resumes
          </p>
        </div>

        {/* ACTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
          {/* CREATE */}
          <button
            onClick={() => setShowCreateResume(true)}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-slate-200 hover:border-purple-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="size-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-5 group-hover:scale-105 transition">
                <PlusIcon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Create Resume
              </h3>
              <p className="text-slate-500 text-sm">
                Start from scratch with our builder
              </p>
            </div>
          </button>

          {/* UPLOAD */}
          <button
            onClick={() => setShowUploadResume(true)}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-slate-200 hover:border-blue-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="size-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-5 group-hover:scale-105 transition">
                <UploadIcon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Upload Existing
              </h3>
              <p className="text-slate-500 text-sm">
                Import and customize your resume
              </p>
            </div>
          </button>
        </div>

        {/* DIVIDER */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </div>

        {/* RESUME GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {allResumes.map((resume, index) => (
            <div
              key={index}
              onClick={() => navigate(`/app/builder/${resume._id}`)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition border border-slate-200 overflow-hidden cursor-pointer"
            >
              <div
                className={`h-28 bg-gradient-to-br ${pastelThemes[index % pastelThemes.length]} flex items-center justify-center`}
              >
                <FilePenIcon size={40} className="text-purple-400 opacity-50" />
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-800 truncate mb-1.5">
                  {resume.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3.5">
                  Updated {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex gap-2"
                >
                  <button
                    onClick={() => {
                      setEditResumeId(resume._id);
                      setTitle(resume.title);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition text-sm font-medium"
                  >
                    <PencilIcon size={15} />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteResume(resume._id)}
                    className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                  >
                    <TrashIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CREATE MODAL */}
      {showCreateResume && (
        <form
          onSubmit={createResume}
          onClick={() => setShowCreateResume(false)}
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm bg-white rounded-2xl p-6 shadow-xl"
          >
            <XIcon
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
              onClick={() => setShowCreateResume(false)}
            />

            <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Create a new resume
            </h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Resume title"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 mb-5"
              required
            />

            <button
              type="submit"
              disabled={!title.trim()}
              className={`w-full h-11 rounded-full font-medium transition ${
                title.trim()
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              Create Resume
            </button>
          </div>
        </form>
      )}

      {/* UPLOAD MODAL */}
      {showUploadResume && (
        <form
          onSubmit={uploadResume}
          onClick={() => setShowUploadResume(false)}
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm bg-white rounded-2xl p-6 shadow-xl"
          >
            <XIcon
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
              onClick={() => setShowUploadResume(false)}
            />

            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
              Upload an existing resume
            </h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Resume title"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 mb-5"
              required
            />

            <label htmlFor="resume-upload" className="cursor-pointer block">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition">
                {resume ? (
                  <p className="text-blue-600 font-medium">{resume.name}</p>
                ) : (
                  <>
                    <UploadCloud
                      size={42}
                      className="mx-auto mb-2 text-slate-400"
                    />
                    <p className="text-slate-600 font-medium">Upload Resume</p>
                    <p className="text-slate-400 text-sm">PDF Only</p>
                  </>
                )}
              </div>
            </label>

            <input
              id="resume-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => setResume(e.target.files[0])}
            />
        
                
            <button
              type="submit"
              disabled={!title.trim() || (!resume || isLoading)}
              className={`w-full h-11 mt-5 rounded-full font-medium transition ${
                title.trim() && resume
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed flex items-center justify-center gap-2"
              }`}
            >
              {isLoading && (
                <LoaderCircleIcon className="inline-block mr-2 animate-spin" />
              )}
              {isLoading ? "Uploading..." : "Upload Resume"}
            </button>
          </div>
        </form>
      )}

      {/* EDIT MODAL */}
      {editResumeId && (
        <form
          onSubmit={editTitle}
          onClick={() => {
            setEditResumeId(null);
            setTitle("");
          }}
          className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
          >
            <XIcon
              className="absolute top-4 right-4 size-5 cursor-pointer text-slate-400 hover:text-slate-600 transition"
              onClick={() => {
                setEditResumeId(null);
                setTitle("");
              }}
            />

            <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Edit Resume Title
            </h2>

            <p className="text-sm text-slate-500 mb-6">
              Update the name of your resume
            </p>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter resume title"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-5"
              required
            />

            <button
              type="submit"
              disabled={!title.trim()}
              className={`w-full h-11 rounded-full font-medium transition ${
                title.trim()
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              Update Title
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Dashboard;
