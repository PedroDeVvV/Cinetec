import express from "express";
import db from "../services/loginService.js";
import { generatedToken } from "../helpers/userfeatures.js";

const route = express.Router();

route.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await db.login(email, password);

    if (users.length > 0) {
      const id_user = users[0].id_usuario;
      const email_user = users[0].email;
      const nome = users[0].nome_usuario;
      const token = generatedToken(id_user, email_user);
      res.status(200).send({
        message: `${token} Login efetuado com sucesso, bem vindo(a) ${nome}`,
        data: nome,
      });
      console.log(token)
    } else {
      res.status(401).send({ message: "Login incorreto" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: `Houve um erro no banco de dados. ${err}` });
  }
});


export default route;