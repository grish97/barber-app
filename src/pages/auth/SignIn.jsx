import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './SignIn.css';


export const SignIn = () => {
    const authContext = useContext(AuthContext);

    const naviagte = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        setTimeout(2000);

        authContext.setAuthInformation({
            username: username,
        });

        naviagte('/')
    };

    return (
        <div className="signin">
            <h3>
                Sign In Your Profile
            </h3>

            <div className="field">
                <TextField
                    sx={{ marginBottom: '10px' }}
                    fullWidth={true}
                    size='small'
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
            </div>

            <div className="field">
                <TextField
                    fullWidth={true}
                    size='small'
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <Button variant='contained' sx={{ marginTop: '10px' }} onClick={handleSignIn}>Sign In</Button>
        </div>
    );
};