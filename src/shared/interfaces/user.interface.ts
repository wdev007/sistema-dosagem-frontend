export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  role: ROLE;
}

export enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}
