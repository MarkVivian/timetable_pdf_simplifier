import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";

const Store = configureStore({
    reducer : {
        Auth : AuthSlice.reducer
    }
})

export default Store;