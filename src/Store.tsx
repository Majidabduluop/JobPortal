import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../src/Slices/Slices";

export default configureStore({
  reducer: {
    user: userreducer,
  },
});
