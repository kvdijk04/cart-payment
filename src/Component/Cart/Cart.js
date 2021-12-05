import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartitems, getTotalPrice } from "../../features/cartSlice";

const Cart =() =>{
    const cartItems=useSelector(getCartitems);
    const totalPrice=useSelector(getTotalPrice);
    return(
        <div className="border-container cartContainer">
            <h3 className="title">Your Cart: </h3>
            <div className="cartTotalPriceContainer">
                <strong>Total: </strong>
                <span className="cartTotalPrice">
                    ${totalPrice}
                </span>
            </div>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} />)}
        </div>
    )
}
export default Cart;