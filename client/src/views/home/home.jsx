import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";

import './home.css'
import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';
import { getAllGenres, getAllVideogames, getByName, pag } from '../../redux/actions';




function Home() {
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.stateCopy);
    const [searchString,setSearchString] = useState("");
    
    function handleChange(e){
        setSearchString(e.target.value);
      }
    
      function handleSubmit(e){
        e.preventDefault();
        dispatch(getByName(searchString))
        dispatch(pag())    
      }  

      console.log(allVideogames)


    useEffect(() => {
        dispatch(getAllVideogames())
      },[dispatch])

    useEffect(() => {
        dispatch(getAllGenres())
      },[dispatch])  

    console.log(allVideogames)
      
    
    return (
        !allVideogames.length ? (<div className='home'><h1 className='loading'>CARGANDO...</h1></div>) : (
        <div className='home'>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Cards allVideogames = {allVideogames}/>
        </div>
        )
    )
}


export default Home;

