import { axiosInstance } from "../config";
import { parseAxiosError } from "../utils";
import type { APIResponse } from "../types";
import type { IGetGuestTokenParams, IGetGuestTokenResponse } from "./types";

export const getGuestAccessToken = async (
  params: IGetGuestTokenParams,
): Promise<APIResponse<IGetGuestTokenResponse>> => {
  try {
    const query = new URLSearchParams();
    query.append("userName", params.userName);

    const res = await axiosInstance.get(`/auth/guest?${query.toString()}`);
    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    return parseAxiosError(err);
  }
};
