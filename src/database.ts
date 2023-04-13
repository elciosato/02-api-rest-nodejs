import { env } from "./env";

import { knex as setupKnex, Knex } from "knex";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not found!");
}

export const configDB: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(configDB);