import { useNavigate } from 'react-router-dom'
import './stiles/CardProduct.css'
import { postCartThunk } from '../../store/slices/car.slice'
import { useDispatch } from 'react-redux'
import { setVerifyProductCartG } from '../../store/slices/verifyProductCart.slice'




const CardProduct = ({prod}) => {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleNavigate=()=>{
    navigate(`/product/${prod.id}`)
    window.scrollTo({ top: 0, behavior: "smooth" });
  
  }
 
  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(postCartThunk(prod));
  };

  const user = window.localStorage.getItem("user");
  const isEmptyLocalStorage = window.localStorage.length;
 

  return (
    <article className="product" onClick={handleNavigate}>
        <header className="product_header">
            <div className='product_img_container'>
            <img className="product_img" src={prod?.productImgs[0].url} alt="productos" />
             </div>
             <div className='product_img_container'>
            <img className="product_img" src={prod?.productImgs[1].url} alt="productos" />
             </div>
            
        </header>
        <section className='product_body'>
            <header className="product_titles">
            <h3 className="product_brand">{prod.brand}</h3>
            <h2 className="product_name">{prod.title}</h2>

            </header>
            
            <article>
                <h3 className="product_price_label">price</h3>
                <p className="product_price_value">${prod.price}</p>
                
                </article>
                <button className="product_btn" onClick={handleAddCart}><i className='bx bx-cart' ></i></button>
        </section>
    </article>
  )
}

export default CardProduct