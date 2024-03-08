import PromiseRouter from "express-promise-router";

import { getGuestAccessToken } from "@/controllers/v1/auth/index.js";

export const authRouter = PromiseRouter();

/**
 *  GET /guest
 *  @descripton Get access token for guest
 */
authRouter.get("/guest", getGuestAccessToken);
