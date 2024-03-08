import { Hocuspocus } from "@hocuspocus/server";

import { env } from "./config/env.js";
import { logger } from "./config/logger.js";

export class Server {
  wsServer: Hocuspocus;

  constructor() {
    this.wsServer = new Hocuspocus({
      port: env.PORT,
    });
  }

  start(): void {
    void this.wsServer.listen(async () => {
      logger.info(
        `Listening on http://localhost:${env.PORT} in <${env.NODE_ENV}> environment and with <${env.LOG_LEVEL}> log level`,
      );
    });
  }

  stop(): void {
    void this.wsServer.destroy();
  }
}
