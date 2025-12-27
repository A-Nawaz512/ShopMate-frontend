import React, { useState } from "react";
import { HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../Components/app/authApi";

const CreateNewPassword = () => {

  const location = useLocation()

  console.log("New Data of email", location); 

  const email = location?.state.email


  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });

  const [newPassword, { isLoading, error }] = useResetPasswordMutation()

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Call API to reset password here

    const data = await newPassword({ ...formData, email })

    console.log("New Password Submitted:", data);

    // toast.success("Password reset successfully!");
    // setFormData({ password: "", confirmPassword: "" });

    // Redirect to login page after reset
    // navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-orange-600">Shop</span>
          <span className="text-gray-800">Mate</span>
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create a new password for your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Password */}
          <div className="relative">
            <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 text-gray-700 shadow-sm"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 select-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiOutlineEyeOff className="text-orange-600" size={20} /> : <HiOutlineEye className="text-orange-600" size={20} />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 text-gray-700 shadow-sm"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 select-none"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <HiOutlineEyeOff className="text-orange-600" size={20} /> : <HiOutlineEye className="text-orange-600" size={20} />}
            </span>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
          >
            Continue
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center text-gray-700">
          <Link
            to="/login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CreateNewPassword;
