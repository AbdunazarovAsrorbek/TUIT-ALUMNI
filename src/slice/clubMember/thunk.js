import { createAsyncThunk } from "@reduxjs/toolkit";

import { getClubMember as getClubMemberApi } from "../../helper/helper";

export const getClubMember = createAsyncThunk("ClubMember/getClubMember", async (data) => {
    try {
        const response = await getClubMemberApi(data);
        // console.log("getClubMemberApi",response);
        return response;
    } catch (error) {
        return error;
    }
});

