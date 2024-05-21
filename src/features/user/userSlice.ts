// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  username: localStorage.getItem("username") || "",
  isAuthenticated: !!localStorage.getItem("username"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("username", action.payload);
    },
    clearUser: (state) => {
      state.username = "";
      state.isAuthenticated = false;
      localStorage.removeItem("username");
    },
    logout: (state) => {
      state.username = "";
      state.isAuthenticated = false;
      localStorage.removeItem("username");
    },
  },
});

export const { setUser, clearUser, logout } = userSlice.actions;
export default userSlice.reducer;
