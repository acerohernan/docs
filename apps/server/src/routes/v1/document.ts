import PromiseRouter from "express-promise-router";

import { authMiddleware } from "@/middleware/auth.js";

import { getDocument } from "@/controllers/v1/document/index.js";

export const documentRouter = PromiseRouter();

/**
 *  GET /guest
 *  @descripton Get access token for guest
 */
documentRouter.get("/", authMiddleware, getDocument);
