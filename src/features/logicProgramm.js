import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import supabase from '../../supabase'


export const authSlice =createAsyncThunk("auth/logicProgramm",async ({ email, password, name },thunkAPI) => {
    const { data, error } =await supabase.auth.signUp({
        email,
        password,
        options: {
        data: {
            name,
        },
        },
    });
    if (error) {
        return thunkAPI.rejectWithValue(error.message);
    }else{
        return data;
    }
  }
);

export const loginUser =createAsyncThunk("auth/loginUser",async({email,password},thunkAPI)=>{
  const {data,error}=await supabase.auth.signInWithPassword({
    email,
    password
  })
  if(error){
    return thunkAPI.rejectWithValue(error.message)
  }else{
    return data
  }
})

export const logOutUser=createAsyncThunk("auth/logoutUser",async(_,thunkAPI)=>{
  const {error}=await supabase.auth.signOut();
  if(error){
    return thunkAPI.rejectWithValue(
      error.message
    )
  }else{
    return null
  }
})


export const checkUserSession=createAsyncThunk('auth/checkUserSession',async(_,thunkAPI)=>{
    const {data,error}=await supabase.auth.getSession();
    if(error){
        return thunkAPI.rejectWithValue(error.message)
    }else{
        return data.session
    }
})


const logicProgramm = createSlice({
    name: "logicProgrammReducer",
    
    initialState: {
        user: null,
        session: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
  // Pending
    
    .addCase(authSlice.pending, (state) => {
        state.loading = false;
        state.error = null;
    })
  // Fulfilled
    .addCase(authSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.user =action.payload.user;
        state.session =action.payload.session;
    })
  // Rejected
   
    .addCase(authSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })

     // checkUserSession
    .addCase(checkUserSession.pending, (state) => {
  state.loading = true;
})

.addCase(checkUserSession.fulfilled, (state, action) => {
  state.loading = false;

  if (action.payload) {
    state.user = action.payload.user;
    state.session = action.payload;
    state.isAuthenticated = true;
  } else {
    state.user = null;
    state.session = null;
    state.isAuthenticated = false;
  }
})

.addCase(checkUserSession.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})
// login user
.addCase(loginUser.pending,(state)=>{
  state.loading=true;
  state.error=null;
})
.addCase(loginUser.fulfilled,(state,action)=>{
  state.loading=false;
  state.user=action.payload.user
  state.session=action.payload.session
  state.isAuthenticated=true;
})
.addCase(loginUser.rejected, (state, action) => {
  state.loading = false;
  state.error =
  action.payload;
})

// logout user
.addCase(logOutUser.pending, (state) => {
  state.loading = true;
})

.addCase(logOutUser.fulfilled, (state) => {
  state.loading = false;
  state.user = null;
  state.session = null;
  state.isAuthenticated = false;
})

.addCase(logOutUser.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})


}
});


export default logicProgramm.reducer