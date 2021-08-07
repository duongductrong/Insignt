import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./reducers/loadingReducer";

const store = configureStore({
  reducer: {
    loadingService: loadingReducer,
  },
});

export default store;
