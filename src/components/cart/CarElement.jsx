import React from 'react'
import { deleteCartThunk } from '../../store/slices/car.slice'
import { useDispatch } from 'react-redux'
import './styles/carelement.css'

const CarElement = ({prod}) => {
    const dispatch=useDispatch()


    const handleDelete=()=>{
    dispatch(deleteCartThunk(prod.id))

}
    console.log(prod)
  return (

    <div className='container_carelement'>

    <article className='article_carelement'>
        
        
       <header className='header_carelement'>
        <div className='container_img'>
        <img className='img_carelement' src={prod.product?.productImgs[0].url} alt="" />

        </div>
        
       </header>
        <section className='seccion_carelement'>
            <h3 className='name_carelement'>{prod.product.title}</h3>
            <p> <span>{prod.quantity}</span> x <span>${prod.product.price}</span> </p>
            <button className='btn_carelement' onClick={handleDelete}>
            <i style={{fontSize:'2rem',cursor:'pointer'}} className='bx bx-trash'></i>
            </button>
        
        </section>
        <footer className='subtotal_footer'>
            <span>Subtotal</span><span>{prod.quantity*prod.product.price}</span>
        </footer>
        </article>
    </div>
  )
}

export default CarElement