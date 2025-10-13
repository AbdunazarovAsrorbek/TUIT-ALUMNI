import { createSlice } from "@reduxjs/toolkit";

import { getProfile, addProfile, updateProfile } from "./thunk";

export const initialState = {
    profile: {
        content: []
    },
    // certificate: null,
    errors: {}
};

const BrandSlice = createSlice({
    name: 'Brand',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        });
        builder.addCase(getProfile.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

        // builder.addCase(getCertificate.fulfilled, (state, action) => {
        //
        // });
        // builder.addCase(getCertificate.rejected, (state, action) => {
        //     state.error = action.payload || null;
        // });

        builder.addCase(addProfile.fulfilled, (state, action) => {
            state.profile.content.unshift(action.payload);
        });
        builder.addCase(addProfile.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(updateProfile.fulfilled, (state, action) => {
            state.profile.content = action.payload;
            // console.log(action.payload);
        });

        builder.addCase(updateProfile.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
    }
});

export default BrandSlice.reducer;