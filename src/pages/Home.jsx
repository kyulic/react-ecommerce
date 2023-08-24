
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import { useEffect, useState } from 'react'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'

const Home = () => {

    const [inputValue, setInputValue] = useState('')
    const [priceMinMax, setPriceMinMax] = useState({
        min:0,
        max:Infinity
    })

    // const products=useSelector(states=>states.products)
   const products =useSelector(states=>states.products)
   const handleSearchName=(e)=>{
    
    setInputValue(e.target.value.toLowerCase())

   }
 const cbFilter=prod=>prod.title.toLowerCase().includes(inputValue)
   
 
 const cbFilterPrice=prod=>
 {const condMin=priceMinMax.min<=prod.price
 const condMax=prod.price<= priceMinMax.max
 return condMin &&condMax

}

  return (
    <div><h1>Home</h1> 
    <form >
        
    <input value={inputValue} onChange={handleSearchName} type="text" placeholder='Search Name' />
    <button>Search</button>
    </form>
    <aside>
            <FilterPrice 
            setPriceMinMax={setPriceMinMax}
            priceMinMax={priceMinMax}
            />
            <FilterCategory/>
        </aside>
        
        <div className='home_cardproduct'>
            {
                products?.filter(cbFilter).filter(cbFilterPrice).map(prod=>(
                    <CardProduct
                    key={prod.id}
                    prod={prod}
                    />
                ))
            }

        <footer className='franja_home'>        
         <section className='seccion_home'>Karla Yulieth Caquimbo U.: 
        <a className='link_repositorio' href="https://github.com/kyulic/react-ecommerce">Repositorio</a></section>
        </footer>



        </div>
        




    </div>
  )
}

export default Home