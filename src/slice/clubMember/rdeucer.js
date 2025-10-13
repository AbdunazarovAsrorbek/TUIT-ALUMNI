import { createSlice } from "@reduxjs/toolkit";

import { getClubMember } from "./thunk";

export const initialState = {
    clubMember: {
        content: []
    },
    errors: {}
};

const ClubMemberSlice = createSlice({
    name: 'ClubMemberSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getClubMember.fulfilled, (state, action) => {
            // console.log("getClubMember", action.payload);
            state.clubMember = action.payload;
        });
        builder.addCase(getClubMember.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

    }
});

export default ClubMemberSlice.reducer;