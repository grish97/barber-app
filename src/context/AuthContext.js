import { createContext } from "react";

export const AuthContext = createContext({
    firstName: null,
    lastName: null,
    accessToken: null,
    setAuth: () => {},
});