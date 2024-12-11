import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

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
    signOutUser 
    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;