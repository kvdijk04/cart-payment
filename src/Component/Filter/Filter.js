import { useDispatch} from "react-redux";
import { filterCategory, getSelectedCategory } from "../../features/product/productSlices";
import {useSelector} from "react-redux";
const Filter =({isActive,category})=>{
    const dispatch=useDispatch();
    const selectedCategory=useSelector(getSelectedCategory)
    console.log(selectedCategory);
    return(
    <div className="filterContainer">
        <span
            onClick={() => {dispatch(filterCategory(category))}}
            className={selectedCategory === category ?
                'filterButton filterButtonActive':'filterButton'
            }
        >
        {category}
        </span>
    </div>
    )
}
export default Filter;