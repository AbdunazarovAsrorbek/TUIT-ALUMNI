import {createAsyncThunk} from "@reduxjs/toolkit";

import {getFriends as getFriendsApi} from "../../helper/helper";

export const getFriends = createAsyncThunk("Friends/getFriends", async (data) => {
    try {
        const response = await getFriendsApi(data);
        return response;
    } catch (error) {
        return error;
    }
});