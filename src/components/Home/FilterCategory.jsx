import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"


const FilterCategory = () => {
    
    const baseUrl=import.meta.env.VITE_REACT_APP_URL
   const[categories,getAllCategories]=useFetch(baseUrl)
    const dispatch=useDispatch()
   useEffect(()=>{
    getAllCategories('/categories')
   },[])
   const handleFilterCategory=(id)=>{
    if(id){
    const url = `${import.meta.env.VITE_REACT_APP_URL}/products?categoryId=${id}`
    dispatch(getAllProductsThunk(url))
    }else{
        
        dispatch(getAllProductsThunk())
    }
   }
  return (
    <article>
        <h3>Categories</h3>
        <ul> 
            <li onClick={()=>handleFilterCategory()}>All Categories</li>
            {
                categories?.map(category=>(
                    <li onClick={()=>handleFilterCategory(category.id)} key={category.id}>{category.name}</li>
                ))
            }

        </ul>
    </article>
  )
}

export default FilterCategory