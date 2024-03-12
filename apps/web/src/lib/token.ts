const tokenKey = "__token";

export const saveAccessToken = (accessToken: string) => {
  sessionStorage.setItem(tokenKey, accessToken);
};

export const getAccessToken = (): string => {
  return sessionStorage.getItem(tokenKey) || "";
};

export const removeAccessToken = () => {
  sessionStorage.removeItem(tokenKey);
};
