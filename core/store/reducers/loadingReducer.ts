import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loadingService",
  initialState: {
    isLoadingPage: true,
  },
  reducers: {
    loadingOn: (state) => {
      state.isLoadingPage = true;
    },

    loadingOff: (state) => {
      state.isLoadingPage = false;
    },
  },
});

export const { loadingOn, loadingOff } = loadingSlice.actions;

export default loadingSlice.reducer;
