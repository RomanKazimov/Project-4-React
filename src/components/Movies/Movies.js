import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useDispatch, useSelector } from 'react-redux';

function Movies(){
    // state = { 
    //     movies: [
    //         {
    //             imdbID: 'tt3896198',
    //             title: "Guardians of the Galaxy Vol. 2",
    //             year: 2017,
    //             poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    //         },
    //         {
    //             imdbID: 'tt0068646',
    //             title: "The Godfather",
    //             year: 1972,
    //             poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    //         }
    //     ]
    // }
    let dispatch = useDispatch()
    const Add =(id)=>{
dispatch({type:"ADD", payload:id})

    }
   
    let movies = useSelector(state => state.movies)
    console.log(movies)
        return ( 
            <ul className="movies">
                {movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} Add={Add} />
                    </li>
                ))}
            </ul>
        );
    }

 
export default Movies;