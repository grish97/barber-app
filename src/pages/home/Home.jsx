import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
    const { firstName, lastName, accessToken } = useContext(AuthContext);

    console.log({
        firstName, lastName, accessToken
    });
    return (
        <div>Home Page</div>
    )
};