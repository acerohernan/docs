import { authHeaders, axiosInstance } from "../config";
import { parseAxiosError } from "../utils";
import type { APIResponse } from "../types";
import type { IGetDocumentParams, IGetDocumentResponse } from "./types";

export const getDocument = async (params: IGetDocumentParams): Promise<APIResponse<IGetDocumentResponse>> => {
  try {
    const query = new URLSearchParams();
    query.append("documentId", params.documentId);

    const res = await axiosInstance.get(`/document?${query.toString()}`, { headers: authHeaders() });
    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    return parseAxiosError(err);
  }
};
