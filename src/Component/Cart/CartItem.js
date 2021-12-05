import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { removeItemFromCart } from "../../features/cartSlice";
import productProvider from "../../features/product/products";

const CartItem=({cartItem}) =>{
    const dispatch=useDispatch();
    const product=productProvider.find(p => p.id === cartItem.productId)
    return(
    <div className="cartItemContainer">
        <div className="cartItem">
            <div className="cartItemDescContainer">
                <div>
                    <img src={`./Mecurial/${product.img}.jpg`} alt={`${product.img}`}  />
                </div>
                <div  className="cartDetail">
                    <b>Name: {product.name}</b>
                    <p>Size: {cartItem.size}</p>
                    <p>Quantity: {cartItem.quantity}</p>
                    <p>Price: ${product.price* cartItem.quantity} </p>
                </div>
            </div>
            <div className="cartItemRemoveButtonContainer">
                <button onClick={()=> dispatch(removeItemFromCart({cartItemId : cartItem.id}))} >Remove</button>
            </div>
        </div>
    </div>
    )
}
export default CartItem;