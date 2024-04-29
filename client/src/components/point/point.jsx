import './point.css'



function Point({game}) {
    const {id,name,released,background_image,rating,platforms,genres,description} = game;

    const des = description.replace( /(<([^>]+)>)/ig, '');

    const combinedGenres = Array.isArray(genres)
    ? genres.map((genre) => genre.name).join(', ')
    : genres;

    return (
        <div className='Container'>
        <div className='Point' >
            <img src={background_image} alt="" />
            <div className='info-div'>
            <h3> Id: {id}</h3>
            <h1 className='Title'>{name}</h1>
            <h3 className='genres'>{combinedGenres}</h3>
            <h3 className='released' >{released}</h3>
            <h3 className='rating'>{rating}</h3>
            <h3 className='plat'>{platforms}</h3>
            <p className='parra'>{des}</p>
            </div>
        </div>
        </div>
    )
}

export default Point;