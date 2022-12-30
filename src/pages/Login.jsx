import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Credntials } from "../App";

export const handleErrors = async (response) => {
    if(!response.ok) {
        const {message} = await response.json();
        throw Error(message);
    }
    return response.json();
};

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, setCredentials] = useContext(Credntials);
    const [error, setError] = useState('');
    const Login = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(handleErrors)
        .then(() => {
            setCredentials({
                username,
                password,
            })
            navigate("/")
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    const navigate = useNavigate();
    return (
        <div>
            {error && (<span style={{color: 'red'}}>{error}</span>)}
            <form onSubmit={Login}>
                <input 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="username" 
                />
                <br></br>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password" 
                />
                <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login