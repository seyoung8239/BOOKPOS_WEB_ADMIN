import React, { useState, createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("token"));
    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
