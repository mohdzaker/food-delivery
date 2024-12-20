import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaUnlock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../../config";
import toast from "react-hot-toast";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({name: "",email: "",password: "", confirmPassword: "",});
  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const response = await fetch(`${BACKEND_URL}/api/auth/register`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if(!response.ok){
      throw new Error("Registration failed");
    }
    const data = await response.json();

    if(data.status === "success"){
      toast.success(data.message);
      
    }else{
      toast.error(data.message);
    }
};
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
            <p className="text-gray-400 mt-2">Join us and start ordering delicious meals.</p>
          </div>

          {/* Registration Form */}
          <form className="space-y-5" onSubmit={handleSubmit} >
            {/* Full Name */}
            <div className="relative flex items-center">
              <FaUser className="absolute left-3 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full pl-10 p-3 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

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

            {/* Confirm Password */}
            <div className="relative flex items-center">
              <FaUnlock className="absolute left-3 text-gray-400" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full pl-10 p-3 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              name="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Register
            </button>
          </form>

          {/* Link to Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
