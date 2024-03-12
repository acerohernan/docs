import { useQuery } from "@tanstack/react-query";

import { API } from "@/api";
import type { IGetDocumentResponse } from "@/api/document/types";

import { removeAccessToken } from "@/lib/token";

export const useDocument = (documentId: string) =>
  useQuery<IGetDocumentResponse>({
    queryKey: ["document", documentId],
    queryFn: async () => {
      const result = await API.document.getDocument({ documentId });
      if (!result.success) {
        if (result.statusCode === 401) {
          removeAccessToken();
        }

        throw new Error("couldn't fetch document. http status: " + result.statusCode);
      }
      return result.data;
    },
    refetchOnMount: true,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    retry: 1,
  });
