import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";

import './home.css'
import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';
import { getAllVideogames, getByName } from '../../redux/actions';




function Home() {
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.allVideogames);
    const [searchString,setSearchString] = useState("");
    function handleChange(e){
        e.preventDefault();
        setSearchString(e.target.value);
      }
    
      function handleSubmit(e){
        e.preventDefault();
        dispatch(getByName(searchString));   
      }  
    
    useEffect(() => {
        dispatch(getAllVideogames())
      },[dispatch])
    
    
      return (
        !allVideogames.length ? (<div><h1>CARGANDO</h1></div>) : (
        <div className='home'>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Cards allVideogames = {allVideogames}/>
        </div>
        )
    )
}


export default Home;

