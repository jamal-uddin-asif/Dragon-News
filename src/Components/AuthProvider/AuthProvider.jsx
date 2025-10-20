
import { createUserWithEmailAndPassword,  GithubAuthProvider,  GoogleAuthProvider,  onAuthStateChanged,  sendPasswordResetEmail,  signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";


const AuthProvider = ({children}) => {
    
    
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const githubProvider = new GithubAuthProvider()
const googleProvider = new GoogleAuthProvider()


const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const singInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const signInWithGithub = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}
const signInWithGoogle =() =>{
    setLoading(true)
    signInWithPopup(auth, googleProvider)
}
const signOutUser = () =>{
    setLoading(true)
    return signOut(auth)
}
const updateUserProfile = (updateData) =>{
    return updateProfile(auth.currentUser, updateData)
}
const passwordReset = (email) =>{
    return sendPasswordResetEmail(auth,email)
}
useEffect(()=>{
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }

},[])

const authInfo = {
    user,
    createUser,
    singInUser,
    signInWithGithub,
    signInWithGoogle,
    updateUserProfile,
    signOutUser,
    passwordReset,
    loading,
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
