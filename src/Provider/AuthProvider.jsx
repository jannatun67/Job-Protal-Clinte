import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const[user,setUser]= useState(null)
    const [loading, setLoading]= useState(true)

  const  createUser = (email,password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email,password)
  }

  const signIn =(email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser =()=>{
    setLoading(true)
    return signOut(auth)
  }

  const SignInWithGoogle =()=>{
    return signInWithPopup(auth, provider)
 }


  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,(currentUser =>{
        setUser(currentUser)
        console.log(currentUser);
        setLoading(false)
    }))
    return ()=>{
        unsubscribe()
    }
  },[])
    const info ={
    user,
    setUser,
    loading,
    createUser,
    signIn,
    signOutUser ,
    SignInWithGoogle
    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;