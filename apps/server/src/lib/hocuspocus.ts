import { Server } from "@hocuspocus/server";
import { Logger } from "@hocuspocus/extension-logger";

export const hocuspocus = Server.configure({
  extensions: [new Logger()],
});
