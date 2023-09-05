import { createSlice } from "@reduxjs/toolkit";
import { InitialUserState } from "@/types/types";

const initialState: InitialUserState = {
  user: null
};

// NOTE ユーザーの認証状態を保持する
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export default userSlice.reducer;