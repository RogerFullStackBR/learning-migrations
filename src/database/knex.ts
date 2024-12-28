import { knex as knexConfig } from "knex";
import config from "../../knexfile"; // config file from knex

export const knex = knexConfig(config);
