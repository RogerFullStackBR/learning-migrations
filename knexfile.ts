export default {
  client: "sqlite3", // driver de conexão
  connection: {
    filename: "./src/database/database.db", // onde fica o banco de dados
  },
  // foreign key restriction
  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },
  useNullAsDefault: true,
  migrations: {
    extensions: "ts", // typescript
    directory: "./src/database/migrations",
  },
  seeds: {
    extensions: "ts", // typescript
    directory: "./src/database/seeds",
  },
};
