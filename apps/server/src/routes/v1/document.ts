import PromiseRouter from "express-promise-router";

import { authMiddleware } from "@/middleware/auth.js";

import {
  getDemoDocument,
  getDocument,
} from "@/controllers/v1/document/index.js";

export const documentRouter = PromiseRouter();

/**
 *  GET /document/demo
 *  @descripton get demo document and user information
 */
documentRouter.get("/demo", getDemoDocument);

/**
 *  GET /document
 *  @descripton get document and user information
 */
documentRouter.get("/", authMiddleware, getDocument);
