import { createSlice} from "@reduxjs/toolkit";
    
const initialState=[];
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },

        remove(state,action){
            return state.filter(item=>item.id !== action.payload)
        }
    }
});
export const{add, remove}=cartSlice.actions; 
export default cartSlice.reducer;
//This is a cart slice that will handle adding items to the user's shopping cart.