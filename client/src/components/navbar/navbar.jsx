import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import './navbar.css'
import { filterOrigin, orderAlfa, orderRating } from "../../redux/actions";



function Navbar({handleChange,handleSubmit}) {

    const dispatch = useDispatch();

    const handleFilterOrigin =  (event) => {
        dispatch(filterOrigin(event.target.value))
    }
    const handleOrderAlfa =  (event) => {
        dispatch(orderAlfa(event.target.value))
    }
    const handleOrderRating = (event) => {
        dispatch(orderRating(event.target.value))
    }

    return (
        <div>
            <form className='search-form'  onChange={handleChange}>
                <input className='search-input' placeholder='Search...' type='search' />
                <button className="boton-search" type='submit' onClick={handleSubmit} >🔍</button>
                <Link to={"/create"}>
                <button className='boton-create'>Create Videogame</button>
                </Link>
                <button className="boton-search" onClick={() => window.location.reload()}>🔄</button>
                <div>
                <label htmlFor="dataBaseCheckbox">Data Base</label>
                <input type="checkbox" id="dataBaseCheckbox" name="Data Base" value="Data Base" onChange={handleFilterOrigin} />
                <label htmlFor="apiCheckbox">Api</label>
                <input type="checkbox" id="apiCheckbox" name="Api" value="Api" onChange={handleFilterOrigin} />
                <label htmlFor="aToZCheckbox">A-Z</label>
                <input type="checkbox" id="aToZCheckbox" name="A-Z" value="A-Z" onChange={handleOrderAlfa} />
                <label htmlFor="zToACheckbox">Z-A</label>
                <input type="checkbox" id="zToACheckbox" name="Z-A" value="Z-A" onChange={handleOrderAlfa} />
                <label htmlFor="bestCheckbox">Best</label>
                <input type="checkbox" id="bestCheckbox" name="Best" value="Best" onChange={handleOrderRating} />
                <label htmlFor="worstCheckbox">Worst</label>
                <input type="checkbox" id="worstCheckbox" name="Worst" value="Worst" onChange={handleOrderRating} />
                <label htmlFor="dataBaseCheckbox">RESET</label>
                <button name="All" value="All" onChange={handleFilterOrigin} />
                </div>
            </form>
        </div>
    )
}

export default Navbar;

                // <div >
                // <label>Data Base</label>
                // <input type="checkbox" id="" name="Data Base" value="Data Base" onChange={handleFilterOrigin} />
                // <label>Api</label>
                // <input type="checkbox" id="" name="Api" value="Api" onChange={handleFilterOrigin} />
                // <label>A-Z</label>
                // <input type="checkbox" id="" name="A-Z" value="A-Z" onChange={handleOrderAlfa} />
                // <label>Z-A</label>
                // <input type="checkbox" id="" name="Z-A" value="Z-A" onChange={handleOrderAlfa}/>
                // <label>Best</label>
                // <input type="checkbox" id="" name="Best" value="Best" onChange={handleOrderRating} />
                // <label>Worst</label>
                // <input type="checkbox" id="" name="Worst" value="Worst" onChange={handleOrderRating} />
                // </div>