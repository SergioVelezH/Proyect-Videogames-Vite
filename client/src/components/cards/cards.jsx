import Card from '../card/card';
import './cards.css'



function Cards({allVideogames}) {
    const videogamesList = allVideogames;
    
    
    
    return (
        <div className="card-container">
            {videogamesList.map((game) => (<Card game = {game}/>))}
        </div>
    )
}

export default Cards;