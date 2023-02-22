import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name : "Auth",
    initialState : {
        userName : "",
        password : ""
    },
    reducers : {
        Login(state, actions){
            state.userName = actions.payload[0]
            state.password = actions.payload[1]
        }
    }
})

export const actions = AuthSlice.actions