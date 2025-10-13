import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getNotification as getNotificationApi,
    reject as rejectApi,
    accept as acceptApi,
    sendRequest as sendRequestApi,
    getRejectRequest as getRejectRequestApi,
    getAcceptRequest as getAcceptRequestApi,
} from "../../helper/helper";

export const getNotification = createAsyncThunk("Notification/getNotification", async () => {
    try {
        const response = await getNotificationApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const getAllRejectRequest = createAsyncThunk("Notification/getAllRejectRequest", async () => {
    try {
        const response = await getRejectRequestApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const getAllAcceptRequest = createAsyncThunk("Notification/getAllAcceptRequest", async () => {
    try {
        const response = await getAcceptRequestApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const rejectRequest = createAsyncThunk("Notification/rejectRequest", async (id) => {
    try {
        const response = rejectApi(id);
        const data = await response;
        return data;
    } catch (error) {
        return error;
    }
});

export const acceptRequest = createAsyncThunk("Notification/acceptRequest", async (id) => {
    try {
        const response = acceptApi(id);
        const data = await response;
        console.log(data)
        return data;
    } catch (error) {
        return error;
    }
});

export const sendRequest = createAsyncThunk("Notification/sendRequest", async (id) => {
    try {
        const response = sendRequestApi(id);
        const data = await response;
        return data;
    } catch (error) {
        return error;
    }
});


