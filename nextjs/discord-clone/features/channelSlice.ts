import { createSlice } from "@reduxjs/toolkit";
import { InitialChannelState } from "@/types/types";

const initialState: InitialChannelState = {
  channelId: null,
  channelName: null
};

// NOTE ユーザーの認証状態を保持する
export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    }
  }
});

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;