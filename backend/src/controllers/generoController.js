import express from 'express'
import db from '../services/generoService.js'

const routes = express.Router();

routes.get('/', async (request, response) => {
  try {
    const results = await db.findGender();

    if (results.length === 0) {
      response.status(204).end();
    } else {
      response.status(200).json(results);
    }
  } catch (err) {
    response.status(500).json({ message: `Encontramos um erro: ${err}` });
  }
})

routes.post('/', async (request, response) => {
  const { genero } = request.body;

  await db.createGenero(genero);

  response.status(200).send({ message: "Genero salvo com sucesso" })
})


routes.put("/", async (request, response) => {
  try {
    const { genero } = request.body;
    await db.updateGenero(genero);
    response.status(200).send({ message: "Dados atualizados com sucesso" });
  } catch (err) {
    response.status(500).send({ message: `Erro na requisição: ${err}` });
  }
});

routes.delete("/:idGenero", async (req, res) => {
  try {
    const { idGenero } = req.params;
    await db.deleteGenero(idGenero);
    res.status(200).send({ message: "Dados excluídos com sucesso" });
  } catch (err) {
    res.status(500).send({ message: `Erro na requisição: ${err}` });
  }
});

export default routes;