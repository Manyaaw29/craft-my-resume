import { MailIcon, LockIcon, User2Icon } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import api from "../configs/api";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {

  const dispatch = useDispatch();
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");

  const [state, setState] = React.useState(urlState || "login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));
      localStorage.setItem("token", data.token);
      toast.success(data.message);
    } catch (error) {
      
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputWrapper =
    "flex items-center w-full h-12 rounded-full border border-slate-300/70 px-6 gap-2 transition focus-within:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-500/25";

  const inputField =
    "w-full bg-transparent text-[15px] text-slate-800 placeholder-slate-400 outline-none border-none shadow-none focus:outline-none focus:ring-0";

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 size-[400px] bg-gradient-to-r from-pink-400 to-purple-500 blur-[120px] opacity-25" />
      <div className="absolute -bottom-32 -right-32 size-[400px] bg-gradient-to-r from-purple-400 to-pink-500 blur-[120px] opacity-25" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 sm:w-[380px] w-full bg-white border border-slate-200 rounded-2xl px-8 shadow-lg text-center"
      >
        <h1 className="text-slate-900 text-[32px] mt-12 font-semibold">
          {state === "login" ? "Welcome back" : "Create your account"}
        </h1>

        <p className="text-slate-500 text-[15px] mt-3">
          {state === "login"
            ? "Sign in to continue building your resume"
            : "Start building your AI-powered resume"}
        </p>

        {state !== "login" && (
          <div className={`${inputWrapper} mt-8`}>
            <User2Icon size={16} className="text-slate-500" />
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className={inputField}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className={`${inputWrapper} mt-5`}>
          <MailIcon size={16} className="text-slate-500" />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className={inputField}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={`${inputWrapper} mt-5`}>
          <LockIcon size={16} className="text-slate-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={inputField}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {state === "login" && (
          <div className="mt-5 text-left">
            <button
              type="button"
              className="text-[14px] text-fuchsia-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>
        )}

        <button
          type="submit"
          className="mt-7 w-full h-11 rounded-full text-[15px] text-white font-medium bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:opacity-90 transition"
        >
          {state === "login" ? "Sign in" : "Create account"}
        </button>

        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-slate-500 text-[15px] mt-5 mb-12 cursor-pointer"
        >
          {state === "login"
            ? "Don’t have an account?"
            : "Already have an account?"}{" "}
          <span className="text-fuchsia-600 hover:underline">
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
