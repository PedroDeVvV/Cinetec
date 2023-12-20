import database from '../repository/connection.js'

async function findGender() {
  const sql = "SELECT * FROM tbl_genero";

  const conn = await database.connect();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

async function createGenero(genero) {
  const sql = "INSERT INTO tbl_genero(genero) VALUES(?)"
  const values = [genero];

  const conn = await database.connect();
  await conn.query(sql, values);
}
async function updateGenero(genero, idGenero) {
  const sql =
    "UPDATE tbl_genero SET genero = ? WHERE id_genero = ?";
  const values = [genero, idGenero];

  const conn = await database.connect();
  await conn.query(sql, values);
  conn.end();
}

async function deleteGenero(idGenero) {
  const sql = "DELETE FROM tbl_genero WHERE id_genero = ?";

  const conn = await database.connect();
  await conn.query(sql, idGenero);
  conn.end();
}

export default { createGenero, updateGenero, deleteGenero, findGender };