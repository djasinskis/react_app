import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "users",
    initialState: {
        value: {
            products:[],
            shopItem: {},
            productcart:[],
        }
    },
    reducers: {
     addProduct: (state, action) => {
        state.value.products = action.payload
     },
     setProduct: (state,action) =>{
        state.value.shopItem = action.payload
     },
     addToCart: (state, action) =>{
        state.value.productcart.push(action.payload) 
     }
    }, 
})
export const {addProduct,setProduct,addToCart} = userSlice.actions;
export default userSlice.reducer;