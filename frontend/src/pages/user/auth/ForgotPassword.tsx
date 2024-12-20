import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
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
            <p className="text-gray-400 mt-2">Forgot your password? Don't worry!</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 p-3 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Remember your password?{" "}
              <Link to="/login" className="text-orange-500 hover:underline font-medium">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
