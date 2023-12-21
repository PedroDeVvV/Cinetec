import express from 'express';
import user from "./controllers/userController.js";
import ator from "./controllers/actorController.js";
import diretor from "./controllers/diretorcontroller.js";
import genero from "./controllers/generoController.js";
import login from "./controllers/loginController.js";
import actor from "./controllers/actorController.js";
import movie from "./controllers/movieController.js"

const routes = express();

routes.use('/user', user);
routes.use('/ator', ator);
routes.use('/diretor', diretor);
routes.use('/genero', genero);
routes.use('/login', login);
routes.use('/actor', actor);
routes.use('/movie', movie);

export default routes;
