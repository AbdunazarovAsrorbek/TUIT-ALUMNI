import { createSlice } from "@reduxjs/toolkit";

import { getFriends } from "./thunk";

export const initialState = {
    friends: {
        content: []
    },
    error: {}
};

const FriendsSlice = createSlice({
    name: 'Friends',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getFriends.fulfilled, (state, action) => {
            state.friends = action.payload;
        });
        builder.addCase(getFriends.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

    }
});

export default FriendsSlice.reducer;