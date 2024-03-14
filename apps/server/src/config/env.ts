import z from "zod";
import { config } from "dotenv";

import { logger } from "./logger.js";
import { LOG_LEVEL } from "./types.js";

config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.preprocess(Number, z.number()),
  LOG_LEVEL: z.nativeEnum(LOG_LEVEL),

  JWT_SECRET: z.string(),
  JWT_TTL: z.string(),

  TYPEORM_HOST: z.string(),
  TYPEORM_PORT: z.preprocess(Number, z.number()),
  TYPEORM_USERNAME: z.string(),
  TYPEORM_PASSWORD: z.string(),
  TYPEORM_DATABASE: z.string(),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  logger.error("ERRORS: ", {
    messages: result.error.issues.map((i) => `${i.path}: ${i.message}.`),
  });
  throw new Error("Error at parsing env variables");
}

export const env = result.data;
