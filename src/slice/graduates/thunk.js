import { createAsyncThunk } from "@reduxjs/toolkit";

import { getGraduates as getGraduatesApi } from "../../helper/helper";

export const getGraduates = createAsyncThunk("Graduates/getGraduates", async (data) => {
    try {
        const response = await getGraduatesApi(data);
        // console.log("xxxxxxxxxxxxxxxxxxxxxxxxx",response);
        return response;
    } catch (error) {
        return error;
    }
});






