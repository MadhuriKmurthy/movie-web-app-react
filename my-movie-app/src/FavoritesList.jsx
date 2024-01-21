import FavoriteMovie from "./FavoriteMovie"
function FavoritesList(props){
    return(

        <div>
            <h3>My Favorites Movies</h3>
            {props.favorites.length > 0 ? (
            <ul>
                {props.favorites.map(movie => (
                    <FavoriteMovie movie={movie} removeFavorite={props.removeFavorite}/>
                ))}
            </ul>
            ) : (
                <p>You have no favorite movies yet.</p>
            )}
        </div>

    )
}

export default FavoritesList