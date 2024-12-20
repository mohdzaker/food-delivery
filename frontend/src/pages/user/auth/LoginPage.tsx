import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../../config";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import isLoggedIn from "../../../utils";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(isLoggedIn) {
      navigate("/")
    }
  })
  const [formData, setFormData] = useState({email: "",password: ""});
    const handleChange = (event:any) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = async (event:any) => {
      event.preventDefault();
      const response = await fetch(`${BACKEND_URL}/api/auth/login`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if(data.status === "success"){
        Cookies.set('token', data.token, {
          expires: 24 * 60 * 60 * 1000,
          secure: true,
        });
        toast.success("Logged in successfully!");
        navigate("/")
      }else{
        toast.error(data.message);
      }
    }
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Section: Image */}
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      ></div>

      {/* Right Section: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Logo */}
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-extrabold text-orange-500">FoodieExpress</h1>
            <p className="text-gray-400 mt-2">Welcome back! Please log in to continue.</p>
          </div>

          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-3 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 p-3 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Password */}
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-gray-400" />
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 p-3 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right text-sm">
              <Link to="/forgot-password" className="text-orange-500 hover:underline font-medium">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              name="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Login
            </button>
          </form>

          {/* Link to Register */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/register" className="text-orange-500 hover:underline font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
