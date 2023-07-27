import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    shippingAddress: {},
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.packs;
    },
    updateShipping: (state, action) => {
      state.shippingAddress = action.payload;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      state.shippingAddress = {};
    },
    removeProduct: (state, action) => {
      state.products.splice(action.payload.item_id, 1);
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.packs;
    },
  },
});

export const { addProduct, reset, removeProduct, updateShipping } =
  cartSlice.actions;
export default cartSlice.reducer;
