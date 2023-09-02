import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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


    const authInfo={
        user,
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;