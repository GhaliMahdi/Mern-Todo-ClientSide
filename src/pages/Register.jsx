import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Credntials } from "../App";
import  {handleErrors} from "./Login" 

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, setCredentials] = useContext(Credntials);
    const [error, setError] = useState('');
    const register = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/register`, {
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
            <form onSubmit={register}>
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
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register