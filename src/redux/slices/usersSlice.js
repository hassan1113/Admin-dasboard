import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: 1, name: 'Ali Khan', email: 'ali@example.com', phone: '03001234567', role: 'Admin' },
        { id: 2, name: 'Fahad', email: 'fahad@example.com', phone: '03001234567', role: 'User' },
        { id: 3, name: 'Jawad', email: 'jawad@example.com', phone: '03001234567', role: 'Manager' },
    ]
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                ...action.payload,
                id: Date.now()
            };
            state.users.push(newUser);
        },
        updateUser: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    }
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;