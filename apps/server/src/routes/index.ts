import PromiseRouter from "express-promise-router";

import { v1Router } from "./v1/index.js";

export const router = PromiseRouter();

/**
 *  GET /
 *  @descripton Health check route
 */
router.get("/", (_, res) => res.sendStatus(200));

/**
 *  GET /
 *  @descripton Health check route
 */
router.use("/v1", v1Router);
