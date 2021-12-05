const SizeButton =({size,setSize}) =>{
    const subtractSize =() =>{
        const newSize =size-1;
        if(size<=36) return;
        setSize(newSize);
    }
    const addSize =() =>{
        const newSize =size+1;
        if(size>=45) return;
        setSize(newSize);
    }
    return(
    <div className="quantityBorder">
        <strong>Size: </strong>
        <div className="quantityButton">
        <button onClick={subtractSize}>&#8722;</button>
        <span>{size}</span>
        <button onClick={addSize}>&#43;</button>
        </div>
    </div>
    )
};
export default SizeButton;