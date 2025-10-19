import React from "react";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <div className="card border mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center py-7 text-2xl text-primary font-semibold">Login your account</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="text-xs text-center">Dont’t Have An Account ? <Link to={'/registration'} className="text-secondary ">Register</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
