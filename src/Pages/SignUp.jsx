import React, { useEffect, useState } from "react";
import { useSendOTPMutation } from "../Components/app/authApi";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate()

  const [sendOTP, { data, isLoading, error }] = useSendOTPMutation()


  useEffect(() => {
    if (error) {

      const msg = error?.data.error

      toast(msg, {
        type: "error"
      })

    }
  }, [error])


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await sendOTP(formData)

    console.log("newUser", res);

    toast(res?.data.message, {
      type: "success"
    })

    navigate("/verifyotp", { state: { email: formData.email } })

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white w-full max-w-md shadow-xl rounded-2xl p-8 border border-gray-200">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-orange-600">Shop</span>
          <span className="text-gray-800">Mate</span>
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create an account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:outline-none shadow-sm"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:outline-none shadow-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:outline-none shadow-sm"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:outline-none shadow-sm"
              placeholder="Re-enter password"
            />
            <p className="text-red-500">{error?.data.error}</p>
          </div>

          {/* Button */}
          <button
            disabled={isLoading}
            type="submit"
            className={isLoading ? "w-full bg-orange-700 text-white py-3 rounded-xl font-semibold transition shadow-md" : "w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition shadow-md"} >
            {isLoading ? "Generating OTP" : "Sign Up"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-700 mt-5">
          Already have an account?{" "}
          <a href="/login" className="text-orange-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
