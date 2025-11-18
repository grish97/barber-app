import { useSignIn } from '../../hooks/useSignIn';
import './SignIn.css';


export const SignIn = () => {
    const { username, password, setPassword, setUserName, handleSignIn } = useSignIn();

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

            <button onClick={handleSignIn}>Sign In</button>
        </div>
    )
};