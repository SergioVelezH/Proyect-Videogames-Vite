import { Link } from "react-router-dom";

import './create.css'
import Form from "../../components/form/form";



function Create() {
    return (
        <div>
            <Link to={"/home"}>
                <button className="button-container">Home</button>
            </Link>
            <h1 className='title'>CREATE    YOUR     VIDEOGAME!</h1>
            <Form/>
        </div>
    )
}

export default Create;