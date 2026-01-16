import { MailIcon, LockIcon, User2Icon, UserRoundCheck } from "lucide-react";
import React from "react";

const Login = () => {

  const query= new URLSearchParams(window.location.search);
  const urlState= query.get("state");
   const [state, setState] = React.useState(urlState|| "login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 size-[400px] bg-gradient-to-r from-pink-400 to-purple-500 blur-[120px] opacity-25" />
      <div className="absolute -bottom-32 -right-32 size-[400px] bg-gradient-to-r from-purple-400 to-pink-500 blur-[120px] opacity-25" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 sm:w-[380px] w-full text-center border border-slate-200 rounded-2xl px-8 bg-white shadow-lg"
      >
        <h1 className="text-slate-900 text-3xl mt-12 font-semibold">
          {state === "login" ? "Welcome back" : "Create your account"}
        </h1>

        <p className="text-slate-500 text-sm mt-3">
          {state === "login"
            ? "Sign in to continue building your resume"
            : "Start building your AI-powered resume"}
        </p>

        {state !== "login" && (
          <div className="flex items-center mt-8 w-full border border-slate-300/70 h-12 rounded-full pl-6 gap-2">
            <User2Icon size={16} className="text-slate-500" />
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="w-full bg-transparent outline-none text-sm"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-5 border border-slate-300/70 h-12 rounded-full pl-6 gap-2">
          <MailIcon size={16} className="text-slate-500" />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full bg-transparent outline-none text-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center mt-5 w-full border border-slate-300/70 h-12 rounded-full pl-6 gap-2">
          <LockIcon size={16} className="text-slate-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none text-sm"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-5 text-left">
          <button type="reset" className="text-sm text-purple-600 hover:underline">
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-7 w-full h-11 rounded-full text-white font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
        >
          {state === "login" ? "Sign in" : "Create account"}
        </button>

        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-slate-500 text-sm mt-5 mb-12 cursor-pointer"
        >
          {state === "login"
            ? "Don’t have an account?"
            : "Already have an account?"}{" "}
          <span className="text-purple-600 hover:underline">
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
