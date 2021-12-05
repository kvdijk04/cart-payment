import Product from "./Product";
import { connect } from "react-redux";
import productProvider from "../../features/product/products";
/**product={product} */
import {getSelectedCategory } from "../../features/product/productSlices";
import {useSelector} from "react-redux";
const Products= () =>{
    const selectedCategory=useSelector(getSelectedCategory);
    return (
        <div className="productContainer">
            <div className="Product">
            <h5>Products</h5>
            </div>
            {productProvider
            .filter(product =>{
                if(selectedCategory === "All") return true;
                return selectedCategory ===product.category;
            })
            
            .map(product => <Product product ={product} />)}
        </div>
    )
}

export default (Products);