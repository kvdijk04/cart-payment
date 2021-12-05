import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../Component/Cart/CartItem";
import { toast } from "react-toastify";
export const slice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItemToCart: (state,action) => {
            const pseudoId =(new Date().getTime());
            state.cartItems.push({
                id:pseudoId,
                productId:action.payload.product.id,
                quantity:action.payload.quantity,
                size:action.payload.size,
                totalPrice:action.payload.quantity* action.payload.product.price,
            });
        },
        removeItemFromCart: (state,action) =>{
            state.cartItems = state.cartItems.filter(
                CartItem =>CartItem.id != action.payload.cartItemId
            )
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        }
        
    }
});
export const getCartitems =state => state.cart.cartItems;
export const getTotalPrice =state => {
    return state.cart.cartItems.reduce((total,CartItem) =>{
        return CartItem.totalPrice+total;
    },0);
}
export const {addItemToCart} =slice.actions;
export const {removeItemFromCart} =slice.actions;
export default slice.reducer;