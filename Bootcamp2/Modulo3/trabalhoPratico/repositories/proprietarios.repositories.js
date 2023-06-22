import { connect } from "./db.js";

const insertProprietarioRepository = async (proprietario) => {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *";
    const values = [proprietario.nome, proprietario.telefone];

    const res = await conn.query(sql, values);
    return res.row[0];
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

const updateProprietarioRepository = async (proprietario) => {
  const conn = await connect();

  try {
    const sql = "";
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

const deleteProprietarioRepository = async (id) => {
  const conn = await connect();

  try {
    const sql = "DELETE proprietarios WHERE ";
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

const getProprietariosRepository = async () => {
  const conn = await connect();

  try {
    const res = await conn.query("SELECT * FROM proprietarios");
    res.rows;
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

const getProprietarioRepository = async (id) => {
  const conn = await connect();

  try {
    const sql = "SELECT * FROM proprietarios WHERE proprietario_id = $1";
    const value = [id];

    const res = await conn.query(sql, value);
    return res.rows[0];
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

export {
  insertProprietarioRepository,
  updateProprietarioRepository,
  deleteProprietarioRepository,
  getProprietariosRepository,
  getProprietarioRepository,
};
