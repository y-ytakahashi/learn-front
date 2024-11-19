import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/userSlice";
import ChannelSlice from "@/features/channelSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    channel: ChannelSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>