import type { Request, Response } from "express";

import type { IUser } from "@/models/user.js";
import type { IDocument } from "@/models/document.js";

import type { AuthMiddlewareLocals } from "@/middleware/auth.js";

import { GetDocumentSchema, type IGetDocumentResponse } from "./schemas.js";

export async function getDocument(
  req: Request,
  res: Response<IGetDocumentResponse, AuthMiddlewareLocals>,
): Promise<void> {
  const { grants } = res.locals;

  if (!grants) {
    res.sendStatus(401);
    return;
  }

  const result = GetDocumentSchema.safeParse(req.query);

  if (!result.success) {
    res.sendStatus(400);
    return;
  }

  const document: IDocument = {
    id: "demo",
    title: "Demo document",
    lastOpenedAt: Date.now(),
  };

  const user: IUser = {
    id: grants.id,
    name: grants.name,
  };

  res.send({ document, user });
}
