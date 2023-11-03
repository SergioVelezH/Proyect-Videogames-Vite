import { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import './detail.css'
import { empty, getVideogameById } from '../../redux/actions';
import Point from '../../components/point/point';



function Detail() {

const dispatch = useDispatch();
const videogame = useSelector((state) => state.videogameId);
const { id } = useParams();

useEffect(() => {
    dispatch(getVideogameById(id));
  
    // Función de limpieza que se ejecutará cuando el componente se desmonte
    return () => {
      dispatch(empty());
    };
  }, [id]);

    return (
        !videogame.length ? (<div className='home'><h1 className='loading'>CARGANDO...</h1></div>) : (
        <div>
            <Link to={"/home"}>
                <button className="button-back">Home</button>
            </Link>
            
            {Array.isArray(videogame) ? (
        videogame.map((game) => <Point game={game} />)
    ) : (
        videogame
    )}
        </div>
        )
    )
}

export default Detail;