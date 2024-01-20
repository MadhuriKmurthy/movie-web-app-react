import './App.css';
import { useState } from "react"
import SearchMovies from './SearchMovies';
import FavoritesList from './FavoritesList';

function App() {
  const [favorites, setFavorites] = useState([])
  const addFavorite = (movie) => {
    setFavorites([...favorites, movie])
  }
  console.log(favorites)
  return (
    <div className="App">
      <SearchMovies addFavorite={addFavorite}/>
      <FavoritesList favorites={favorites}/>
    </div>
  );
}

export default App;
