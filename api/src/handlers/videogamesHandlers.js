const {
  getAllVideogames,
  getVideogameByName,
  getVideogameById,
  postNewVideogame,
  makeRelationship,
} = require("../controllers/videogamesControllers");

const getAllVideogamesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const videogameByName = await getVideogameByName(name);
      res.status(200).json(videogameByName);
    } else {
      const videogame = await getAllVideogames();
      res.status(200).json(videogame);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVideogamesByIdHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const response = await getVideogameById(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postNewVideogameHandler = async (req, res) => {
  const {
    genreId,
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
  } = req.body;

  try {
    const response = await postNewVideogame(
      name,
      description,
      platforms,
      background_image,
      released,
      rating
    );
    const { id } = response.dataValues;
    await makeRelationship(id, genreId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllVideogamesHandler,
  getVideogamesByIdHandler,
  postNewVideogameHandler,
};
