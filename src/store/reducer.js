let initialState = {
    movies: [],
  card:[],
  listName:''
}
export function fetcher(value){
return function(dispatch){
    fetch(`https://www.omdbapi.com/?apikey=d554bc03&s=${value}`)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({type:'SEARCH', payload:data.Search})

      });
}
}
function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD':
            console.log('ok')
            let obj = state.movies.find((item) => {
                return item.imdbID === action.payload
            })
            let newarr = [...state.card, obj]
            return {...state, card: newarr}
         case'SEARCH':
                return {...state, movies: action.payload}
         case 'DEL':
          return {...state, card:state.card.filter( item=> item.imdbID !== action.payload)}  
          case "LISTNAME":
            return {...state, listName: action.payload}
        
    }
    return state
}
 export default reducer