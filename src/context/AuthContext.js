import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}


const AuthProveder = ({ children }) => {

    const [currentUser, setcurrentUser] = useState('');
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
      }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }
    function logout() {
        return auth.signOut()
      }
    function resetpassword(email) {
        return auth.sendPasswordResetEmail(email)
      }
    function updateemail(email) {
        return currentUser.updateEmail(email)
      }
    function updatepassword(password) {
        return currentUser.updatePassword(password)
      }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setcurrentUser(user)
            setLoading(false);
        })
        return unsubscribe
    }, [])




    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetpassword,
        updateemail,
        updatepassword,
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProveder