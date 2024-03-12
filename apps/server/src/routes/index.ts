import PromiseRouter from "express-promise-router";

import { v1Router } from "./v1/index.js";

export const router = PromiseRouter();

router.use("/v1", v1Router);
