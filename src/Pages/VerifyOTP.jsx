import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useResendOTPMutation, useSignUpMutation } from "../Components/app/authApi";
import { toast } from "react-toastify";
import { useEffect } from "react";

const VerifyOtp = () => {
    const location = useLocation()
    // console.log("forgotPassword Page...",location);

    const forgotPasswordOTP = location?.state.forgotPasswordOTP
    const forgotPasswordEmail = location?.state.email

    console.log("weloooooo", forgotPasswordOTP);



    const [resendOTP, { }] = useResendOTPMutation()
    const [signup, { isLoading, error }] = useSignUpMutation()

    useEffect(() => {
        if (error) {

            const msg = error?.data.error

            toast(msg, {
                type: "error"
            })

        }
    }, [error])


    const data = useLocation()
    const navigate = useNavigate()

    const email = data?.state.email

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);


    const [loading, setLoading] = useState(false);

    const handleChange = (value, index) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };


    const resend = async () => {
        const res = await resendOTP({ email: forgotPasswordOTP ? forgotPasswordEmail : email })
        console.log(res);
        toast(res?.data.message, {
            type: "success"
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (forgotPasswordOTP) {
            try {

                const fullOTP = otp.join("")

                const data = await signup({ email, otp: fullOTP, forgotPassword: true })

                console.log("otp data", data);

                toast(data?.data.message, {
                    type: "success"
                })

                navigate("/newpassword", { state: { email } })

            } catch (err) {
                console.log("Error", err);

            }

        } else {


            try {

                const fullOTP = otp.join("")

                const data = await signup({ email, otp: fullOTP })

                console.log("otp data", data);

                toast(data?.data.message, {
                    type: "success"
                })

                navigate("/login")

            } catch (err) {
                console.log("Error", err);

            }

        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#FF6F61]">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    Verify OTP
                </h2>
                <p className="text-gray-500 text-center mt-2">
                    Enter the 6-digit OTP sent to <span className="font-medium">{email}</span>
                </p>



                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="flex justify-between gap-2">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleChange(e.target.value, index)}
                                className="w-12 h-14 text-center text-xl font-semibold 
                  border border-gray-300 rounded-xl focus:outline-none 
                  focus:ring-2 focus:ring-[#FF6F61] bg-gray-100"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 mt-6 bg-[#FF6F61] text-white 
              font-semibold rounded-xl shadow-md hover:bg-[#e85a4e] 
              transition-all duration-200 disabled:opacity-50"
                    >
                        {isLoading ? "Verifying..." : "Verify OTP"}
                    </button>

                    <p className="text-center text-gray-500 mt-4 text-sm">
                        Didn’t receive the code?{" "}
                        <span
                            onClick={resend}
                            className="text-[#2563EB] cursor-pointer hover:underline">
                            Resend OTP
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtp;
