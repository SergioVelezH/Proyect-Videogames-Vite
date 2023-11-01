require('dotenv').config();
const axios = require("axios");
const { Genre } = require("../db")

const {
    APY_KEY
  } = process.env;


const genreSet = new Set();
module.exports = getGenres = async () => {


    // const info = (await axios.get(`https://api.rawg.io/api/games?key=${APY_KEY}`)).data
    
    // const response = info.results;

    // for (const game of response) {
    //   const genres = game.genres;
      
    //     for (const genre of genres) {
    //       const genreName = genre.name;
          
    //       if (!genreSet.has(genreName)) {
    //         await Genre.create({ name: genreName });
    //         genreSet.add(genreName);
    //       }
    //     }
    //   }
      
    //   const arr = await Genre.findAll();
      
    //   return arr;

    const numGamesToFetch = 100;
  
  
    for (let page = 1; page <= Math.ceil(numGamesToFetch / 25); page++) {
      const response = (await axios.get(`https://api.rawg.io/api/games?key=${APY_KEY}&page=${page}`)).data;
      const videoArr = response.results;
  
      for (const game of videoArr) {
        const genres = game.genres;
  
        for (const genre of genres) {
          const genreName = genre.name;
  
          if (!genreSet.has(genreName)) {
            await Genre.create({ name: genreName });
            genreSet.add(genreName);
          }
  
        }
      }
    }
  
    const arr = await Genre.findAll();
      
    return arr;










    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    // for (const genre of response) {
    //     if (!genre.length === 0) {
    //       const genres = genre.map((data) => data.name )
          
    //       for(const each of genres){
    //         if(!genreSet.has(each)){
    //             await Genre.create({name: each});
    //             genreSet.add(each)
    //         };
    //     };
    //   };
    // };