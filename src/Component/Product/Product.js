import QuantityButton from "./QuantityButton";
import SizeButton from "./SizeButton";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cartSlice";
import { useState } from "react";
const Product= ({product}) =>{
    const dispatch=useDispatch();
    const [size,setSize] =useState(36);
    const [quantity,setQuantity] =useState(1);
    return(
        <div className="product-container">
            <div className="product">
                <div>
                    <img src={`./Mecurial/${product.img}.jpg`} alt={`${product.img}`}  />
                </div> 
                <div className="desContainer">
                    <h2 className="title">{product.name}</h2>
                    <SizeButton 
                        size={size}
                        setSize={setSize}
                    />
                    <QuantityButton 
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                    <p>Price: ${product.price} </p>
                </div>
            </div>
            <button className="addToCartButton"
                        onClick={() => {
                            dispatch(addItemToCart({product,size,quantity}));
                        }}
                    >ADD TO CART</button>
        </div>
    )
}
export default Product;