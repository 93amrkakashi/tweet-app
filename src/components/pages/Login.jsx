import { async } from "@firebase/util";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/auth";
import { notifygood } from "../../hooks/notify";
import { emailValidate, passwordValidate } from "../../hooks/validations";
import { rigster } from "../../utils/routes";
import Navbar from "../layout/Navbar";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { login, isLoading } = useLogin();
  // console.log(errors) at 00:58 **** dont forget
  async function handleLogin(data) {
    const sucsess = await login({
      email: data.email,
      password: data.password,
      // redirectTo:data.redirectTo
    });
    if (!sucsess) {
      return;
    } else {
      return reset();
    }
  }

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-card">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <label> Email</label>
            <input
              type="email"
              placeholder="your Email"
              {...register("email", emailValidate)}
            />
            <label> Password</label>
            <input
              type="password"
              placeholder="your Password"
              {...register("password", passwordValidate)}
            />
            <button className="login-btn" type="submit"> Log In</button>
          </form>
          <p>
            dont have an account ?{"  "}
            <Link to={rigster}>Rigster</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
