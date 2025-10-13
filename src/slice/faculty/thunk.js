import {createAsyncThunk} from "@reduxjs/toolkit";

import {getFacultyList as getFacultyListApi} from "../../helper/helper";

export const getFacultyList = createAsyncThunk("Faculty/getFacultyList", async () => {
    try {
        const response = await getFacultyListApi();
        return response;
    } catch (error) {
        return error;
    }
});

