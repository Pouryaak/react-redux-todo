import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        userId: 1,
        id: action.payload.id,
        title: action.payload.title,
        dueDate: action.payload.dueDate,
        status: action.payload.status,
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.dueDate = action.payload.dueDate;
          task.status = action.payload.status;

          return task;
        }
        return task;
      });
    },
  },
});

export const { addTask, editTask, removeTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.tasks;
export default tasksSlice.reducer;
