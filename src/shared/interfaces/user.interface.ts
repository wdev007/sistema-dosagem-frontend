export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum ROLE {
  ADMIN = "admin",
  USER = "user",
}
