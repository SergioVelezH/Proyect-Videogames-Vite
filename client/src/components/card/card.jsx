import { Link } from "react-router-dom";

import './card.css'



function Card({game}) {
    const {id,name,genres,background_image} = game;


    return (
        <div className="card">
            <Link to={`/home/${id}`}>
            <img className="card-image" src={background_image} alt={name}/>
            </Link>
            <h1 className="card-title" >{name}</h1>
            <h3 className="card-genres" >{genres}</h3>
        </div>
    )
}


export default Card;