import { configureStore } from "@reduxjs/toolkit";
import {addClient} from "./slices/addClientsSlice";

const store = configureStore({
    reducer: {
        clients: addClient
    }
});
export default store;