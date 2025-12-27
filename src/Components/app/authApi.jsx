import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const Auth = createApi({

    reducerPath: "Auth",
    baseQuery: fetchBaseQuery({ baseUrl: "https://shopmate-backend-3.onrender.com/api/v1" }),
    endpoints: (builder) => ({

        sendOTP: builder.mutation({
            query: (formData) => ({
                url: "/sendOTP",
                method: "POST",
                body: formData
            })

        }),
        resendOTP: builder.mutation({
            query: (email) => ({
                url: "/resendOTP",
                method: "POST",
                body: email
            })
        }),
        forgotPassword: builder.mutation({
            query: (email) => ({
                url: "/forgotPassword",
                method: "POST",
                body: email
            })
        }),
        signUp: builder.mutation({
            query: (userData) => ({
                url: "/signup",
                method: "POST",
                body: userData
            })
        }),
        resetPassword: builder.mutation({
            query: (userData) => ({
                url: "/resetpassword",
                method: "POST", 
                body: userData,
                credentials : "include"
            })
        }),
        login: builder.mutation({
            query: (formData) => ({
                url: "/login",
                method: "POST",
                body: formData
            })
        })

    })

})

export const { useSendOTPMutation, useLoginMutation, useResendOTPMutation,useResetPasswordMutation, useSignUpMutation,useForgotPasswordMutation } = Auth

export default Auth