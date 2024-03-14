export interface IDemoUser {
  name: string;
  color: string;
}

const demoUserKey = "__demo_user";

export const getDemoUser = (): IDemoUser | null => {
  const userString = sessionStorage.getItem(demoUserKey);
  if (!userString) return null;

  const demoUser = JSON.parse(userString) as IDemoUser;

  // validation
  if (!demoUser.color || !demoUser.name) return null;

  return demoUser;
};

export const saveDemoUser = (user: IDemoUser): void => {
  sessionStorage.setItem(demoUserKey, JSON.stringify(user));
};
