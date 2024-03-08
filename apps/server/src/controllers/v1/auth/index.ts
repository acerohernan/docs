import type { Request, Response } from "express";

import { createAccessToken } from "@/services/auth.service.js";

import { generateID } from "@/lib/id.js";

import {
  type IGetGuestAccessTokenResponse,
  GetGuestAccessTokenSchema,
} from "./schemas.js";

export async function getGuestAccessToken(
  req: Request,
  res: Response<IGetGuestAccessTokenResponse>,
): Promise<void> {
  const result = GetGuestAccessTokenSchema.safeParse(req.query);

  if (!result.success) {
    res.sendStatus(400);
    return;
  }

  const accessToken = await createAccessToken({
    id: generateID(),
    name: result.data.userName,
  });

  res.send({ accessToken });
}
