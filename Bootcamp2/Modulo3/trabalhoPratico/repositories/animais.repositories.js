import { connect } from "./db.js";

const insertAnimalRepository = async (animal) => {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *";
    const values = [animal.nome, animal.tipo, animal.proprietario_id];

    const res = await conn.query(sql, values);
    return res.row[0];
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

const updateAnimalRepository = async (animal) => {
  const conn = await connect();

  try {
    const sql =
      "UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4";
    const values = [animal.nome, animal.tipo, animal.proprietario_id];

    const res = await conn.query(sql, values);
    return res.row[0];
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

const deleteAnimalRepository = async (id) => {
  const conn = await connect();

  try {
    const res = await conn.query("DELETE animais WHERE animal_id = $1", [id]);
    return res.row;
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

const getAnimaisRepository = async () => {
  const conn = await connect();

  try {
    const res = await conn.query("SELECT * FROM animais");
    return res.rows;
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

const getAnimalRepository = async (id) => {
  const conn = await connect();

  try {
    const res = await conn.query("SELECT * FROM animais WHERE animal_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }
};

export {
  insertAnimalRepository,
  updateAnimalRepository,
  deleteAnimalRepository,
  getAnimaisRepository,
  getAnimalRepository,
};
