import express from "express";
import db from "../services/diretorService.js";

const routes = express.Router();

routes.get ('/', async (request, response) => {
  try{
    const results = await db.findDirector();

    if(results.length === 0 ){
      response.status(204).end();
    } else {
      response.status(200).json(results);
    }
  }catch(err) {
    response.status(500).json({message: `Encontramos um erro: ${err}`});
  }
});

routes.post("/", async (request, response) => {
  const { nome, nacionalidade, dtNasc, sexo } = request.body;

  await db.createDiretor(nome, nacionalidade, dtNasc, sexo);

  response.status(200).send({ message: "Diretor salvo com sucesso" });
});

routes.put("/", async (request, response) => {
  try {
    const { nome, nacionalidade, dtNasc, sexo } = request.body;
    await db.updateDiretor(nome, nacionalidade, dtNasc, sexo);
    response.status(200).send({ message: "Dados atualizados com sucesso" });
  } catch (err) {
    response.status(500).send({ message: `Erro na requisição: ${err}` });
  }
});

routes.delete("/:idDiretor", async (req, res) => {
  try {
    const { idDiretor } = req.params;
    await db.deleteDiretor(idDiretor);
    res.status(200).send({ message: "Dados excluídos com sucesso" });
  } catch (err) {
    res.status(500).send({ message: `Erro na requisição: ${err}` });
  }
});

export default routes;
