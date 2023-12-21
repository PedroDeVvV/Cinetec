import express from 'express'
import db from '../services/movieService.js'

const routes = express.Router();

routes.post("/", async (req, res) => {
    const { name, launch, duration, gender, director } = req.body;
    console.log(name, launch, duration, gender, director);
    await db.insertMovie(name, launch, duration, gender, director);
    res.status(200).send({
        success: true,
        message: "Salvo com sucesso"
    });
})

routes.get("/", async (req, res) => {
    const results = await db.getMovies();
    console.log(results)
    res.status(200).json(results)
})

export default routes