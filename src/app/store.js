import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productsReducer from "../features/product/productSlices";
export default configureStore({
    reducer:{
        cart:cartReducer,
        products:productsReducer
    }
});