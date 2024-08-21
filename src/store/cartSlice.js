import { createSlice } from "@reduxjs/toolkit";

const initState = {
  itemQuantity: 0,
  items: [],
 
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state, action.payload);
      const newItem = action.payload;
      console.log(newItem.id, { action });
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.itemQuantity++;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      }
    },
    removeToCart: (state, action) => {
      console.log(state, action.payload);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.itemQuantity--;
      if (existingItem.quantity === 1) {
        // existingItem.total = existingItem.quantity * existingItem.price;
        state.items = state.items.filter((item) => item.id !== newItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - newItem.price;
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
