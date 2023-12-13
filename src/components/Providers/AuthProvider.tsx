'use client'

import React, { createContext, useContext, useState } from 'react';

interface Props {
    loggedIn: boolean;
    login: () => void;
    logout: () => void;
    children: React.ReactNode
}

const AuthContext = createContext<Props | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    return (
        <AuthContext.Provider value={{ loggedIn, login, logout, children }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};