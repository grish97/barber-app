import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const { firstName, lastName, accessToken } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(data => {
                setPosts(data);
            })
    }, []);

    return (
        <div>
            {posts.map(post => (
                <p>{post.body}</p>
            ))}
        </div>
    )
};