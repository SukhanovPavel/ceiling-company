import {createSlice} from "@reduxjs/toolkit";

// export type Price = {
//     price: string;
//     options: number;
//     madeIn: number;
//     S: number;
//     luminaire: number;
//     lamp: number;
//     P: number;
//     construction: number;
//     corners: number;
//     totalPrice: number;
// }
//
// export const initialState: Price = {
//     price: "32323",
//     options: 0,
//     madeIn: 0,
//     S: 0,
//     luminaire: 0,
//     lamp: 0,
//     P: 0,
//     construction: 0,
//     corners: 0,
//     totalPrice: 0
// };

export const calculatorSlice = createSlice({

    name: "calc",

    initialState: {
        price: "32323",
        options: 0,
        madeIn: 0,
        S: 0,
        luminaire: 0,
        lamp: 0,
        P: 0,
        construction: 0,
        corners: 0,
        totalPrice: 0
    },

    reducers: {
        setPrice : ( state, { payload } ) => {
            state.price = payload.text;
        },
    }
}
);

export const { setPrice } = calculatorSlice.actions;
export default calculatorSlice.reducer;