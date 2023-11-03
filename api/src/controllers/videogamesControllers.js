require('dotenv').config();
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { infoCleaner, detailInfo } = require('../utils');
const { Sequelize } = require("sequelize");

const {
    APY_KEY
  } = process.env;


const getAllVideogames = async () => {

    try {
      
     
    const apiUrl = 'https://api.rawg.io/api/games';
    const numGamesToFetch = 100; 
    const numGamesPerRequest = 10;
    const numRequests = Math.ceil(numGamesToFetch / numGamesPerRequest);
  
    const requests = [];
  
    for (let page = 1; page <= numRequests; page++) {
      requests.push(axios.get(`${apiUrl}?key=${APY_KEY}&page=${page}`));
    }
  
    
      const responses = await Promise.all(requests);
      const info = responses
        .map((response) => response.data.results)
        .reduce((acc, games) => acc.concat(games), []);
      
      const allGames = infoCleaner(info)   
  
      const videogamesDb = await Videogame.findAll({
        include: 'genres', 
      });
  
      return [...videogamesDb, ...allGames.slice(0, 100)];
     } catch (error) {
        throw Error ("Ups hubo un problema en el servidor")
      }
    
  };
    
    

    
    




const getVideogameByName = async (name) => {
   

    const info = (await axios.get(`https://api.rawg.io/api/games?key=${APY_KEY}`)).data;
    const clean = info.results.slice(0, 100);
    const response = infoCleaner(clean);

    const filteredVideogames = response.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));

    const filteredDb = await Videogame.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: `%${name}%`, 
          },
        },
      });
    if(filteredVideogames.length === 0 && filteredDb.length === 0){
        throw Error ("No hay ningún videogame con este nombre");
    }


    return [...filteredVideogames.slice(0, 15), ...filteredDb];

};


const getVideogameById = async(id,source) => {
    let array = [];
    let videogame; 

    if (source === "api") {
        const response = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${APY_KEY}`)).data;
        array.push(response)
        videogame = detailInfo(array);
    } else {
       const objDb = await Videogame.findByPk(id, {
        include: 'genres', 
      })
        if(objDb){
        const info = [objDb.toJSON()]
         videogame = info;
       }
    }
      return videogame;         
};

// const makeRelationship = async (id, genreId) => {
//     const videogame = await Videogame.findByPk(id);
//     const genre = await Genre.findByPk(genreId);
//     return videogame.addGenre(genre);
// };
const makeRelationship = async (id, genreIds) => {
  const videogame = await Videogame.findByPk(id);

  
  if (!Array.isArray(genreIds)) {
    throw new Error('genreIds debe ser un arreglo de IDs.');
  }

  
  for (const genreId of genreIds) {
    const genre = await Genre.findByPk(genreId);
    if (genre) {
      await videogame.addGenre(genre);
    } 
  }
};



const postNewVideogame = async (name, description, platforms, background_image, released, rating) => {

  const existingGame = await Videogame.findOne({ where: { name } });

  if (existingGame) {

      throw new Error('Ya existe un videojuego con el mismo nombre');
  }

  
  return await Videogame.create({ name, description, platforms, background_image, released, rating });
};



module.exports = {
    getAllVideogames,
    getVideogameByName,
    getVideogameById,
    postNewVideogame,
    makeRelationship
}