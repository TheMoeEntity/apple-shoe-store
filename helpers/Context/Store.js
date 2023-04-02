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
    case "ADD_TO_CART": {
      const newItem = action.payload;
      const exists = state.cart.cartItems.find(
        (item) => item._key === newItem._key
      );
      const cartItems = exists
        ? state.cart.cartItems.map((item) =>
            item._key === exists._key ? newItem : item
          )
        : [...state];
    }

    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
