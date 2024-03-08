import * as jose from "jose";

import { env } from "@/config/env.js";

import type { IGrants } from "@/models/auth/grants.js";

const issuer = "@docs/server";

export async function createAccessToken(grants: IGrants): Promise<string> {
  const secret = new TextEncoder().encode(env.JWT_SECRET);

  const jwt = new jose.SignJWT({ ...grants })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(issuer)
    .setExpirationTime(env.JWT_TTL)
    .setNotBefore(0)
    .setSubject(grants.id);

  return await jwt.sign(secret);
}

export async function verifyAccessToken(
  acessToken: string,
): Promise<{ success: true; grants: IGrants } | { success: false }> {
  const secret = new TextEncoder().encode(env.JWT_SECRET);
  try {
    const result = await jose.jwtVerify(acessToken, secret, { issuer });
    if (!result.payload) {
      return { success: false };
    }
    return { success: true, grants: result.payload as unknown as IGrants };
  } catch {
    return { success: false };
  }
}
