import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../Home/CardProduct"


const SimilarProducts = ({product}) => {
  
  const baseUrl = import.meta.env.VITE_REACT_APP_URL
 const [productsByCategory, getProductsByCategory]=useFetch(baseUrl)
 useEffect(()=>{
  if(product){
    getProductsByCategory(`/products?categoryId=${product.category.id}`)
  }
  
 },[product]) 

 console.log(productsByCategory)
 return (
    <div>
      <h2 className="title_similar">similar product</h2>
      <div className="similarproduct_productidpage">
        {
          productsByCategory?.map(prod=>{
            if(product.id!==prod.id){
              return (<CardProduct
              key={prod.id}
              prod={prod}
              />)
            }
            
})
        }
      </div>
      
      
      </div>
  )
}

export default SimilarProducts