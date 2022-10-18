import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: "test",
    initialState: {
        text: 0
    },
    reducers: {
        textChange: (state, action: PayloadAction<number>) => {
            //mutation update truc tiep state
            state.text += action.payload;
        },
        reset: (state) => {
            state.text = 0;
        } // Tạo 1 action 
    }
});