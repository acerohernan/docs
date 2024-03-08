import PromiseRouter from "express-promise-router";

import { authRouter } from "./auth.js";
import { documentRouter } from "./document.js";

export const v1Router = PromiseRouter();

v1Router.use("/auth", authRouter);

v1Router.use("/document", documentRouter);
