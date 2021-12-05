import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory } from "../../features/product/productSlices";
import Filter from "./Filter";
const Filters =()=>{
    return(
    <div>
        <div className="borderContainer">
            <b>Choose category: </b> 
            {['Mecurial','Phantom','All', 'Thông tin sinh viên']
                .map(category => <Filter category={category} isActive={false}/> )
            }
        </div>
    </div>
    )
}
export default Filters;