import { createContext } from "react";

export const AuthContext = createContext({
    username: null,
    firstName: null,
    lastName: null,
    accessToken: null,
    setAuthInformation: () => {},
});