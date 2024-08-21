import { createSlice } from "@reduxjs/toolkit";

const initState = {
  showCart: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initState,
  reducers: {
    toggle: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const { toggle } = uiSlice.actions;
export default uiSlice.reducer;
