import { knex as knexConfig } from "knex"; // renomear para evitar conflitos com os nomes
import config from "../../knexfile"; // arquivo da raiz do projeto

export const knex = knexConfig(config); // exporta a conexao
