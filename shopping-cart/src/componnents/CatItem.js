// แสดงรายการสินค้าในตะกร้า
import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteicon from '../image/delete-icn.svg'
import { MyCartContext } from '../management/context'

const CartItem=({id,name,image_url,price,quantity})=>{
    const {removeItem,toggleQuatity,formatNumber} = MyCartContext()
return(
    
    <div className="item"> 
        <div className="product_image">
            <img src={image_url} alt=""/>
        </div>
        <div className="descreiption">
            <span>{name}</span>
            <span>ราคา{formatNumber(price)}บาท</span>
        </div>
        <div className="quantity">
            <button className="plus-btn" onClick={()=>toggleQuatity(id,"increment")}>
                <img src={plus} alt=""/>
            </button>
            <input type="text" value={quantity} disabled/>
            <button className="minus" onClick={()=>toggleQuatity(id,"decrement")}>
            <img src={minus} alt=""/>
            </button>
        </div>
        <div className="total-price">
            {formatNumber(quantity * price)}
        </div>
        <div class="remove" onClick={()=>removeItem(id)}>
            <img src={deleteicon} alt=""/>
        </div>
    </div>
)
}
export default CartItem
