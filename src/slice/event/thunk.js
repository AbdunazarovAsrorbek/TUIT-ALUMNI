import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getEvent as getEventApi, getEventById as getEventByIdApi
} from "../../helper/helper";

export const getEvent = createAsyncThunk("Event/getEvent", async (data) => {
    try {
        const response = await getEventApi(data);
        // console.log("event thunk",response);
        return response;
    } catch (error) {
        return error;
    }
});


export const getEventForSidebar = createAsyncThunk("Event/getEventForSidebar", async (data) => {
    try {
        const response = await getEventApi(data);
        // console.log("thunk getEventForSidebar", response);
        return response;
    } catch (error) {
        return error;
    }
});


export const getEventById = createAsyncThunk("Event/getEventById", async (id) => {
    try {
        const response = await getEventByIdApi(id);
        // console.log("thunk getEventById", response);
        return response;
    } catch (error) {
        return error;
    }
});
