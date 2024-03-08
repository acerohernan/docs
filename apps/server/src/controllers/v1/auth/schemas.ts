import { z } from "zod";

export const GetGuestAccessTokenSchema = z.object({
  userName: z.string(),
});

export interface IGetGuestAccessTokenResponse {
  accessToken: string;
}
