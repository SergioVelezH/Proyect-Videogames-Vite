import { Link } from "react-router-dom"
import './landing.css'



function Landing() {
    return (
      <div className="landing-container">
        <div className="header">
          <h1 className="title">Welcome to Videogames!</h1>
        </div>
        <div className="button-container">
          <Link to="/home">
            <label></label>
            <button className="custom-button">Click to Home</button>
          </Link>
        </div>
      </div>
    );
  }

export default Landing;