import './ProductComponent.css' 
import perfumeImg from'../../assets/images/perfume.jpg'
function ProductComponent(){
    return(<div id="productDiv">
        <img  id="MyImg" src={perfumeImg}></img>
    </div>)
}
export default ProductComponent