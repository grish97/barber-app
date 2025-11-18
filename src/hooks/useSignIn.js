import { useState } from 'react';
import { useNavigate } from 'react-router';

export const useSignIn = () => {
    const naviagte = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        setTimeout(2000);

        naviagte('/')
    };

    return {
        username,
        password,
        setUserName,
        setPassword,

        handleSignIn
    };
};