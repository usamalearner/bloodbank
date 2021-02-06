import { users ,userDetails} from "../state";
import { createSlice } from "@reduxjs/toolkit";
import * as React from 'react';
const usersSlice = createSlice({
    name: "users",
    initialState: users,
    reducers: {
      // Actions
      // Add
      getUsers : (state,action)=>{
        return({
            ...state,
            users:action.payload
        })
      }
    }

})

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: userDetails,
    reducers: {
      // Actions
      // Add
      getDetails : (state,action )=>{
        return({
            ...state,
            users:action.payload
        })
      }
    }

})

export default {
    usersSlice,
    userDetailsSlice,
}