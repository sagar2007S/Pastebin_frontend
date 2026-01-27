import { configureStore } from '@reduxjs/toolkit'   //1st step
import pasteReducer from "../features/pasteSlice"
import userReducer from "../features/userSlice"
export const store = configureStore({
  reducer: {
    paste:pasteReducer,
    user:userReducer 
  },
})