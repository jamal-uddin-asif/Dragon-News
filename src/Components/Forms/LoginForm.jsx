import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";

const LoginForm = () => {
  const {singInUser} = useContext(AuthContext)
  const handleLogin = (e) =>{
    e.preventDefault();
     const email = e.target.email.value;
    const password = e.target.password.value;
    singInUser(email, password)
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })

  }
  return (
    <div className="card border mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center py-7 text-2xl text-primary font-semibold">Login your account</h1>
        {/* <p>{user ? user.email : ''}</p> */}
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">

            {/* Email  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="text-xs text-center">Dont’t Have An Account ? <Link to={'/registration'} className="text-secondary ">Register</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
