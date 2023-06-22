import pg from "pg";

const connect = () => {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: "",
  });
  global.connection = pool;
  return pool.connect();
};

export { connect };
