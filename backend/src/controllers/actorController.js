import express from "express";
import db from "../services/actorService.js";

const routes = express.Router();

routes.get('/', async (request, response) => {
  try {
    const results = await db.findActor();

    if (results.length === 0) {
      response.status(204).end();
    } else {
      response.status(200).json(results);
    }
  } catch (err) {
    response.status(500).json({ message: `Encontramos um erro: ${err}` });
  }
});

routes.post("/", async (request, response) => {
  const { nome, sexo, dtNasc } = request.body;

  await db.createActor(nome, sexo, dtNasc);

  response.status(200).send({ message: "Ator salvo com sucesso" });
});

routes.put("/", async (request, response) => {
  try {
    const { nome, sexo, dtNasc } = request.body;
    await db.updateActor(nome, sexo, dtNasc);
    response.status(200).send({ message: "Dados atualizados com sucesso" });
  } catch (err) {
    response.status(500).send({ message: `Erro na requisição: ${err}` });
  }
});

routes.delete("/:idActor", async (req, res) => {
  try {
    const { idActor } = req.params;
    await db.deleteActor(idActor);
    res.status(200).send({ message: "Dados excluídos com sucesso" });
  } catch (err) {
    res.status(500).send({ message: `Erro na requisição: ${err}` });
  }
});

export default routes;
