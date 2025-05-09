import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { Children, createContext, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //for signin
     const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
     }

    const userInfo = {
        user,
        loading,
        createUser,
        loginUser
        
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;