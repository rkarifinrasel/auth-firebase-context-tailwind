import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProviders = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }


    //onAuthState
    useEffect(()=>{
        const unSubscribtion=onAuthStateChanged(auth,currentUser =>{
            console.log('user State no changed',currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribtion();
        } 
    },[])


    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
      logOut,
      googleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;