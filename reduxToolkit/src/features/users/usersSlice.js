import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/fetchUsers',
    async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok)
        {
            throw new Error('Failed to fetch users');
        }
        return response.json();
    }
);

const usersSlice = createSlice({
    name:'users',
    initialState:{
        items:[],
        status: 'idle',
        error:null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

export default usersSlice.reducer;