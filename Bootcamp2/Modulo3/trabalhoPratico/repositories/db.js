import pg from "pg";

const connect = () => {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      "postgres://qrdtnxhs:e9xOVlTG0ok_5U3jgEnAffpBObe08l9b@silly.db.elephantsql.com/qrdtnxhs",
  });
  global.connection = pool;
  return pool.connect();
};

export { connect };
