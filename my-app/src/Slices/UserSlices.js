import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
    name: 'UsersList',
    initialState,
    reducers:{
       addUser(state,action){
        state.push(action.payload)
       },
       deleteUser(state,action){
        const deleteIndex = action.payload;

        return state.filter((user,index) =>
        index !== deleteIndex)
       }
    }
})
export const {addUser,deleteUser} =userSlice.actions;
export default userSlice.reducer;
