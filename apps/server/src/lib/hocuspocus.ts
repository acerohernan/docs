import { Server } from "@hocuspocus/server";
import { Logger } from "@hocuspocus/extension-logger";

import { env } from "@/config/env.js";

import { verifyAccessToken } from "@/services/auth.service.js";

const isDev = env.NODE_ENV === "development";
const isProd = env.NODE_ENV === "production";

export const hocuspocus = Server.configure({
  extensions: [
    new Logger({
      onConnect: isDev || isProd,
      onChange: isDev,
      onConfigure: isDev,
      onDestroy: isDev,
      onRequest: isDev,
      onLoadDocument: isDev,
      onStoreDocument: isDev,
    }),
  ],
  onAuthenticate: async (payload) => {
    if (!payload.token) throw new Error("unathorized");

    const result = await verifyAccessToken(payload.token);

    if (!result.success) throw new Error("unathorized");
  },
});
