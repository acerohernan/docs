import type { Response, Request, NextFunction } from "express";

import type { IGrants } from "@/models/auth/grants.js";

import { verifyAccessToken } from "@/services/auth.service.js";

export interface AuthMiddlewareLocals {
  grants: IGrants;
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  if (!req.headers.authorization) {
    res.sendStatus(401);
    return;
  }

  const accessToken = req.headers.authorization.replace("Bearer ", "");

  if (!accessToken) {
    res.sendStatus(401);
    return;
  }

  const result = await verifyAccessToken(accessToken);

  if (!result.success) {
    res.sendStatus(401);
    return;
  }

  res.locals.grants = result.grants;

  next();
}
