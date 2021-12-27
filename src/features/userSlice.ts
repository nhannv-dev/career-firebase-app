import { createSlice } from "@reduxjs/toolkit";

export interface UserSchema {
  email: string;
  uid: string;
  displayName: string;
  photoUrl: string;
}

export interface UserState {
  user: UserSchema | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: any) => state.user.user;
export default userSlice.reducer;
