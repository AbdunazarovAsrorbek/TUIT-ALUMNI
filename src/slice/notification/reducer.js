import { createSlice } from "@reduxjs/toolkit";

import { getNotification, rejectRequest, acceptRequest, sendRequest, getAllAcceptRequest, getAllRejectRequest } from "./thunk";

export const initialState = {
    notification: {
        content: []
    },
    errors: {}
};

const NotificationSlice = createSlice({
    name: 'Notification',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getNotification.fulfilled, (state, action) => {
            state.notification = action.payload;
        });
        builder.addCase(getNotification.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getAllAcceptRequest.fulfilled, (state, action) => {
            state.notification = action.payload;
        });
        builder.addCase(getAllAcceptRequest.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getAllRejectRequest.fulfilled, (state, action) => {
            state.notification = action.payload;
        });
        builder.addCase(getAllRejectRequest.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(rejectRequest.fulfilled, (state, action) => {
            state.notification.content = state.notification.content.filter(
                (notification) => notification.id !== action.payload?.id
            );
        });

        builder.addCase(rejectRequest.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(acceptRequest.fulfilled, (state, action) => {
            state.notification.content = state.notification.content.filter(
                (notification) => notification.id !== action.payload?.id
            );
        });

        builder.addCase(acceptRequest.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(sendRequest.fulfilled, (state, action) => {
            console.log(action.payload)
        });
        builder.addCase(sendRequest.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });

    }
});

export default NotificationSlice.reducer;