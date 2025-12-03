import { createSlice } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"


const CartSlice = createSlice({

    name: "Cart",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            

            const existProduct = state.find((item) => item.id === action.payload.id)

            if (!existProduct) {
                state.push(action.payload)

            }
            else {

                existProduct.qty +=1


            }

        },
        removeProduct: (state, action) => {

           const navigate = useNavigate()
            
           const existProduct = state.findIndex((item) => item.id === action.payload.id)
            if(existProduct !== -1){
                state.splice(existProduct,1)
            }

            navigate()
        },
        increaseQty :(state, action)=> {
             const existProduct = state.find((item) => item.id === action.payload.id)
            existProduct.qty+=1
            
        },
        decreaseQty :(state, action)=> {
             const existProduct = state.find((item) => item.id === action.payload.id)

             existProduct.qty === 1 ? existProduct.qty = 1 : existProduct.qty-=1
            
        },
    }
})


export const { addProduct, removeProduct ,increaseQty,decreaseQty} = CartSlice.actions

export default CartSlice.reducer