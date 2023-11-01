import { CREATE_NEW_VIDEOGAME, GET_ALL_GENRES, GET_ALL_VIDEOGAMES, GET_BY_NAME, GET_VIDEOGAME_BY_ID } from "../actions";



let initialState = {allVideogames:[],paginado: false,stateCopy:[], allGenres:[],videogameId:[]};

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

        default:
            return state;
    }


}


export default rootReducer;