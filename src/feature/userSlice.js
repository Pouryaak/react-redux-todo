import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setSignIn: (state, action) => {
      state.isSignedIn = true;
    },
    setSignOut: (state, action) => {
      state.isSignedIn = false;
      state.userData = null;
    },
  },
});

export const { setUserData, setSignIn, setSignOut } = userSlice.actions;

export const selectUserSignIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
