import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { defineConfig, env } from "prisma/config";

const projectRoot = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(projectRoot, "src/.env") });

const databaseUrl = new URL(env("DATABASE_URL"));
const shadowDatabaseUrl = new URL(databaseUrl);
shadowDatabaseUrl.pathname = databaseUrl.pathname + "_shadow";

export default defineConfig({
  schema: "src/prisma/schema.prisma",
  migrations: {
    path: "src/prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: databaseUrl.toString(),
    shadowDatabaseUrl: shadowDatabaseUrl.toString(),
  },
});
