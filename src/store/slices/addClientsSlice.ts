import {createSlice} from "@reduxjs/toolkit";

type State = {
    userName: string;
    phoneNumber: string | number;
}

const initialState: State[] = [];

const addClientSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {
        addClient(state, action) {
            return [...state, action.payload]
            console.log(state)
        }
    }
});

export const { addClient } = addClientSlice.actions;
export default addClientSlice.reducer;