import './App.css';
import { useState } from "react"
import SearchMovies from './SearchMovies';
import FavoritesList from './FavoritesList';

function App() {
  const [favorites, setFavorites] = useState([])
  const addFavorite = (movie) => {
    setFavorites([...favorites, movie])
  }

  const removeFavorite = (movie) => {
    setFavorites(favorites.filter(f => f.imdbID !== movie.imdbID))
  }
  console.log(favorites)
  return (
    <div className="App">
      <SearchMovies addFavorite={addFavorite}/>
      <FavoritesList favorites={favorites} removeFavorite={removeFavorite}/>
    </div>
  );
}

export default App;
