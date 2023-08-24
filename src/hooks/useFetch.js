import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    //Get
    const getApi=(path)=>{
        const url=`${baseUrl}${path}`
        //para activar pantalla de carga
        setIsLoading(true)
        axios.get(url)
        .then(res=>{
            setInfoApi(res.data)
            setHasError(false)
        })
        .catch(err=>{
            setHasError(true)
            console.log(err)
        })
        .finally(()=>{
            setIsLoading(false)
        })

    }
    //post
    const postApi=(path,data)=>{
        const url=`${baseUrl}${path}`
        axios.post(url,data)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    
 return [infoApi,getApi,hasError,isLoading,postApi]
}

export default useFetch