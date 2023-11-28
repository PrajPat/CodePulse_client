import { createSlice } from "@reduxjs/toolkit";

const initialStatr = {
    UserData: {},
    isRegistered: false,
    isLogedin: false
}

const usrSlice = createSlice({
    name: "userdata",
    initialStatr,
    reducers: {
        logout: (state) => {
            state.UserData = {};
            state.isLogedin = false;
        },
        register: (state, action) => {
            state.UserData = action.payload;
            state.isRegistered = true;
        },
        login: (state, action) => {
            state.UserData = action.payload
            state.isLogedin = true
        }
    }
})

export const { login, logout, register } = usrSlice.actions
export default usrSlice.reducer