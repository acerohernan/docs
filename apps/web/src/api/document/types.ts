import { IDocument, IUser } from "../types";

export interface IGetDocumentParams {
  documentId: string;
}

export interface IGetDocumentResponse {
  user: IUser;
  document: IDocument;
}

export interface IGetDemoDocumentResponse {
  document: IDocument;
}
