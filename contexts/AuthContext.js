import { createContext, useState, Router } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    return <AuthContext.Provider value={{
    }}> {children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;