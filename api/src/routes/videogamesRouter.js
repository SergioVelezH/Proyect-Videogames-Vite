const { Router } = require("express");
const { getAllVideogamesHandler, getVideogamesByIdHandler, postNewVideogameHandler } = require("../handlers/videogamesHandlers");




const videogamesRouter = Router();


videogamesRouter.get("/", getAllVideogamesHandler );
videogamesRouter.get("/:id", getVideogamesByIdHandler  );
videogamesRouter.post("/", postNewVideogameHandler );


module.exports = videogamesRouter;
