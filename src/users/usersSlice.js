import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    isLoading: false,
    error: undefined
}

const fetchUsers = createAsyncThunk('user/fetchUser', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map(user => user.id));
})

const userSlice = createSlice(
    {
        name: "users",
        initialState,
        reducers: {
            addUser: ()=>{
                console.log("Add user clicked")
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchUsers.pending, state => {
                state.isLoading = true
            })
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.users = action.payload
                state.error = ''
            })
            builder.addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false
                state.users = []
                state.error = action.error.message
            })
        }
    }
)

export const { addUser } = userSlice.reducer;
export { fetchUsers };
export default userSlice.reducer;