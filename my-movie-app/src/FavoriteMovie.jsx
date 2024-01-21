function FavoriteMovie({movie, removeFavorite}){

    const handleRemove = (e) => {
        e.stopPropagation()
        removeFavorite(movie)
    } 

    function isNotEmpty(obj) { 
        return !Object.keys(obj).length === 0; 
    }

    return(
        <li>
            <img src = {movie.Poster} alt={movie.Title}/>
            <div>
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
            </div>
            <button onClick={handleRemove}>
                Remove Movie
            </button>

        </li>
    )
}
export default FavoriteMovie