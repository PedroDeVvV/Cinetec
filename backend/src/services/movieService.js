import database from '../repository/connection.js'


async function insertMovie(name, launch, duration, gender, diretor) {
    const sql = "INSERT INTO tbl_filme(nome_filme, ano_lancamento, duracao, fk_id_genero, fk_id_diretor) VALUES(?,?,?,?,?)";
    const values = [name, launch, duration, gender, diretor];

    const conn = await database.connect();
    await conn.query(sql, values);
    conn.end();
}

async function getMovies() {
    const sql = "SELECT * FROM tbl_filme";

    const conn = await database.connect();
    const [rows] = await conn.query(sql);
    conn.end();
    return rows;
}

export default { insertMovie, getMovies }