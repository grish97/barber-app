import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        username: null,
        firstName: null,
        lastName: null,
        accessToken: null,
    });

    const authValue = {
        ...auth,
        setAuthInformation: (newAuthInformation) => {
            setAuth({
                ...auth,
                ...newAuthInformation
            });
        },
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};