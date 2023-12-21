import express from 'express';
import db from '../services/userService.js'

const routes = express.Router();

routes.post('/', async (request, response) => {
  const { name, email, password, typeUser } = request.body;

  await db.createUser(name, email, password, typeUser);

  response.status(200).send({ message: "Salvo com sucesso" })
})

routes.put('/', async (request, response) => {
  try {
    const { name, email, password, typeUser, idUser } = request.body;
    await db.updateUser(name, email, password, typeUser, idUser);
    response.status(200).send({ message: "Dados atualizados com sucesso" })
  } catch (err) {
    response.status(500).send({ message: `Erro na requisição: ${err}` })
  }
})

routes.delete('/:idUser', async (req, res) => {
  try {
    const { idUser } = req.params;
    await db.deleteUser(idUser);
    res.status(200).send({ message: "Dados excluídos com sucesso" })
  } catch (err) {
    res.status(500).send({ message: `Erro na requisição: ${err}` })
  }
});



routes.get('/', async (req, res) => {
  const users = await db.getUsers();
  try {
    return res.status(200).send({ message: users });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
});

routes.get('/:idUser', async (request, response) => {
  const { userId } = request.params;

  try {
    const users = await db.getSpecificUser(userId)
    return res.status(200).send({
      message: users
    })
  } catch (err) {
    return res.status(500).send({ message: err })
  }
});


export default routes;