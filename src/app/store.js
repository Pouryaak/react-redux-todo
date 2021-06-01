import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../feature/userSlice";
import tasksSliceReducer from "../feature/tasksSlice";

export default configureStore({
  reducer: {
    user: userSliceReducer,
    tasks: tasksSliceReducer,
  },
});
