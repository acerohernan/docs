import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { getAccessToken, saveAccessToken } from "@/lib/token";

import { API } from "@/api";
import { IGetGuestTokenParams } from "@/api/auth/types";

export interface IAuthContext {
  isLoggedIn: boolean;
  getGuestToken: (params: IGetGuestTokenParams) => Promise<boolean>;
}

const AuthContext = createContext<IAuthContext | null>(null);

/* Provider */

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState(getAccessToken);

  const isLoggedIn = useMemo(() => token !== "", [token]);

  const getGuestToken = useCallback(async (params: IGetGuestTokenParams) => {
    const result = await API.auth.getGuestAccessToken(params);

    if (!result.success) {
      alert("couldnt get access token, status: " + result.statusCode);

      return false;
    }

    setToken(result.data.accessToken);
    saveAccessToken(result.data.accessToken);
    return true;
  }, []);

  return <AuthContext.Provider value={{ isLoggedIn, getGuestToken }}>{children}</AuthContext.Provider>;
};

/* Hooks */

export const useAuthContext = () => useContext(AuthContext)!;
