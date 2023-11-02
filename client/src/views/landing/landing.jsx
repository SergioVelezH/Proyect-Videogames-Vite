import { Link } from "react-router-dom"
import './landing.css'



function Landing() {
    return (
        <div>
            <div className="global">
                <h1 className="text">🏁Welcome to Videogames Web Page!🏁</h1>
                    <Link  to={"/home"}>
                        <button className="boton">Click to home</button>
                    </Link>
            </div>
        </div>
    )
}

export default Landing;