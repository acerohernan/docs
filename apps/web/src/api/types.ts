export type APIResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      statusCode: number;
    };

export interface IUser {
  id: string;
  name: string;
}

export interface IDocument {
  id: string;
  title: string;
  lastOpenedAt: number;
}
