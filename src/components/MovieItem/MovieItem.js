import './MovieItem.css';




function MovieItem({Title, Poster, Year, Add, imdbID}) {
    

        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => Add(imdbID)}>Добавить в список</button>
                </div>
            </article>
        );
    }

 
export default MovieItem;