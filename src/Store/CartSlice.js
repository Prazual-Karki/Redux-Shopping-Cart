import { createSlice } from "@reduxjs/toolkit";


const Cartslice = createSlice({
    name : 'cart',
    initialState : [],
    reducers:{
        add(state,action){
            //in redux
            // return [..state,action.payload] -> createSlice does this internally
            state.push(action.payload);
        },
        remove(state,action){
            return state.filter((item)=>item.id!==action.payload);
        },
    },

})
export const {add,remove} = Cartslice.actions;
export default Cartslice.reducer;