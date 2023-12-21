import database from "../repository/connection.js"

async function createUser(nome, email, password, typeUser) {
  const sql = "INSERT INTO tbl_usuario(nome_usuario, email, senha, tipo_usuario) VALUES(?,?,?,?)"
  const values = [nome, email, password, typeUser]

  const conn = await database.connect();
  await conn.query(sql, values)
  conn.end()
}

async function updateUser(nome, email, password, typeUser, idUser) {
  const sql = "UPDATE tbl_usuario SET nome_usuario = ?, senha = ?, email = ?,tipo_usuario = ? WHERE id_usuario = ?"
  const values = [nome, password, email, typeUser, idUser]

  const conn = await database.connect();
  await conn.query(sql, values)
  conn.end()
}

async function deleteUser(idUser) {
  const sql = "DELETE FROM tbl_usuario WHERE id_usuario = ?"

  const conn = await database.connect();
  await conn.query(sql, idUser)
  conn.end();
}

async function getUsers() {
  const sql = "SELECT * FROM tbl_usuario";
  const conn = await database.connect();
  const [rows] = await conn.query(sql);
  conn.end();

  return rows;
}

async function getSpecificUser(userId) {
  const sql = "SELECT * FROM tbl_usuario WHERE id_usuario = ?";
  const conn = await database.connect();
  const [rows] = await conn.query(sql, userId);
  conn.end();

  return rows;
}

export default { createUser, updateUser, deleteUser, getUsers, getSpecificUser }