import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";

import Card from '../card/card';
import Paginacion from '../paginacion/paginacion';
import './cards.css'



function Cards({allVideogames}) {
    const videogamesList = allVideogames;
    
    const paginated = useSelector((state) => state.pagin)

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(15);
    const maxPag = videogamesList.length / porPagina;

    useEffect(() => {
       if(paginated){
        setPagina(1)
       }
      },[paginated])  

    console.log(paginated)
    return (
        <div>
        <div className="card-container">
            {Array.isArray(videogamesList) ? videogamesList.slice((pagina - 1) * porPagina,(pagina - 1) * porPagina + porPagina)
            .map((game) => (<Card game = {game}/>)) : videogamesList}
        </div>
            <Paginacion pagina ={pagina} setPagina = {setPagina} maxPag = {maxPag} />
        </div>
    )
}

export default Cards;