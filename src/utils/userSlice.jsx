import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {
        name: null,
        email: null,
        photoURL: null,
        emailVerified: false,
    },
    reducers: {
        addUser: (state, action) => {
            const { displayName, email, photoURL } = action.payload;
            state.name = displayName;
            state.email = email;
            state.photoURL = photoURL;                        
            
        },
        removeUser: (state) => {
            const newEmptyUser = {
                name: null,
                email: null,
                photoURL: null
            } 
            return { ...newEmptyUser}
        },
        updateUser: (state, action)=>{            
            return {...state, ...action.payload}
        },
        
    }
})

export const {addUser, removeUser, updateUser} = userSlice.actions;
export default userSlice.reducer;