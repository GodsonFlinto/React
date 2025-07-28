import { createSlice } from "@reduxjs/toolkit";

let dataFromWeb = JSON.parse(localStorage.getItem("cart"))

const cartslice = createSlice({
  name: "cart",
  initialState: dataFromWeb,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
        localStorage.setItem("cart", JSON.stringify([...state]));
    },
    removeItem(state, action) {
      let itemId = action.payload;
      let newCart = state.filter((cartProduct) => cartProduct.id !== itemId);
      localStorage.setItem("cart", JSON.stringify([...newCart]));
      return newCart;
    },
  },
});

export default cartslice.reducer;
export let { addItem, removeItem } = cartslice.actions;
