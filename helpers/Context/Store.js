import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
  },
};

const reducer = (state,action) => {
    switch (action.payload) {
        case 'ADD_To_CART':
            const newItem = action.payload
            break;
    
        default:
            break;
    }
}