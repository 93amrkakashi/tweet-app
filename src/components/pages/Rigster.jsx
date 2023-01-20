import React from 'react'
import { useRegister } from '../../hooks/auth'
import { useForm } from "react-hook-form";
import { emailValidate, usernameValidate, passwordValidate } from '../../hooks/validations';
import { login } from '../../utils/routes';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
// import { passwordValidate } from "./../../hooks/validations";

function Rigster() {
  const { register, handleSubmit, reset, formState:{errors} } = useForm();
  const { register:signup, isLoading } = useRegister();
// console.log(errors) at 00:58 **** dont forget
  async function handleregister(data){
    const sucsess = await signup({
      username:data.username,
      email:data.email,
      password:data.password,
    });
    if (sucsess) reset();
  }  return (
    <>
    <Navbar />
    <div className='regster'>
    <div className="login-card">
        <h2>Regster</h2>
        <form onSubmit={handleSubmit(handleregister)}>
        <label > User Name</label>
          <input type="text" placeholder="your User Name" {...register("username", usernameValidate)} />
          <label > Email</label>
          <input type="email" placeholder="your Email" {...register("email", emailValidate)} />
          <label > Password</label>
          <input type="password" placeholder="your Password" {...register("password", passwordValidate)} />
          <button className='login-btn' type="submit"> Rigster</button>
        </form>
        <p>
          You are a user ?{"  "}
          <Link to={login}>Login</Link>
        </p>
      </div>
    
    </div>
    </>
  )
}

export default Rigster