import "reflect-metadata";

import path from "path";
import { DataSource } from "typeorm/index.js";
import { fileURLToPath } from "url";

import { env } from "../config/env.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.TYPEORM_HOST,
  port: env.TYPEORM_PORT,
  username: env.TYPEORM_USERNAME,
  password: env.TYPEORM_PASSWORD,
  database: env.TYPEORM_DATABASE,
  entities: [path.resolve(__dirname, "./entities/*{.js,.ts}")],
  migrations: [path.resolve(__dirname, "./migrations/*{.js,.ts}")],
});
