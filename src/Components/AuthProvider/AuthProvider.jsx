
import { createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";


const AuthProvider = ({children}) => {
    
    
const [user, setUser] = useState(null)
console.log(user)

const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const singInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

const signOutUser = () =>{
    return signOut(auth)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe();
    }
},[])

const authInfo = {
    user,
    createUser,
    singInUser,
    signOutUser,
}

  return (
    <>
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
    </>
  )
};

export default AuthProvider;
