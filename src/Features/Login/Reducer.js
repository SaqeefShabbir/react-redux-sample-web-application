import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'login',
    initialState: {
        username: localStorage.getItem('username') || '',
        password: localStorage.getItem('password') || '',
        isAuthUser: localStorage.getItem('authUser') || false,
    },
    reducers: {
        setAuthUser: (state, action) => {
            if (action.payload.username === "admin" && action.payload.password === "admin") {
                localStorage.setItem('authUser', true);
                localStorage.setItem('username', action.payload.username);
                localStorage.setItem('password', action.payload.password);
                state.isAuthUser = true;
            }
        },
        removeAuthUser: (state) => {
            localStorage.removeItem('authUser');
            localStorage.removeItem('username');
            localStorage.removeItem('password');

            localStorage.removeItem('orderTotal');
            localStorage.removeItem('totalPrice');
            localStorage.removeItem('orderItems');
            state.isAuthUser = false;
        },
    },
});

export const { setAuthUser } = slice.actions;
export const { removeAuthUser } = slice.actions;

export const selectUsername = state => state.login.username;
export const selectPassword = state => state.login.password;
export const selectAuthUser = state => state.login.isAuthUser;

export default slice.reducer;
