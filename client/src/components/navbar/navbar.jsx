import { Link } from "react-router-dom";


import './navbar.css'



function Navbar({handleChange,handleSubmit}) {
    return (
        <div>
            <form className='search-form'  onChange={handleChange}>
                <input className='search-input' placeholder='Search...' type='search' />
                <button className="boton-search" type='submit' onClick={handleSubmit} >🔍</button>
                <Link to={"/create"}>
                <button className='boton-create'>Create Videogame</button>
                </Link>
                <button className="boton-search" onClick={() => window.location.reload()}>🔄</button>
            </form>
        </div>
    )
}

export default Navbar;
