import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";

import { validar } from '../../helpers/validations';
import './form.css'
import { createNewVideogame, getAllGenres } from '../../redux/actions';



function Form() {
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.allGenres);

    const [input, setInput] = useState({
        genreId:[],
        name:"",
        description:"",
        platforms:"",
        background_image:"",
        released:"",
        rating:""
    });

    const [errors, setErrors] = useState({
        name:"",
        description:"",
        platforms:"",
        background_image:"",
        released:"",
        rating:""
     });

     const [msg, setMsg] = useState({
        name:false,
        msg:''
     });

     function handleChange(event) {{
        if (event.target.type === 'checkbox') {
            // Manejar casillas de verificación
            const genreId = event.target.value;
            const updatedGenreIds = input.genreId.includes(genreId)
              ? input.genreId.filter(id => id !== genreId)
              : [...input.genreId, genreId];
        
            setInput({
              ...input,
              genreId: updatedGenreIds,
            });
          } else setInput({
            ...input,
            [event.target.name]: event.target.value,
            })}
        setErrors(validar({...input, [event.target.name]: event.target.value}))
        };

    function handleSubmit(event){
        event.preventDefault();
        const response = dispatch(createNewVideogame(input));
            if(response){
                setMsg({
                    name:true,
                    msg:'El videogame ha sido creado con éxito'
                })
            }
        };    
    useEffect(() => {
        dispatch(getAllGenres())
    },[dispatch])    

    return (
        <div>
            <form className='form-form'>
        <div className='all-div'>

        {/* <label for="opcion1">Opción 1</label>
        <input type="checkbox" id="opcion1" name="opciones" value="opcion1"></input> */}

        <div>
            <label className='only-label'>Name</label>
            <input className='only-input' type="name" name='name' placeholder='Name' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.name}</span>
        </div>
        <div>
            <label className='only-label'>Description</label>
            <input className='only-input' type="description" name='description' placeholder='Description' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.description}</span>
        </div>
        <div>
            <label className='only-label'>Platforms</label>
            <input className='only-input' type="platforms" name='platforms' placeholder='Platforms' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.platforms}</span>
        </div>
        <div>
            <label className='only-label'>Image</label>
            <input className='only-input' type="background_image" name='background_image' placeholder='URL' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.background_image}</span>
        </div>
        <div>
            <label className='only-label'>Released</label>
            <input className='only-input' type="released" name='released' placeholder='Released' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.released}</span>
        </div>
        <div>
            <label className='only-label'>Rating</label>
            <input className='only-input' type="rating" name='rating' placeholder='Rating' value={input.value} onChange={handleChange}/>
            <span className='only-span'>{errors.rating}</span>
        </div>
        {/* <div>
            <select typeof="select-one" name='genreId' value={input.genreId} onChange={handleChange} id="" >
            {Array.isArray(allGenres) && allGenres.length > 0 ? 
            (allGenres.map((genre) => (<option key={genre.id} value={genre.id}>{genre.name}</option>))
    ) : (
      <option value="">No genre available</option>
    )}
            </select>
        </div> */}
        <div>
            <h3>Selecciona el género de tu juego</h3>
  {Array.isArray(allGenres) && allGenres.length > 0 ? (
    allGenres.map((genre) => (
      <div key={genre.id}>
        <label htmlFor={`opcion${genre.id}`}>{genre.name}</label>
        <input type="checkbox" id={`opcion${genre.id}`} name="genreId" value={genre.id} onChange={handleChange} />
      </div>
    ))
  ) : (
    <p>No se pudieron cargar los generos</p>
  )}
</div>


        </div>

        {errors.name||errors.description||errors.platforms||errors.background_image||errors.released||errors.rating 
        ? 
        null :
        <button className = "boton-form" type='submit' onClick={handleSubmit}>Submit</button> }
        {msg.name && <span className='good-span'>{msg.msg}</span>}
      </form>
        </div>
    )
}

export default Form;
