import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { retriveContacts, retriveSingle, createContact, updateContact, deleteContact } from "../Actions/ContactAction";

//initial state
const initState = {
    contacts: []
}

const ContactSlice = createSlice({
    name: "contact",
    initialState: initState.contacts,
    extraReducers: (builder) => {
        builder.addCase(createContact.fulfilled, (state,action) => {
                state.push(action.payload)
        })
                .addCase(retriveContacts.fulfilled, (state,action) => {
                    return [...action.payload]
                })
                .addCase(retriveSingle.fulfilled, (state,action) => {})
                .addCase(updateContact.fulfilled, (state,action) => {})
                .addCase(deleteContact.fulfilled, (state,action) => {})
    }
})

// combine the reducers
const reducer = combineReducers ({
    contacts: ContactSlice.reducer
})

export default reducer