import { CREATE_NEW_VIDEOGAME, EMPTY, FILTER_ORIGIN, FILTER_VIDEOGAME_GENRE, GET_ALL_GENRES, GET_ALL_VIDEOGAMES, GET_BY_NAME, GET_VIDEOGAME_BY_ID, ORDER_ALFA, ORDER_RATING, PAGINATED } from "../actions";



let initialState = {allVideogames:[],pagin:false,stateCopy:[], allGenres:[],videogameId:[], filteredVideogames: []};

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                allVideogames:action.payload,
                stateCopy:action.payload,
            }
        case GET_BY_NAME:
            return{
                ...state,
                stateCopy:action.payload,
            }
        case PAGINATED:
          return{
            ...state,
            pagin: action.payload
          }    
                
        case GET_VIDEOGAME_BY_ID:
            return{
                ...state,
                videogameId:action.payload
            }
        case EMPTY:
          return{
            ...state,
            videogameId:action.payload
        }        
        case CREATE_NEW_VIDEOGAME:
            return{
                ...state,
                stateCopy:action.payload
            }    
        case GET_ALL_GENRES:
            return{
                ...state,
                allGenres:action.payload,
            }
            case FILTER_ORIGIN:
                const originalData = state.allVideogames.slice();
                switch (action.payload) {
                  case "Data Base":
                    return {
                      ...state,
                      stateCopy: originalData.filter((game) => isNaN((game.id))),
                      pagin: true
                    };
                  case "Api":
                    return {
                      ...state,
                      stateCopy: originalData.filter((game) => !isNaN((game.id))),
                      pagin: true
                    };
                  case "All":
                    return {
                      ...state,
                      stateCopy: originalData,
                      pagin: false,
                    };
                  default:
                    return state;
                }
                            
            case ORDER_ALFA:
                const alphabeticSort = (a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
                let sortedData = state.stateCopy.slice();
                  switch (action.payload) {
                    case "A-Z":
                        sortedData.sort(alphabeticSort);
                            break;
                    case "Z-A":
                        sortedData.sort((a, b) => alphabeticSort(b, a));
                            break;
                    default:
                            break;
                  }
                    return {
                      ...state,
                      stateCopy: sortedData, 
                    };
                            
                            
            case ORDER_RATING:
                const ratingSort = (a, b) => {
                    if (action.payload === "Best") {
                        return b.rating - a.rating;
                    } else {
                        return a.rating - b.rating;
                      }
                };
                let ratedData = state.stateCopy.slice();
                    ratedData.sort(ratingSort);
                      return {
                        ...state,
                        stateCopy: ratedData, 
                      };    
           
            case FILTER_VIDEOGAME_GENRE:
              
  const originalStateCopy = state.originalStateCopy || state.stateCopy.slice();
  console.log(state.stateCopy)
  
  const gamesWithMappedGenres = originalStateCopy.map((game) => {
    if (game.genres) {
      return {
        ...game,
        genres: Array.isArray(game.genres)
          ? game.genres.map((genre) => genre.name).join(',')
          : game.genres.split(",").join(",")
      };
    }
    return game;
  });

  const filteredGames = gamesWithMappedGenres.filter((game) =>
    game.genres && game.genres.includes(action.payload)
  );

  return {
    ...state,
    stateCopy: filteredGames,
    pagin: true,
    originalStateCopy: originalStateCopy, 
  };

            default:
              return state;
                            
              

  }
}
            
            
        
        
        export default rootReducer;
        
        
        
      