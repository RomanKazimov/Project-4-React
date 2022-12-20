import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Favorites.css';


function Favorites() {
    // state = {
    //     title: 'Новый список',
    //     movies: [
    //         { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    //     ]
    // }
    let dispatch = useDispatch()
    let card = useSelector(state => state.card)
    const del = (id)=>{
        dispatch({type:"DEL", payload:id})
    }
    


    const changeListName = (ev) => {
    dispatch({type:"LISTNAME", payload:ev.target.value})
    
    
}

    let {flag, setFlag} = useState(true)
        return (
            <div className="favorites">
                <input className="favorites__name" onChange={changeListName} />
                <ul className="favorites__list">
                    {card.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year}) <button onClick={()=>del(item.imdbID)}>X</button></li>;
                    })}
                    
                </ul>
                {flag ? 
                <button type="button" className="favorites__save" onClick={()=>{setFlag(false)}}>Сохранить список</button> :
            <Link to='/list'>Save List</Link>}
            </div>
        );
    }
 
export default Favorites;