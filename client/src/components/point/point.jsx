import './point.css'



function Point({game}) {
    const {id,name,released,background_image,rating,platforms,genres,description} = game;

    const combinedGenres = Array.isArray(genres)
    ? genres.map((genre) => genre.name).join(', ')
    : genres;

    return (
        <div >
            <h1>{name}</h1>
            <h4>{id}</h4>
            <h4>{released}</h4>
            <h4>{rating}</h4>
            <h4>{platforms}</h4>
            <h3>{combinedGenres}</h3>
            <p>{description}</p>
            <img src={background_image} alt="" />
        </div>
    )
}

export default Point;