import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {
        type: null,
        name: null,
        email: null,
        photoURL: null,
        emailVerified: false,
        keepWatching: {
            movies: [],
            shows: []
        },
        myList: {
            movies: [],
            shows: []
        },
        suggestions: []
    },
    reducers: {
        addUser: (state, action) => {
            const { displayName, email, photoURL, emailVerified } = action.payload;
            state.name = displayName;
            state.email = email;
            state.photoURL = photoURL;                        
            state.emailVerified = emailVerified;
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
        addKeepWatching: (state, action) => {
            state.keepWatching.movies.length >= 6 ? state.keepWatching.movies.length = 0 : null
            state.keepWatching.shows.length >= 6 ? state.keepWatching.shows.length = 0 : null
            action.payload.type == 'movie' ? state.keepWatching.movies.push(action.payload) : state.keepWatching.shows.push(action.payload)
        },
        addMyList: (state, action) => {
            state.myList.movies.length >= 6 ? state.myList.movies.length = 0 : null
            state.myList.shows.length >= 6 ? state.myList.shows.length = 0 : null
            action.payload.type == 'movie' ? state.myList.movies.push(action.payload) : state.myList.shows.push(action.payload)
        },
        addSuggestion: (state, action) => {
            state.suggestions = action.payload
        }
    }
})

export const {addUser, removeUser, updateUser, addKeepWatching, addMyList, addSuggestion} = userSlice.actions;
export default userSlice.reducer;