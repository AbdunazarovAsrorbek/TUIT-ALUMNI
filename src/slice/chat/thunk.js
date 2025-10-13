import { createAsyncThunk } from "@reduxjs/toolkit";

import { getChatFriends as getChatFriendsApi } from "../../helper/helper";
import { readMessage as readMessageApi } from "../../helper/helper";

export const getChatFriends = createAsyncThunk("ChatFriends/getChatFriends", async () => {
    try {
        const response = await getChatFriendsApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const readMessage = createAsyncThunk("ChatFriends/readMessage", async ({ toAlumniId, messageIds }) => {
    try {
        const response = await readMessageApi(toAlumniId, messageIds);
        return response;
    } catch (error) {
        return error;
    }
}
);