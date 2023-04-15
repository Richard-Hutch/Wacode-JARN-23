/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react"
import { auth, db } from "../config/firebase"
import { useContext, createContext } from "react"

import {
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  signOut,
  Unsubscribe,
  UserCredential
} from "firebase/auth"

import { setDoc, doc } from "firebase/firestore"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  // current user data state
  const [user, setUser] = React.useState(null)

  // is loading hook
  const [loading, setLoading] = React.useState(true)

  // error with login or sign up
  const [error, setError] = React.useState(null)

  // login with email and password
  const login = async (email, password) => { 
    try {
      const { user: userCred } = await signInWithEmailAndPassword(auth, email, password)
      setError({ isError: false, message: null })
      return userCred?.uid || null
    }
    catch (error) { 
      setError({ isError: true, message: error.toString() }) 
      throw error
    }
  }

  // signUp with email and password
  const signUp = async (data) => {

    try {

      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)
      
      // get all data except for password
      const {
        email,
        password,
        username
      } = data

      const insert = {
        email,
        password,
        username,
        days: []
      }

      try {
        // add document to db
        await setDoc(doc(db, "users", user.uid), insert)
        
        setError({ isError: false, message: null })

        return user.uid    
      }
      catch(error) {
        setError({ isError: true, message: error.toString() }) 
      }

    }
    catch (error) { 
      setError({ isError: true, message: error.toString() })  
      throw error
    }

    return null
  }

  // logout with current auth
  const logOut = async () => {
    await signOut(auth)
    setUser(null)
  }

  const clearError = async () => setError({ isError: false, message: null })

  // Hook for onAuthStateChange to set or remove the user
  React.useEffect(() => {
    const unSub = onAuthStateChanged(auth, userCred => { 
      if (userCred) setUser({ uid: userCred.uid, email: userCred.email, displayName: userCred.displayName })
      else setUser(null)

      setLoading(false)
    })
    return () => unSub()
  }, [])


  return (
    <AuthContext.Provider value={{ user, login, signUp, logOut, error, clearError }}>
      {(loading) ? null : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)