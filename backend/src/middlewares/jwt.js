import jwt from 'jsonwebtoken';

function verifyJWT(req, res, next) {
  const secret = 'senha123456';

  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send({ message: 'Token não informado' })

  const parts = authHeader.split(' ');
  if (parts.lenth !== 2) return res.status(401).send({ message: 'Token inválido' })

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Usuário não autenticado' })
    }
    req.infoUser = decoded.infoUser;
    return next();
  })
}

export { verifyJWT }