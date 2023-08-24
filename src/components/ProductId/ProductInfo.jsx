import { useState } from "react"
import './styles/productInfo.css'
import { postCartThunk} from '../../store/slices/car.slice'
import { useDispatch } from 'react-redux'


const ProductInfo = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    //los dos handleAdd son lo mismo
    // const handleAdd=()=>setQuantity(quantity+1)
    const dispatch=useDispatch()
  
    const handleMinus=()=>{
        if(quantity-1>=1){
            setQuantity(state=>state-1)}
        }

       
        
        
    const handleAdd=()=>setQuantity(state=>state+1)

    const handleAddtoCart=()=>{
        dispatch(postCartThunk(product,quantity))
    }

    

  return (
    <article className="article_productinfo">
        <h3 className="tipe_productinfo">{product?.brand}</h3>
        <h2 className="title_productinfo">{product?.title}</h2>
        <p className="description_productinfo">{product?.description}</p>
        <footer className="footer_productinfo">
            <ul className="ul_footer_produtinfo">
                <li className="li_footer_productinfo"><span className="li_span_prod">price</span>
                <span className="price_product_info">${product?.price}</span>
                </li>
                <li className="li_footer_productinfo"><span className="li_span_prod">Quantity</span>
                    <div className="quantity_productinfo">
                        <div className="valor_quantity" onClick={handleMinus}>-</div>
                        <div className="valor_quantity quantity_one">{quantity}</div>
                        <div className="valor_quantity" onClick={handleAdd}>+</div>
                    </div>
                
                </li>
            </ul>
            <button onClick={handleAddtoCart} className="btn_prodcutinfo">Add to cart <i className='bx bx-cart'></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo