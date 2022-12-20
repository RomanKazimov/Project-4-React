import './ListPage.css';
import { useSelector } from 'react-redux';

function ListPage() {
    let card = useSelector(state => state.card)
    let listName = useSelector(state => state.listName)
    console.log(listName)
        return (
            <div className="list-page">
                <h1 className="list-page__title">{listName}</h1>
                <ul>
                    {card.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/` }>{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
                }
 
export default ListPage;