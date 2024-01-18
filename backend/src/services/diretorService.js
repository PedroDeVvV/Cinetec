import database from "../repository/connection.js";

async function findDirector() {
  const sql = 'SELECT * FROM tbl_diretor';

  const conn = await database.connect();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

async function createDiretor(nome, nacionalidade, dtNasc, sexo) {
  const sql = "INSERT INTO tbl_diretor(nome_diretor, nacionalidade, dt_nascimento, sexo) VALUES(?,?,?, ?)";
  const values = [nome, nacionalidade, dtNasc, sexo];

  const conn = await database.connect();
  await conn.query(sql, values);
  conn.end();
}

async function updateDiretor(nome, nacionalidade, dtNasc, sexo, idDiretor) {
  const sql =
    "UPDATE tbl_diretor SET nome_diretor = ?, nacionalidade = ?, dt_nascimento = ?, sexo = ? WHERE id_diretor = ?";
  const values = [nome, nacionalidade, dtNasc, sexo, idDiretor];

  const conn = await database.connect();
  await conn.query(sql, values);
  conn.end();
}

async function deleteDiretor(idDiretor) {
  const sql = "DELETE FROM tbl_diretor WHERE id_diretor = ?";

  const conn = await database.connect();
  await conn.query(sql, idDiretor);
  conn.end();
}

export default { createDiretor, updateDiretor, deleteDiretor, findDirector };