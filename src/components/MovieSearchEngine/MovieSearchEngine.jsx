import { useState } from "react";
import axios from 'axios';
import "../styles.css"
import "./MovieSearchEngine.module.css"


const MovieSearchEngine = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');


    const SearchMovies = async () => {
        try{
            const response = await axios.get(`https://www.omdbapi.com/?t=${query}&apikey=29531025`)
            console.log('Console teste: ' +response.data.Title)
            setMovies([response.data])
            console.log('Movies: '+JSON.stringify([movies[0].Title]))
        }catch(error){
            console.error('Erro: ', error)
        }
    };
    
    return (
        <div className="container">
            <div className="item">
                <h2 id="title">Movie Search</h2>
                <div className="app">
                    <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
                    <button onClick={SearchMovies}>Search</button>
                    <div>
                            {movies && movies.map((movie) => (
                                <div key={movie.imbdID}>
                                    <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.year}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>

    )

}

export default MovieSearchEngine;