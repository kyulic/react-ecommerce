import { useEffect } from "react"
import usePurchase from "../hooks/usePurchase"
import PurchasesCard from "../components/Purchases/PurchasesCard"


const PurchasesPage = () => {


    const {purchases,getAllPurchases}=usePurchase()
    
    useEffect(()=>{
        getAllPurchases()
    },[])
    console.log(purchases)
  return (
    <div>
        <h2>Purchases</h2>
        <div>
            {
                purchases?.map(prod=>(
                    <PurchasesCard
                    key={prod.id}
                    prod={prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasesPage