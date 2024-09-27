import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import avatarReducer from "./avatarSlice";
import profileReducer from "./profileSlice";
import contentReducer from "./sectionSlice"

const Store = configureStore({
    reducer: {
        user: userReducer,
        avatars: avatarReducer,
        profiles: profileReducer,
        contents: contentReducer,
    }
})

export { Store };