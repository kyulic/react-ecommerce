import axios from "axios"


const useAuth = () => {

    const createUser=(url,data)=>{
        // const url=`${baseUrl}${path}`
        axios.post(url,data)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const loginUser=(url,data)=>{
        axios.post(url,data)
        .then(res=>{
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data.user))
            console.log(res.data)})
        .catch(err=>console.log(err))
    }
    return{createUser,loginUser}
}

export default useAuth