// store.js

import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slice/profileSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer  },
});

store.subscribe(() => {
  const profileDetails = store.getState().profile;
  localStorage.setItem("profileDetails", JSON.stringify(profileDetails));
});

export default store;
