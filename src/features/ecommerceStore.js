/* eslint-disable no-unused-vars */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import supabase from '../../supabase'


  export const fetchApi_Products_Carousel=createAsyncThunk('myThunkFunction_Products_Carousel',async()=>{
    const { data, error } = await supabase
      .from("PRODUCTS")
      .select("*")
      .eq("category", "PRODUCTS_CAROUSEL");
      if (error) {
          console.log(error);
      } else {
        return data
      }
  })
  export const fetchApi_Best_Selling_Products=createAsyncThunk("myThunkFunction_Best_Selling_Products",async()=>{
    const {data,error}=await supabase
    .from('PRODUCTS').select("*")
    .eq("category","BEST_SELLING_PRODUCTS")
    if(error){
      console.log(error)
    }else{
      return data
    }
  })
  export const fetchApi_OurProducts=createAsyncThunk("myThunkFunction_OurProducts",async()=>{
    const {data,error}=await supabase
    .from("PRODUCTS").select("*")
    .eq("category","OurProducts")
    if(error){
      console.log(error)
    }else{
      return data
    }
  })
  export const  fetchShowAll=createAsyncThunk("myThunkFunctionShowAll",async()=>{
    const {data,error}=await supabase
    .from("PRODUCTS").select('*')
    if(error){
      console.log(error)
    }else{
      return data
    }
  })

  export const fetchProductById = createAsyncThunk('products/fetchProductById',async (id) => {
    const { data, error } = await supabase
      .from('PRODUCTS')
      .select('*')
      .eq('id', id)
      .single() // بيجيب object مش array

    if (error) console.log(error)
    else return data
  }
)

  export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('CART')
    .insert({
      user_id: user.id,
      product_id: product.id,
      quantity: 1
    })
    .select(`*, PRODUCTS(*)`) 

  if (error) console.log(error)
  else return data[0]
})

  export const addToLike=createAsyncThunk("like/addToLike",async(product)=>{
    const {data:{user}}=await supabase.auth.getUser()
    if(!user){
      console.log("not found the user")
    }
    const {data,error}=await supabase.from("likes")
    .insert({
      user_id:user.id,
      product_id:product.id,
      quantity:1
    }).select("* ,PRODUCTS(*)")
    if(error){
      console.log(error)
    }else{
      return data [0]
    }

  })
  export const fetchWishlistItems =createAsyncThunk("wishlist/fetchItems",async()=>{
          const {data:{user}}=await supabase.auth.getUser()
          if(!user){
            return []
          }
          const {data,error}=await supabase.from("likes").select(`*,PRODUCTS (*)`).eq("user_id",user.id)
          if(error){
            return []
          }else{
            return data
          }
    
  })
  export const deleteWishlistItems=createAsyncThunk('wishlist/deleteItem',async(itemId)=>{
    const {error}=await supabase
    .from("likes")
    .delete()
    .eq('id',itemId)

    if(error)return null
    return itemId
  })

  export const fetchJustForYou=createAsyncThunk('wishlist/fetchJustForYou',async()=>{
    const {data:{user}}=await supabase.auth.getUser()
    if(!user)return[]
    const {data: likedProducts }=await supabase.from("likes").select('PRODUCTS(category)').eq('user_id',user.id)
    if(!likedProducts||likedProducts.length===0)return []
    const categories=[
      ...new Set(likedProducts.map((item)=>item.PRODUCTS.category))
    ]
        const { data, error } = await supabase
      .from('PRODUCTS')
      .select('*')
      .in('category', categories)
      .limit(8)

    if (error) return []
    return data
  })

 const ecommerceStore = createSlice({
  name: "EcommerceStore",

  initialState: {
    value: 100,
    selectedProduct: null,
    products:[],
    BEST_SELLING_PRODUCTS:[],
    OurProducts:[],
    showAll:[],
      cartItems: [],
    loading:false,
    wishlistItem:[],
    justForYou: [],
  },

  reducers: {
    getTheData: (currentState, action) => {
      currentState.value += 1;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchApi_Products_Carousel.fulfilled,(state,action)=>{
      state.products=action.payload
    })
    .addCase(fetchApi_Best_Selling_Products.fulfilled,(state,action)=>{
      state.BEST_SELLING_PRODUCTS=action.payload
    })
    .addCase(fetchApi_OurProducts.fulfilled,(state,action)=>{
      state.OurProducts=action.payload
    })
    .addCase(fetchShowAll.fulfilled,(state,action)=>{
      state.showAll=action.payload
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
  state.cartItems.push(action.payload) 
})
.addCase(addToLike.fulfilled,(state,action)=>{
  state.wishlistItem.push(action.payload)
})
.addCase(fetchProductById.fulfilled, (state, action) => {
  state.selectedProduct = action.payload
})

.addCase(fetchWishlistItems.fulfilled, (state, action) => {
  state.wishlistItems = action.payload
})
.addCase(deleteWishlistItems.fulfilled, (state, action) => {
  if (action.payload) {
    state.wishlistItems = state.wishlistItems.filter(
      (item) => item.id !== action.payload
    )
  }
})
.addCase(fetchJustForYou.fulfilled, (state, action) => {
  state.justForYou = action.payload
})


}});

export const { getTheData } = ecommerceStore.actions;

export default ecommerceStore.reducer;