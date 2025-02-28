import { createSlice} from "@reduxjs/toolkit"


const bagSlice= createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addToBag:(state,action) =>{
     state.push(action.payload);
    },
    removeToBag:(state,action) =>{
      return state.filter(itemid => itemid !== action.payload
      );
    }
  }
})

export const bagActions = bagSlice.actions;

export default bagSlice;

