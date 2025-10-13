
import { createSlice } from "@reduxjs/toolkit";

import { getEvent, getEventById, getEventForSidebar } from "./thunk";

export const initialState = {
    eventList: [],
    eventById: {},
    eventForSidebar: [],
    errors: {}
};

const EventSlice = createSlice({
    name: 'EventSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getEvent.fulfilled, (state, action) => {
            // console.log("event reducer",action.payload);
            state.eventList = action.payload;
        });
        builder.addCase(getEvent.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });


        builder.addCase(getEventForSidebar.fulfilled, (state, action) => {
            // console.log("reducer getEventForSidebar",action.payload);
            state.eventForSidebar = action.payload;
        });
        builder.addCase(getEventForSidebar.rejected, (state, action) => {
            state.error = action.payload || null;
        });

        builder.addCase(getEventById.fulfilled, (state, action) => {
            // console.log("reducer getEventById",action.payload);
            state.eventById = action.payload;
        });
        builder.addCase(getEventById.rejected, (state, action) => {
            state.error = action.payload || null;
        });

    }
});

export default EventSlice.reducer;