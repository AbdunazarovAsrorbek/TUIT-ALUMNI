import { createSlice } from "@reduxjs/toolkit";

import { getChatFriends, readMessage } from "./thunk";

export const initialState = {
  chatFriends: [],
  error: {}
};

const ChatFriendsSlice = createSlice({
  name: "ChatFriends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {


    builder.addCase(getChatFriends.fulfilled, (state, action) => {
      state.chatFriends = action.payload;
    })
    builder.addCase(getChatFriends.rejected, (state, action) => {
      state.error = action.payload || null;
    });


    builder.addCase(readMessage.fulfilled, (state, action) => {
      state.readMessage = action.payload;
    })
    builder.addCase(readMessage.rejected, (state, action) => {
      state.error = action.payload || null;
    })


  }
});

export default ChatFriendsSlice.reducer;
