/* eslint-disable no-unused-vars */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import supabase from '../../supabase'


  export const fetchApi=createAsyncThunk('myThunkFunction',async()=>{
    const { data, error } = await supabase
      .from("PRODUCTS")
      .select("*")
      .eq("category", "PRODUCTS_CAROUSEL");
      if (error) {
          console.log(error);
      } else {
        console.log(data)
        return data
      }
  })


 const ecommerceStore = createSlice({
  name: "EcommerceStore",

  initialState: {
    value: 100,
    products:[]
  },

  reducers: {
    getTheData: (currentState, action) => {
      currentState.value += 1;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchApi.fulfilled,(state,action)=>{
      state.products=action.payload
    })
  }
});

export const { getTheData } = ecommerceStore.actions;

export default ecommerceStore.reducer;