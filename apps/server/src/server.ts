import cors from "cors";
import type http from "http";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import expressWebsockets from "express-ws";

import { env } from "./config/env.js";
import { logger } from "./config/logger.js";

import { router } from "./routes/index.js";

import { hocuspocus } from "./lib/hocuspocus.js";

export class Server {
  app: expressWebsockets.Application;
  httpServer?: http.Server;

  constructor() {
    const { app } = expressWebsockets(express());

    app.use(cors({ origin: "*" }));
    app.use(helmet());

    // body parsing
    app.use(express.json());

    // application/x-www-form-urlencoded body
    app.use(express.urlencoded({ extended: true }));

    // http logging
    app.use(
      morgan(":method :url :status :res[content-length] - :response-time ms"),
    );

    // health check
    /**
     *  GET /
     *  @descripton Health check route
     */
    app.get("/", (_, res) => res.sendStatus(200));

    // api routes
    app.use("/api", router);

    // websockets route
    app.ws("/ws", (websocket, request) =>
      hocuspocus.handleConnection(websocket, request),
    );

    this.app = app;
  }

  start(): void {
    this.httpServer = this.app.listen(env.PORT, () => {
      logger.info(
        `Listening on http://localhost:${env.PORT} in <${env.NODE_ENV}> environment and with <${env.LOG_LEVEL}> log level`,
      );
    });
  }

  stop(): void {
    if (!this.httpServer) return;

    this.httpServer.close();
  }
}
