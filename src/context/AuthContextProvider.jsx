import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        firstName: null,
        lastName: null,
        accessToken: null,
    });

    const authValue = {
        ...auth,
        setAuth
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};