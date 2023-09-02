import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }


    //onAuthState
    useEffect(()=>{
        const unSubscribtion=onAuthStateChanged(auth,currentUser =>{
            console.log('user State no changed',currentUser);
            setUser(currentUser)
        });
        return ()=>{
            unSubscribtion();
        } 
    },[])


    const authInfo={
        user,
        createUser,
        signInUser,
      logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;