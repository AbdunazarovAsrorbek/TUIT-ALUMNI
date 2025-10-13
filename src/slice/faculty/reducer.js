import { createSlice } from "@reduxjs/toolkit";

import { getFacultyList} from "./thunk";

export const initialState = {
    facultyList: [],
    errors: {}
};

const FacultySlice = createSlice({
    name: 'Faculty',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getFacultyList.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.facultyList = action.payload;
        });
        builder.addCase(getFacultyList.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

    }
});

export default FacultySlice.reducer;