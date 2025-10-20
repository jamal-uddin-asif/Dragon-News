import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthContext";
import { toast } from "react-toastify";

const LoginWith = () => {
  const { user,signInWithGithub,signInWithGoogle } = useContext(AuthContext);

  const handleGithubLogin = () =>{
    console.log('github login')
    signInWithGithub()
    .then(result=>{
        // console.log(result)
        toast.success('Github Login success')

    })
    .catch(err=>{
        console.log(err)
    })
  }
  const handleGoogleLogin = () =>{
    console.log('github login')
    signInWithGoogle()
   .then(res=>{
    // console.log(res)
    
    toast.success('Google Login success')
   })
   .catch(err=>{
    console.log(err)
   })
  }
  return (
    <div>
      {!user ? (
        <>
          {" "}
          <h1 className="font-bold text-primary text-xl mb-4">Login With</h1>
          <div className="space-y-2">
            <button onClick={handleGoogleLogin} className="btn w-full bg-base-100">
              <FaGoogle size={22}></FaGoogle> Login With Google
            </button>
            <button onClick={handleGithubLogin} className="btn w-full bg-base-100 btn-">
              <FaGithub size={22}></FaGithub> Login With Github
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginWith;
