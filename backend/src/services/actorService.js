import database from "../repository/connection.js";

async function findActor() {
  const sql = 'SELECT * FROM tbl_ator';

  const conn = await database.connect();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

async function createActor(nome, sexo, dtNasc) {
  const sql =
    "INSERT INTO tbl_ator(nome_ator, sexo, dt_nascimento) VALUES(?,?,?)";
  const values = [nome, sexo, dtNasc];

  const conn = await database.connect();
  await conn.query(sql, values);
  conn.end();
}

async function updateActor(nome, sexo, dtNasc, idAtor) {
  const sql =
    "UPDATE tbl_ator SET nome_ator = ?, sexo = ?, dt_nascimento = ? WHERE id_ator = ?";
  const values = [nome, sexo, dtNasc, idAtor];

  const conn = await database.connect();
  await conn.query(sql, values);
  conn.end();
}

async function deleteActor(idActor) {
  const sql = "DELETE FROM tbl_ator WHERE id_ator = ?";

  const conn = await database.connect();
  await conn.query(sql, idActor);
  conn.end();
}

export default { findActor, createActor, updateActor, deleteActor };
