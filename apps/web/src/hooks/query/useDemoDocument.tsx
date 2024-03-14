import { useQuery } from "@tanstack/react-query";

import { API } from "@/api";
import type { IGetDemoDocumentResponse } from "@/api/document/types";

export const useDemoDocument = () =>
  useQuery<IGetDemoDocumentResponse>({
    queryKey: ["document", "demo"],
    queryFn: async () => {
      const result = await API.document.getDemoDocument();

      if (!result.success) {
        throw new Error("couldn't fetch demo document. http status: " + result.statusCode);
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
