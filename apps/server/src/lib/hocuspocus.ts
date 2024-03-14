import { Server } from "@hocuspocus/server";
import { Logger } from "@hocuspocus/extension-logger";
import { Database } from "@hocuspocus/extension-database";

import { env } from "@/config/env.js";
import { logger } from "@/config/logger.js";

import { verifyAccessToken } from "@/services/auth.service.js";

import { Document } from "@/typeorm/entities/document.js";
import { DocumentRepository } from "@/typeorm/repositories/document.js";

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
    new Database({
      fetch: async ({ documentName: name }) => {
        try {
          let document: Document | null;

          document = await DocumentRepository.findOneBy({
            name,
          });

          if (!document) {
            document = new Document();
            document.name = name;
            document.data = Buffer.alloc(0);
            await DocumentRepository.save(document);
            logger.debug("document created in db", { name });
          }

          return document.data;
        } catch (error) {
          logger.error("error at fetching document from database", error);
          return null;
        }
      },
      store: async (data) => {
        try {
          await DocumentRepository.update(
            { name: data.documentName },
            { data: data.state },
          );
          logger.debug("document successfully updated in DB", {
            name: data.documentName,
          });
        } catch {
          logger.error("error at updating document", {
            name: data.documentName,
          });
        }
      },
    }),
  ],
  onAuthenticate: async (payload) => {
    // allow fetch demo document without authentication
    if (payload.documentName === "demo") return;

    if (!payload.token) throw new Error("unathorized");

    const result = await verifyAccessToken(payload.token);

    if (!result.success) throw new Error("unathorized");
  },
});
