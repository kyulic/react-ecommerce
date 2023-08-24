import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"



const RegisterPage = () => {

    const {register,handleSubmit,reset}=useForm()
    
    const {createUser}=useAuth()
    
    const submit=(data)=>{
      const url = `${import.meta.env.VITE_REACT_APP_URL}/users`
        createUser(url,data)
        reset({
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            password:''
        })
    }

  return (
    <div className="container_register">


    <div className="footer_register">
      <form className="form_register" onSubmit={handleSubmit(submit)}>
        <div>
          <label className="label_register" htmlFor="firstName">First name</label>
          <input className="input_register" {...register('firstName')} type="text" id="firstName" />
        </div>
        <div>
          <label className="label_register" htmlFor="lastName">Last name</label>
          <input className="input_register" {...register('lastName')} type="text" id="lastName" />
        </div>
        <div>
          <label className="label_register" htmlFor="email">Email</label>
          <input className="input_register" {...register('email')} type="email" id="email" />
        </div>
        <div>
          <label className="label_register" htmlFor="password">Password</label>
          <input className="input_register" {...register('password')} type="password" id="password" />
        </div>
        <div>
          <label className="label_register" htmlFor="phone">Phone</label>
          <input className="input_register" {...register('phone')} type="number" id="phone" />
        </div>
        <button className="btn_register">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default RegisterPage