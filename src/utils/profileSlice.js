import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "Profiles",
    initialState: [
        {   
            type: 'default',
            name: 'Children',
            photoID: null,
            photoURL: "https://res.cloudinary.com/dianmmxft/image/upload/v1726898085/kids_s8ndtp.png",
        }
    ],
    reducers: {
        addProfile: (state, action) => {
            state.push(action.payload)
        },
        editProfile: (state, action) =>{
            const {index, ...newProfile} = action.payload;
            state[index] = {...state[index], ...newProfile};
        },
        deleteProfile: (state, action) => {
            const newState = state.filter( (user, index) => index != action.payload)
            return [...newState]
        }
    }

})

export const { addProfile, editProfile, deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;