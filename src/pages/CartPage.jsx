import { useDispatch, useSelector } from "react-redux"
import CarElement from "../components/cart/CarElement"
import usePurchase from "../hooks/usePurchase"
import { setCartG } from "../store/slices/car.slice"


const CartPage = () => {
  
  const cart=useSelector(states=>states.cart)

const totalPrice=cart.reduce((acc,cv)=>{
  const subtotal=cv.quantity*cv.product.price
  return acc+subtotal
},0)
const {makePurchase}=usePurchase()

const dispatch=useDispatch()
const handlePurchase=()=>{
  makePurchase()
  // dispatch(setCartG([]))
}

    
  return (
    <div>
        <h2>Cart</h2>
        <div>
          {
            cart.map(prod=>(
              <CarElement
              key={prod.id}
              prod={prod}
              />
            ))

          }

        </div>
        <footer>
          <div>
            <span>total:</span><span>{totalPrice}</span>
          </div>
          <button onClick={handlePurchase}>Purchase this cart</button>
        </footer>
    </div>
  )
}

export default CartPage