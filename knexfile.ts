export default {
  client: "sqlite3", // driver de conexão
  connection: {
    filename: "./src/database/database.db", // onde fica o banco de dados
  },
  useNullAsDefault: true,
  migrations: {
    extensions: "ts", // typescript
    directory: "./src/database/migrations",
  },
};
