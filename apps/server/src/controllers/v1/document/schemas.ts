import { z } from "zod";

import type { IDocument } from "@/models/document.js";
import type { IUser } from "@/models/user.js";

export const GetDocumentSchema = z.object({
  documentId: z.string(),
});

export interface IGetDocumentResponse {
  document: IDocument;
  user: IUser;
}
