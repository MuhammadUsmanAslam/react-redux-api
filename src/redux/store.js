import usersReducer from "../users/usersSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        users: usersReducer
        
    }
})

export default store;
