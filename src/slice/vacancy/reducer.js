
import { createSlice } from "@reduxjs/toolkit";

import { getVacancy, getVacancyById, getVacancyForSidebar } from "./thunk";

export const initialState = {
    vacancyList: [],
    vacancyById: {},
    vacancyForSidebar: [],
    errors: {}
};

const VacancySlice = createSlice({
    name: 'VacancySlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getVacancy.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.vacancyList = action.payload;
        });
        builder.addCase(getVacancy.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });


        builder.addCase(getVacancyForSidebar.fulfilled, (state, action) => {
            // console.log("reducer getVacancyForSidebar",action.payload);
            state.vacancyForSidebar = action.payload;
        });
        builder.addCase(getVacancyForSidebar.rejected, (state, action) => {
            state.error = action.payload || null;
        });

        builder.addCase(getVacancyById.fulfilled, (state, action) => {
            // console.log("reducer getVacancyById",action.payload);
            state.vacancyById = action.payload;
        });
        builder.addCase(getVacancyById.rejected, (state, action) => {
            state.error = action.payload || null;
        });

    }
});

export default VacancySlice.reducer;