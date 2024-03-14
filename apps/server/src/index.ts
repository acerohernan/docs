import { logger } from "./config/logger.js";

import { Server } from "./server.js";

let server: Server | undefined;

try {
  server = new Server();
  await server.start();
} catch (error) {
  logger.error("[Main] unexpected error happened", error);

  if (!server) process.exit(1);

  await server.stop();
  process.exit(1);
}

const signals = ["SIGINT", "SIGTERM"] as NodeJS.Signals[];
signals.forEach((s) => {
  process.on(s, () => {
    logger.info(`[Main] ${s} signal received, shutting down gracefully...`);

    if (!server) return process.exit(1);

    void server.stop().finally(() => process.exit(1));
  });
});
