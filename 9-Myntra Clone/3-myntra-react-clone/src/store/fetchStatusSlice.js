
import { createSlice} from "@reduxjs/toolkit"


const fetchStatusSlice= createSlice({
  name:'fetchStatus',
  initialState: {
    fetchDone:false,
    currentlyFetch:false
  },
  reducers:{
    markFetchDone:(state) =>{
      state.fetchDone =true;
    },
    markFetchingStarted:(state) =>{
      state.fetchDone =true;
    },
    markFetchingFinished:(state) =>{
      state.fetchDone =false;
    },
  }
})

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

