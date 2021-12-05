
const QuantityButton =({quantity,setQuantity}) =>{
    const subtractQuantity =() =>{
        const newQuantity =quantity-1;
        if(quantity<=1) return;
        setQuantity(newQuantity);
    }
    const addQuantity =() =>{
        const newQuantity =quantity+1;
        setQuantity(newQuantity);
    }
    return(
    <div className="quantityBorder">
        <strong>Quantity:</strong>
        <div className="quantityButton">
        <button onClick={subtractQuantity}>&#8722;</button>
        <span>{quantity}</span>
        <button onClick={addQuantity}>&#43;</button>
    </div>
    </div>
    )
};
export default QuantityButton;