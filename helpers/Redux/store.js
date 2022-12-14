import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart"

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})
