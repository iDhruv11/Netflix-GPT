import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import avatarReducer from "./avatarSlice";
import profileSlice from "./profileSlice";

const Store = configureStore({
    reducer: {
        user: userReducer,
        avatars: avatarReducer,
        profiles: profileSlice,
    }
})

export { Store };