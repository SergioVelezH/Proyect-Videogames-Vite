


const infoCleaner = (arr) => {
    return arr.map((game) => {
        return{
            id:game.id,
            name:game.name,
            genres:game.genres.map((genre) => genre.name).join(),
            background_image: game.background_image,
        }
    })
};

const detailInfo = (arr) => {
    return arr?.map((game) => {
        return{
            id:game.id,
            name:game.name,
            genres:game.genres.map((genre) => genre.name).join(),
            background_image: game.background_image,
            platforms: game.platforms.map((plat) => plat.platform.name).join(),
            released: game.released,
            rating: game.rating,
            description: game.description
        }
    })
    
}


module.exports = {
    infoCleaner,
    detailInfo
};