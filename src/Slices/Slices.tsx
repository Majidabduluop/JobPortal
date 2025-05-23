import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Services/LocalStorageService";
import { stat } from "fs";

const UserSlice = createSlice({
  name: "user",
  initialState: getItem("user"),
  reducers: {
    setUser: (state, action) => {
      setItem("user", action.payload);

      return action.payload;
    },

    removeUser: (state) => {
      removeItem("user");
      state = null;
      return state;
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
