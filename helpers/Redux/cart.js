import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity:0,
        total:0,

    },
    reducers: { 
        addProduct:(state,action) => {
            state.products.push(action.payload)
            state.quantity += 1
            state.total += action.payload.price * action.payload.packs
        },
        reset:(state) => {
            state.products = []
            state.quantity = 0
            state.total = 0
        },
        removeProduct:(state,action) => {
            state.products.splice(action.payload.item_id,1)
            state.quantity -= 1
            console.log(action.payload.item_id)
            state.total -= action.payload.price * action.payload.packs
        }
    }
})

export const {addProduct,reset,removeProduct} = cartSlice.actions
export default cartSlice.reducer