import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import './navbar.css'
import { filterOrigin, filterVideogameGenre, orderAlfa, orderRating } from "../../redux/actions";



function Navbar({handleChange, handleSubmit}) {

    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.allGenres);


    const handleFilterOrigin =  (event) => {
        dispatch(filterOrigin(event.target.value))
    }
    const handleFilterGenre =  (event) => {
        dispatch(filterVideogameGenre(event.target.value))
    }
    const handleOrderAlfa =  (event) => {
        dispatch(orderAlfa(event.target.value))
    }
    const handleOrderRating = (event) => {
        dispatch(orderRating(event.target.value))
    }

    return (
        <div>
            <form className='search-form' onChange={handleChange} >
                <input className='search-input' placeholder='Search by name. . .' type='search' />
                <button className="boton-create" type="submit" onClick={handleSubmit}>🔍</button>
                <div>
                <select  placeholder="Origin" onChange={handleFilterOrigin} >
                    <option value="Data Base">Data Base</option>
                    <option value="Api">Api</option>
                    <option value="All">All</option>
                </select>
                <select placeholder="Team" onChange={handleFilterGenre}>
                {Array.isArray(allGenres) && allGenres.length > 0 ? 
             (allGenres.map((genre) => (<option key={genre.id}>{genre.name}</option>))
             ) : (
                 <option value="">Loading...</option>
                 )}
                </select>
                <select  placeholder="Alpha" onChange={handleOrderAlfa} >
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select  placeholder="Rating" onChange={handleOrderRating} >
                    <option value="Best">Best</option>
                    <option value="Worst">Worst</option>
                </select>
                <button className="boton-reload" onClick={() => window.location.reload()}>🔄</button>
                <Link to={"/create"}>
                <button className='boton-create'>Create Videogame</button>
                </Link>
                </div>
            </form>
        </div>
    )
}

export default Navbar;




