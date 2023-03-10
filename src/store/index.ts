import { configureStore } from "@reduxjs/toolkit";
import {setPrice} from "./slices/calculatorSlice";

const store = configureStore({
    reducer: {
        calc: setPrice
    }
});
export default store;