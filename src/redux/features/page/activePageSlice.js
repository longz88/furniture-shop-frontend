import { createSlice } from "@reduxjs/toolkit";

export const activePageSlice = createSlice({
  name: "activePage",
  initialState: {
    actPage: localStorage.getItem("activePage")
      ? JSON.parse(localStorage.getItem("activePage"))
      : "Home",
  },
  reducers: {
    setActivePage: (state, action) => {
      state.actPage = action.payload;
    },
  },
});

export const { setActivePage } = activePageSlice.actions;
export default activePageSlice.reducer;
