// profileSlice.js

import { createSlice } from "@reduxjs/toolkit";

const storedProfileDetails = localStorage.getItem("profileDetails");
const initialState = storedProfileDetails ? JSON.parse(storedProfileDetails) : null;

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProfileDetails } = profileSlice.actions;
export default profileSlice.reducer;
