import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { id: '0', name: 'Tianna Jenkins' },
        { id: '1', name: 'Kevin Grant' },
        { id: '2', name: 'Madison Price' }
    ],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const { } = usersSlice.actions;
export default usersSlice.reducer;

export const selectAllUsers = state => state.users.users;
export const selectUserById = (state, userId) => state.users.users.find(user => user.id === userId);