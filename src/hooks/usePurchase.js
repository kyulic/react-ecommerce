import axios from "axios"
import getConfigAuth from "../utils/getConfigAuth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCartG } from "../store/slices/car.slice"


const usePurchase = () => {
    const dispatch =useDispatch()
    const [purchases, setPurchases] = useState()
    const url = `${import.meta.env.VITE_REACT_APP_URL}/purchases`

    const getAllPurchases=()=>{
        axios.get(url,getConfigAuth())
        .then(res=>setPurchases(res.data))
        .catch(err=>console.log(err))

    }


    const makePurchase=()=>{
        axios.post(url,{},getConfigAuth())
        .then(res=>dispatch(setCartG([])))
        .catch(err=>console.log(err))

    }
    return {purchases, getAllPurchases, makePurchase }
}

export default usePurchase