import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const api = express();
api.use(cors())

//modelo de comunicação de dados entres o front e o back
api.use(express.json());

api.use('/', routes);

api.listen(3333, () => { //porta
  console.log("O server está rodando");
});

//colocar a propriedade no package.json

