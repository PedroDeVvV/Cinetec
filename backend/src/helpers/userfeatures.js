import jwt from 'jsonwebtoken'

function generatedToken(id_user, email_user) {
  const secret = "senha123456"

  return jwt.sign({ infoUser: { id_user, email_user }}, secret, { expiresIn: 60 * 60 * 5})
}

export { generatedToken }