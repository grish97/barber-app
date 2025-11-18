import { useState } from "react";
import './SignIn.css';


export const SignIn = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="signin">
            <h3>Sign In Your Profile</h3>

            <div className="field">
                <input
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
            </div>

            <div className="field">
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button>Sign In</button>
        </div>
    )
};