import { createSlice } from "@reduxjs/toolkit";

import { getGraduates} from "./thunk";

export const initialState = {
    graduates: {
        content: []
    },
    errors: {}
};

const GraduateSlice = createSlice({
    name: 'Graduate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getGraduates.fulfilled, (state, action) => {
            // console.log("xxxxxxxxxxxxxxxxxxxxxxxxx",action.payload);
            state.graduates = action.payload;
        });
        builder.addCase(getGraduates.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

    }
});

export default GraduateSlice.reducer;