import { createContext, useState, useEffect, } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import firebase from '../lib/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

const formatUser = async (user) => ({
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.za,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const handleUser = async (currentUser) => {
        if (currentUser) {
            console.log(currentUser)
            const formatedUser = await formatUser(currentUser);
            setUser(formatedUser);
            setSession(true);
            return formatedUser.email;
        }
        setUser(false);
        setSession(false);
        return false;
    }

    const setSession = (session) => {
        if (session) {
            cookie.set('bookshelf', session, {
                expires: 1,
            });
        } else {
            cookie.remove('bookshelf');
        }
    }

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        signOut(auth);
    }

    return <AuthContext.Provider value={{
        user,
        loading,
        signup,
        login,
        logout,
    }}> {children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;