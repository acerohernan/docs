import { Document } from "../entities/document.js";

import { AppDataSource } from "../data-source.js";

export const DocumentRepository = AppDataSource.getRepository(Document);
