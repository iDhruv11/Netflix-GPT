import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import avatarReducer from "./avatarSlice";
import contentReducer from "./sectionSlice"

const Store = configureStore({
    reducer: {
        user: userReducer,
        avatars: avatarReducer,
        contents: contentReducer,
    }
})

export { Store };