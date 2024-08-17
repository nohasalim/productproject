import './DetailsComponent.css'
import CartIcon from '../../assets/images/icon-cart.svg'
function DetailsComponent(){
    return(
    <div id="detailsDiv">  
        <label id="Title">PERFUME</label>
        <h1 id="Header">Gabrielle Essence Eau De Perfum</h1>
        <p id="Description">A floral,solar and voluptuous A floral,solar and voluptuousA floral,solar and voluptuousA floral,solar and voluptuousA floral,solar and voluptuousA floral,solar and voluptuous</p>
        <div id="PriceDiv">
            <label id="PriceLabel">$149.99</label>
            <label id="DiscountPrice"><s>$169.99</s></label>
        </div>
        <button id="CartBtn">
            <img src={CartIcon}></img>
            <span> Add To Cart</span>
           </button>
        
    </div>
)
}
export default DetailsComponent