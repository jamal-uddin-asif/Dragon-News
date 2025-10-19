import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";

const RegistrationForm = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegis = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card border mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-center py-7 text-2xl text-primary font-semibold">
        Register your account
      </h1>
      <div className="card-body">
        <form onSubmit={handleRegis}>
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />

            {/* Photo  */}
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />

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


            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <p className="text-xs text-center">
          Alrady have an accunt?{" "}
          <Link to={"/login"} className="text-secondary ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
