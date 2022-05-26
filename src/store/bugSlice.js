import { createSlice } from "@reduxjs/toolkit";

const bugSlice=createSlice({
    initialState:{
        list:[],
        lastFetch:null,
        loading:false
    },
    name:'bugs',
    reducers:{
        bugReceived:(bugs,action)=>{
            bugs.list=action.payload
            bugs.loading.false
            bugs.lastFetch=Date.now()
        },
        bugAdded:(bugs,action)=>{
            bugs.list.push(action.payload)
        },
        bugRemoved:(bugs,action)=>{
            const i=bugs.list.findIndex(bug=>bug.id===action.payload.id)
            delete bugs.list[i]
        },
        bugRequested:(bugs,action)=>{
            bugs.loading=true
        },
        bugRequestFailed:(bugs,action)=>{
            bugs.loading=false
        }   
    }
})
export const {bugReceived,bugAdded,bugRemoved,bugRequested,bugRequestFailed}=bugSlice.actions
export default bugSlice.reducer