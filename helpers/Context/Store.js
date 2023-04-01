import { read_cookie } from "sfcookies";
import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();
const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
  },
};

const reducer = (state, action) => {
  switch (action.payload) {
    case "ADD_To_CART":
      const newItem = action.payload;
      break;

    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
