import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_VIDEOGAME_BY_ID = "GET_VIDEOGAME_BY_ID";
export const CREATE_NEW_VIDEOGAME = "CREATE_NEW_VIDEOGAME";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const ORDER_ALFA = "ORDER_ALFA";
export const ORDER_RATING = "ORDER_RATING";
export const FILTER_VIDEOGAME_GENRE = "FILTER_VIDEOGAME_GENRE";


export function getAllVideogames(){
    return async function (dispatch){
        try {
            const response = await axios("http://localhost:3001/videogames");
            return dispatch({
                type: "GET_ALL_VIDEOGAMES",
                payload:response.data
    });    
    } catch (error) {
        return dispatch({
            type: "GET_ALL_VIDEOGAMES",
            payload: error.message
})
}
}
};

export function getByName(name) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        return dispatch({
            type: "GET_BY_NAME",
            payload: response.data,
          });
        
      } catch (error) {
        // Ocurrió un error en la solicitud
        return dispatch({
          type: "GET_BY_NAME",
          payload: error.response.data.error,
        });
      }
    };
  }



export function getVideogameById(id){
    return async function (dispatch){
        const response = (await axios(`http://localhost:3001/videogames/${id}`));
    return dispatch({
        type:"GET_VIDEOGAME_BY_ID",
        payload:response.data
    })    
    }
};

export function createNewVideogame(body){
    return async function (dispatch){
        const response = await axios.post(`http://localhost:3001/videogames`,body);
    return dispatch({
        type:"CREATE_NEW_VIDEOGAME",
        payload:response.data
    })    
    }
};



export function getAllGenres(){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/genres`);
    return dispatch({
        type:"GET_ALL_GENRES",
        payload:response.data
    })    
    }
};


export function filterOrigin(option){
    return{
        type: FILTER_ORIGIN,
        payload: option,
    }
};

export function filterVideogameGenre(option){
    return{
        type: FILTER_VIDEOGAME_GENRE,
        payload: option,
    }
};

export function orderAlfa(order){
    return{
        type: ORDER_ALFA,
        payload: order,
    }
};

export function orderRating(order){
    return{
        type: ORDER_RATING,
        payload: order,
    }
};