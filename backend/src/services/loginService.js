import database from "../repository/connection.js";

async function login(email, password) {
  const sql = "SELECT * FROM tbl_usuario WHERE email=? AND senha=?";
  const dataLogin = [email, password];

  const conn = await database.connect();
  const [rows] = await conn.query(sql, dataLogin);
  conn.end();

  return rows;
}

export default { login };
