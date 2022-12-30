import { useContext } from "react"
import { Link } from "react-router-dom"
import { Credntials } from "../App"
import Todos from "../components/Todos"

function Welcome() {
    const [credntials] = useContext(Credntials)
    return (
        <div>
            <h1>Welcome {credntials && credntials.username}!</h1>
            {!credntials && <Link to="/register">Register</Link>}
            <br />
            {!credntials && <Link to="/login">Login</Link>}
            {credntials && <Todos />}
        </div>
    )
}

export default Welcome