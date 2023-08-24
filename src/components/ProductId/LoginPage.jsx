import React from 'react'
import { useForm } from 'react-hook-form'
import useFetch from '../../hooks/useFetch'
import useAuth from '../../hooks/useAuth'
import './styles/LoginPage.css'

const LoginPage = () => {

  const{register,reset,handleSubmit}=useForm()
  const {loginUser}=useAuth()

  const submit=(data)=>{
    const url = `${import.meta.env.VITE_REACT_APP_URL}/users/login`
    loginUser(url,data)
  }

  return (
    <div className='container_login'>

    <div className='loginpage_container'>
      <h3>Welcome! Enter your email and password to continue</h3>
      <form className='loginpage_form' onSubmit={handleSubmit(submit)}>
        <div className='label_login' >
          <label className='label_login' htmlFor="email">Email</label>
          <input className='input_login' {...register('email')} type="email" id="email" />
        </div>
        <div className='label_login'>
          <label className='label_login' htmlFor="password">Password</label>
          <input className='input_login' {...register('password')} type="password" id="password" />
        </div>
        <button className='btn_loginpage'>Login</button>
      </form>
    </div>
    </div>
  )
}

export default LoginPage