import FavoriteMovie from "./FavoriteMovie"
function FavoritesList(props){
    return(

        <div>
            <h3>My Favorites Movies</h3>
            <ul>
                {props.favorites.map(movie => (
                    <FavoriteMovie movie={movie}/>
                ))}
            </ul>
        </div>

    )
}

export default FavoritesList