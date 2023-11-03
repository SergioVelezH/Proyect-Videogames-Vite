import { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import './detail.css'
import { getVideogameById } from '../../redux/actions';
import Point from '../../components/point/point';



function Detail() {

const dispatch = useDispatch();
const videogame = useSelector((state) => state.videogameId);
const { id } = useParams();

useEffect(() => {
    dispatch(getVideogameById(id))
  },[id])

    return (
        <div>
            <Link to={"/home"}>
                <button className="button-back">Home</button>
            </Link>
            {videogame.map((game) => <Point game = {game}/> )}
        </div>
    )
}

export default Detail;