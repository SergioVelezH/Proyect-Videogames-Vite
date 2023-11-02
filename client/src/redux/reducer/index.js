import { CREATE_NEW_VIDEOGAME, FILTER_ORIGIN, GET_ALL_GENRES, GET_ALL_VIDEOGAMES, GET_BY_NAME, GET_VIDEOGAME_BY_ID, ORDER_ALFA, ORDER_RATING } from "../actions";



let initialState = {allVideogames:[],paginado: false,stateCopy:[], allGenres:[],videogameId:[], filteredVideogames: []};

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                allVideogames:action.payload,
                stateCopy:action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                allVideogames:action.payload
            }    
        case GET_VIDEOGAME_BY_ID:
            return{
                ...state,
                videogameId:action.payload
            }    
        case CREATE_NEW_VIDEOGAME:
            return{
                ...state,
                allVideogames:action.payload
            }    
        case GET_ALL_GENRES:
            return{
                ...state,
                allGenres:action.payload,
            }
            case FILTER_ORIGIN:
                const originalData = state.allVideogames.slice();
                // let filteredData;
                
                // switch (action.payload) {
                //   case "Data Base":
                //     filteredData = originalData.filter((game) => isNaN(Number(game.id)));
                //     break;
                //   case "Api":
                //     filteredData = originalData.filter((game) => !isNaN(Number(game.id)));
                //     break;
                //   case "All":
                //     filteredData = originalData;
                //     break;
                //   default:
                //     filteredData = originalData;
                // }
              
                // return {
                //   ...state,
                //   allVideogames: filteredData, // Actualiza allVideogames con el resultado del filtro
                // };


                 // Usar una copia de los datos originales

  switch (action.payload) {
    case "Data Base":
      return {
        ...state,
        stateCopy:state.allVideogames,
        filteredVideogames: originalData.filter((game) => isNaN(Number(game.id))),
      };
    case "Api":
      return {
        ...state,
        allVideogames: originalData.filter((game) => !isNaN(Number(game.id))),
      };
    case "All":
      return {
        ...state,
        allVideogames: originalData,
      };
    default:
      return state;
  }
              
              case ORDER_ALFA:
                const alphabeticSort = (a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
                let sortedData = state.allVideogames.slice();
              
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
                  allVideogames: sortedData, // Actualiza allVideogames con el resultado del ordenamiento alfabético
                };
              
              case ORDER_RATING:
                const ratingSort = (a, b) => {
                  if (action.payload === "Best") {
                    return b.rating - a.rating;
                  } else {
                    return a.rating - b.rating;
                  }
                };
              
                let ratedData = state.allVideogames.slice();
                ratedData.sort(ratingSort);
              
                return {
                  ...state,
                  allVideogames: ratedData, // Actualiza allVideogames con el resultado del ordenamiento por rating
                };    
            
            default:
                return state;
            }
            
            
        }
        
        
        export default rootReducer;
        
        
        
        
        // case FILTER_ORIGIN:
        //     switch(action.payload){
        //         case "Data Base":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames:state.stateCopy.filter((game) => isNaN(Number(game.id)))
        //             }
        //         case "Api":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames:state.stateCopy.filter((game) => !isNaN(Number(game.id)))
        //             }
        //         case "All":
        //             return{
        //                 allVideogames
        //             }
        //         default:
        //             return state;    
        //         }
        // case ORDER_ALFA:
        //         switch(action.payload){            
        //         case "A-Z":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames: state.stateCopy.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }))
        //             }
        //         case "Z-A":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames: state.stateCopy.sort((a, b) => b.name.localeCompare(a.name, 'es', { sensitivity: 'base' }))
        //             }
        //         default:
        //             return state;
        //         }
        // case ORDER_RATING:
        //         switch(action.payload){        
        //         case "Best":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames: state.stateCopy.sort((a, b) => b.rating - a.rating)
        //             }
        //         case "Worst":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames: state.stateCopy.sort((a, b) => a.rating - b.rating)
        //             }
        //         default:
        //             return state;                        
        //         }            
      
      
      
      
      
      
      
        // case FILTER_ORIGIN:
        //     switch(action.payload){
        //         case "Data Base":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames:state.stateCopy.filter((game) => isNaN(Number(game.id)))
        //             }
        //         case "Api":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames:state.stateCopy.filter((game) => !isNaN(Number(game.id)))
        //             }
        //         case "All":
        //             return{
        //                 allVideogames
        //             }
        //         default:
        //             return state;    
        //         }
        //     case ORDER_ALFA:
        //         switch(action.payload){            
        //         case "A-Z":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames: state.stateCopy.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }))
        //             }
        //         case "Z-A":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames: state.stateCopy.sort((a, b) => b.name.localeCompare(a.name, 'es', { sensitivity: 'base' }))
        //             }
        //         default:
        //             return state;
        //         }
        //     case ORDER_RATING:
        //         switch(action.payload){        
        //         case "Best":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames: state.stateCopy.sort((a, b) => b.rating - a.rating)
        //             }
        //         case "Worst":
        //             return{
        //                 ...state,
        //                 stateCopy:state.allVideogames,
        //                 allVideogames: state.stateCopy.sort((a, b) => a.rating - b.rating)
        //             }
        //         default:
        //             return state;                        
        //         }