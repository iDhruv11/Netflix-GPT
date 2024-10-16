import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {
        name: null,
        email: null,
        photoURL: null,
        emailVerified: false,
        selectedProfile: null,
        profiles: [
            {   
                type: 'default',
                name: 'Children',
                photoID: null,
                photoURL: "https://res.cloudinary.com/dianmmxft/image/upload/v1726898085/kids_s8ndtp.png",
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
            
        ]
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
        addProfile: (state, action) => {
            state.profiles.push(action.payload)
        },
        editProfile: (state, action) => {
            const {index, ...newProfile} = action.payload;
            state.profiles[index] = {...state.profiles[index], ...newProfile};
        },
        deleteProfile: (state, action) => {
            state.profiles = state.profiles.filter( (profile, index) => index != action.payload)
        },
        updateSelectedProfile: (state, action) => {
            state.selectedProfile = action.payload
        },
        addKeepWatching: (state, action) => {
            const { profileIndex, content } = action.payload
            state.profiles[profileIndex].keepWatching.movies.length >= 6
                ? state.profiles[profileIndex].keepWatching.movies.length = 0
                : null
            state.profiles[profileIndex].keepWatching.shows.length >= 6
                ? state.profiles[profileIndex].keepWatching.shows.length = 0
                : null
            content.type == 'movie'
                ? state.profiles[profileIndex].keepWatching.movies.push(action.payload.content)
                : state.profiles[profileIndex].keepWatching.shows.push(action.payload.content)
        },
        addMyList: (state, action) => {
            const {profileIndex, content} = action.payload
            state.profiles[profileIndex].myList.movies.length >= 6
                ? state.profiles[profileIndex].myList.movies.length = 0
                : null
            state.profiles[profileIndex].myList.shows.length >= 6 ?
                state.profiles[profileIndex].myList.shows.length = 0
                : null
            content.type == 'movie'
                ? state.profiles[profileIndex].myList.movies.push(action.payload.content)
                : state.profiles[profileIndex].myList.shows.push(action.payload.content)
        },
        addSuggestion: (state, action) => {
            const { profileIndex, suggestionArray} = action.payload
            state.profiles[profileIndex].suggestions = suggestionArray
        }
    }
})

export const {addUser, removeUser, updateUser, addProfile, editProfile, deleteProfile, updateSelectedProfile} = userSlice.actions;
export default userSlice.reducer;