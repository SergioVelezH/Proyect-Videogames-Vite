import { useState } from 'react'
import { useSelector } from "react-redux";

import Card from '../card/card';
import Paginacion from '../paginacion/paginacion';
import './cards.css'



function Cards({allVideogames}) {
    const videogamesList = allVideogames;
    
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(15);
    const maxPag = videogamesList.length / porPagina;
    
    
    return (
        <div className="card-container">
            {videogamesList.slice((pagina - 1) * porPagina,(pagina - 1) * porPagina + porPagina)
            .map((game) => (<Card game = {game}/>))}
            <Paginacion pagina ={pagina} setPagina = {setPagina} maxPag = {maxPag} />
        </div>
    )
}

export default Cards;