import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./CartSlice"
import Auth from "./authApi"

export const Store = configureStore({
    reducer : {
        Cart : CartSlice,
        [Auth.reducerPath] : Auth.reducer
    },

    middleware : (getDefaultMiddleware)=>

        getDefaultMiddleware().concat([Auth.middleware])
})