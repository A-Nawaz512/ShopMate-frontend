import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../Components/app/authApi";

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [forgotPassword, { error, isLoading }] = useForgotPasswordMutation()

    useEffect(() => {

        if (error) {

            console.log("new Error", error);

            toast(error?.data.error, {
                type: "error"
            })

        }
    }, [error])

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email!");
            return;
        }
        // Call your API here for forgot password

        const res = await forgotPassword({ email })

        console.log(res);
        // console.log("Email submitted:", email);
        toast.success(res?.data.message);

        navigate("/verifyotp", { state: { forgotPasswordOTP: true, email: email } })

        setEmail("");
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
                    Enter your registered email to reset your password
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email Input */}
                    <div className="relative">
                        <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 text-gray-700 shadow-sm"
                        />
                    </div>

                    {/* Continue Button */}
                    <button
                        type="submit"
                        className={isLoading ? "w-full bg-orange-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300" : "w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"}
                    >
                        {isLoading ? "Generating OTP...." : "Continue"}
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

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default ForgotPassword;
